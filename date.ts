export default class Date{
    private _year : number;
    private _month : number;
    private _day : number;

    //CONSTRUCTOR
    constructor(year:number, month:number, day:number){
        this._year = year;
        this._month = month;
        this._day = day;
    }


    //MUTATORS ET ACCESSEUR
    get year(): number {
        return this._year;
    }
    set year(y: number) {
        if(newYear > 0)
            this._year = y;
        else
            console.log("Error: L'annee ne doit pas etre negative");
    }
    get month(): number {
        return this._month;
    }
    set monyh(m: number) {
        if(m >= 1 || m <= 12)
            this._month = m;
        else
            console.log("Error: le moi doit etre compris entre 1 et 12");
    }

    get day(): number {
        return this._day;
    }
    set day(d: number) {
        if(newDay >=1 || newDay <= 31)
            this._day = d;
        else
            console.log("Error: Le jour doit etre compris entre 1 et 31");
        
    }
    

    //METHODS
    toString():string {
        return  `${this.year}-${this.month}-${this.day}`;
    }

    create(Year:number, Month:number, Day:number):string {
        return  `${Year}-${Month}-${Day}`;
    }

    setDate(Year:number, Month:number, Day:number):string {
        this._year = Year;
        this._month = Month;
        this._day = Day;
        return  `${Year}-${Month}-${Day}`;
    }


    
    FormatDate(LaDate : Date) : string{
        var mois = ((LaDate.month + 1) < 10) ? '0' + (LaDate.month + 1) : LaDate.month + 1;
        var jour = (LaDate.day < 10) ? '0' + LaDate.day : LaDate.day;
        return this.year + '-' + mois + '-' + jour;
      }
    

    yesterday(){
        let year:number = this.year;
        let month:number = this.month - 1;
        let day:number = this.day;
        var hier = new Date(year, month, (day - 1));
        return  this.FormatDate(hier);
    }

    tomorrow(){
        let year:number = this.year;
        let month:number = this.month - 1;
        let day:number = this.day;
        var aujourdhui  = new Date(year, month, (day + 1));
        return  this.FormatDate(aujourdhui);
    }

    addYear(numberYear = 1 )
    {
        this._year = this._year + numberYear;
        return toString();
    }

    subYear(numberYear = 1)
    {
        this._year = this._year - numberYear;
        return toString();
    }

    addMouth(numberMouth = 1)
    {
        this._mouth = this._mouth + numberMouth;
        return toString();
    }

    subMouth(numberMouth = 1)
    {
        this._day = this._day - numberMouth;
        return toString();
    }

    addDay(numberDay = 1)
    {
        this._day = this._day + numberDay;
        return toString();
    }

    subDay(numberDay = 1)
    {
        this._day = this._day - numberDay;
        return toString();
    }

}

