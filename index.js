function promisify(targetFunction)
{
	var newFunction = function () {
		var hasCallback = (arguments.length >= targetFunction.length);
		if (hasCallback) return targetFunction.apply(this, arguments);

		var self = this;
		var args = Array.from(arguments);

		return new Promise(function (resolve, reject) {
			callback = function () {
				var err = arguments[0];
				err ? reject(err) : resolve.apply(null, Array.prototype.slice.call(arguments, 1));
			};
			args.push(callback);
			targetFunction.apply(self, args);
		});
	};
	return newFunction;
}

module.exports = promisify;
