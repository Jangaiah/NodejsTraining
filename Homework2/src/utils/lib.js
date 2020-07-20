"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.CommonFunctions = void 0;
var CommonFunctions = /** @class */ (function () {
    function CommonFunctions() {
        this.slNo = 0;
    }
    CommonFunctions.prototype.addUser = function (user) {
        return __assign(__assign({}, user), { id: ++this.slNo + '', isDeleted: false });
    };
    CommonFunctions.prototype.markDeleted = function (id, data) {
        data.forEach(function (ele, i) {
            if (ele.id == id)
                ele.isDeleted = true;
        });
    };
    CommonFunctions.prototype.getAutoSuggestUsers = function (subString, data) {
        var users = this.getUsers(data);
        return this.getSortedUsers(users.filter(function (ele) { return ele.login.toLowerCase().includes(subString.toLowerCase()); }));
    };
    CommonFunctions.prototype.getUsers = function (data) {
        return data.filter(function (ele) { return !ele.isDeleted; });
    };
    CommonFunctions.prototype.getSortedUsers = function (data) {
        return data.sort(function (a, b) { return (a.login < b.login) ? -1 : ((a.login == b.login) ? 0 : 1); });
    };
    CommonFunctions.prototype.updateUser = function (id, payload, data) {
        data.forEach(function (ele, i) {
            if (ele.id == id) {
                data[i] = __assign(__assign({}, ele), payload);
            }
        });
    };
    return CommonFunctions;
}());
exports.CommonFunctions = CommonFunctions;
