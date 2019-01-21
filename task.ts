import { Date } from "./unitled";

class Task
{
    private _task : string;
    private _date : Date;
    private _priority : Priority;
    private _checked : boolean;

    get checked(): boolean {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
    }
    get priority(): Priority {
        return this._priority;
    }

    set priority(value: Priority) {
        this._priority = value;
    }
    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }
    get task(): string {
        return this._task;
    }

    set task(value: string) {
        this._task = value;
    }

    add()
    {

    }

    update()
    {

    }

     close()
     {

     }

     toString()
     {

     }

}