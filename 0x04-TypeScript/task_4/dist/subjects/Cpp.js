var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return "Here is the list of requirements for Cpp";
        };
        Cpp.prototype.getAvailableTeacher = function (teacher) {
            if (teacher.experienceTeachingC === undefined || teacher.experienceTeachingC <= 0) {
                return "No available teacher";
            }
            else {
                return "Available Teacher:" + teacher.firstName;
            }
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Cpp.js.map