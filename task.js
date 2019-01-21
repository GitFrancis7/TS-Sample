"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task() {
    }
    Object.defineProperty(Task.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "task", {
        get: function () {
            return this._task;
        },
        set: function (value) {
            this._task = value;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.add = function () {
    };
    Task.prototype.update = function () {
    };
    Task.prototype.close = function () {
    };
    Task.prototype.toString = function () {
    };
    return Task;
}());
//# sourceMappingURL=task.js.map