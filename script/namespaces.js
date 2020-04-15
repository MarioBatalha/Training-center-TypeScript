var validation;
(function (validation) {
    let emailRegex;
    let urlRegex;
    class emailValidator {
        isValid(str) {
            return emailRegex.test(str);
        }
    }
    class urlValidator {
        isvalid(str) {
            return urlRegex.test(str);
        }
    }
})(validation || (validation = {}));
//# sourceMappingURL=namespaces.js.map