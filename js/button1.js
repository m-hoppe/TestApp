var BUTTON1 = (function(module) {

	module.Test = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(BUTTON1 || {}));