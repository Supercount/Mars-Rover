import { Orientation } from "./Orientation";

export class Position {
    private absciss : number;
    private ordinate : number;
    private orientation : Orientation;

    constructor(absciss:number, ordinate:number, orientation: Orientation) {
        this.absciss = absciss;
        this.ordinate = ordinate;
        this.orientation = orientation;
    }

    toString() :String {
        return `absciss: ${this.absciss}, ordinate: ${this.ordinate}, orientation: ${this.orientation}`;
    }

    goForwards() :void {
        if (this.orientation == "N") {
            this.ordinate++;
        } else {
            this.ordinate--;
        }
    }
}