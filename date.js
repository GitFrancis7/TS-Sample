"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Date = /** @class */ (function () {
    //CONSTRUCTOR
    function Date(year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
    }
    Object.defineProperty(Date.prototype, "year", {
        //MUTATORS ET ACCESSEUR
        get: function () {
            return this._year;
        },
        set: function (y) {
            if (newYear > 0)
                this._year = y;
            else
                console.log("Error: L'annee ne doit pas etre negative");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Date.prototype, "month", {
        get: function () {
            return this._month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Date.prototype, "monyh", {
        set: function (m) {
            if (m >= 1 || m <= 12)
                this._month = m;
            else
                console.log("Error: le moi doit etre compris entre 1 et 12");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Date.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (d) {
            if (newDay >= 1 || newDay <= 31)
                this._day = d;
            else
                console.log("Error: Le jour doit etre compris entre 1 et 31");
        },
        enumerable: true,
        configurable: true
    });
    //METHODS
    Date.prototype.toString = function () {
        return this.year + "-" + this.month + "-" + this.day;
    };
    Date.prototype.create = function (Year, Month, Day) {
        return Year + "-" + Month + "-" + Day;
    };
    Date.prototype.setDate = function (Year, Month, Day) {
        this._year = Year;
        this._month = Month;
        this._day = Day;
        return Year + "-" + Month + "-" + Day;
    };
    Date.prototype.FormatDate = function (LaDate) {
        var mois = ((LaDate.month + 1) < 10) ? '0' + (LaDate.month + 1) : LaDate.month + 1;
        var jour = (LaDate.day < 10) ? '0' + LaDate.day : LaDate.day;
        return this.year + '-' + mois + '-' + jour;
    };
    Date.prototype.yesterday = function () {
        var year = this.year;
        var month = this.month - 1;
        var day = this.day;
        var hier = new Date(year, month, (day - 1));
        return this.FormatDate(hier);
    };
    Date.prototype.tomorrow = function () {
        var year = this.year;
        var month = this.month - 1;
        var day = this.day;
        var aujourdhui = new Date(year, month, (day + 1));
        return this.FormatDate(aujourdhui);
    };
    Date.prototype.addYear = function (numberYear) {
        if (numberYear === void 0) { numberYear = 1; }
        this._year = this._year + numberYear;
        return toString();
    };
    Date.prototype.subYear = function (numberYear) {
        if (numberYear === void 0) { numberYear = 1; }
        this._year = this._year - numberYear;
        return toString();
    };
    Date.prototype.addMouth = function (numberMouth) {
        if (numberMouth === void 0) { numberMouth = 1; }
        this._mouth = this._mouth + numberMouth;
        return toString();
    };
    Date.prototype.subMouth = function (numberMouth) {
        if (numberMouth === void 0) { numberMouth = 1; }
        this._day = this._day - numberMouth;
        return toString();
    };
    Date.prototype.addDay = function (numberDay) {
        if (numberDay === void 0) { numberDay = 1; }
        this._day = this._day + numberDay;
        return toString();
    };
    Date.prototype.subDay = function (numberDay) {
        if (numberDay === void 0) { numberDay = 1; }
        this._day = this._day - numberDay;
        return toString();
    };
    return Date;
}());
exports.default = Date;
//# sourceMappingURL=date.js.map