"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorResponse = exports.createSuccessResponse = exports.createWebSocketUpdatePayload = exports.removeNullOrEmptyKeys = exports.isPresent = exports.isNilOrEmpty = void 0;
var R = __importStar(require("ramda"));
// GLOBALLY USED FUNCTIONS
exports.isNilOrEmpty = R.anyPass([R.isNil, R.isEmpty]);
exports.isPresent = R.complement(exports.isNilOrEmpty);
var removeNullOrEmptyKeys = function (object) {
    return R.filter(function (value) { return !(exports.isNilOrEmpty(value) || value === -1); }, object);
};
exports.removeNullOrEmptyKeys = removeNullOrEmptyKeys;
// FOR WEB SOCKETS
var createWebSocketUpdatePayload = function (type, payload) {
    return exports.createSuccessResponse({ type: type, data: payload });
};
exports.createWebSocketUpdatePayload = createWebSocketUpdatePayload;
// FOR API RESPONSE
var createSuccessResponse = function (data) { return ({ isSuccess: true, data: data }); };
exports.createSuccessResponse = createSuccessResponse;
var createErrorResponse = function (error) { return ({ isSuccess: false, error: error }); };
exports.createErrorResponse = createErrorResponse;
//# sourceMappingURL=helpers.js.map