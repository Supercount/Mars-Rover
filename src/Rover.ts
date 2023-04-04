import { Orientation } from "./Orientation";

export class Rover {

    private orientation : Orientation;
    private absciss : Number;
    private ordinate : Number;

    constructor(absciss:Number, ordinate:Number, orientation = Orientation.North) {
        this.absciss = absciss;
        this.ordinate = ordinate;
        this.orientation = orientation;
    }

    getPosition() {
        return {absciss: this.absciss, ordinate: this.ordinate, orientation : this.orientation};
    }

}