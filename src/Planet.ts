import { Position } from "./Position";

export class Planet {
    private maxAbsciss : number;
    private maxOrdinate : number;

    constructor (x : number, y : number) {
        this.maxAbsciss = x;
        this.maxOrdinate = y;
    }

    public getMaxOrdinate() : number {
        return this.maxOrdinate;
    }

    public getMaxAbsciss() : number {
        return this.maxAbsciss;
    }
}