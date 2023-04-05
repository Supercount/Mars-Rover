import { Orientation } from "./Orientation";

export class Position {
    private absciss : number;
    private ordinate : number;
    private orientation : Orientation;

    constructor(absciss : number, ordinate : number, orientation : Orientation) {
        this.absciss = absciss;
        this.ordinate = ordinate;
        this.orientation = orientation;
    }

    toString() : String {
        return `absciss: ${this.absciss}, ordinate: ${this.ordinate}, orientation: ${this.orientation}`;
    }

    goForwards() : void {
        switch (this.orientation)
        {
            case Orientation.North: 
                this.ordinate++;
                break;
            case Orientation.East:
                this.absciss++;
                break;
            case Orientation.South:
                this.ordinate--;
                break;
            case Orientation.West:
                this.absciss--;
                break;
        }
    }

    goBackwards() : void {
        switch (this.orientation)
        {
            case Orientation.North: 
                this.ordinate--;
                break;
            case Orientation.East:
                this.absciss--;
                break;
            case Orientation.South:
                this.ordinate++;
                break;
            case Orientation.West:
                this.absciss++;
                break;
        }
    }

    goLeft() : void {
        switch (this.orientation) {
            case Orientation.North:
                this.orientation = Orientation.West;
                break;
            case Orientation.East:
                this.orientation = Orientation.North;
                break;
            case Orientation.South:
                this.orientation = Orientation.East;
                break;
            case Orientation.West:
                this.orientation = Orientation.South;
                break;
        }
    }

    goRight() : void {
        switch (this.orientation) {
            case Orientation.North:
                this.orientation = Orientation.East;
                break;
            case Orientation.East:
                this.orientation = Orientation.South;
                break;
            case Orientation.South:
                this.orientation = Orientation.West;
                break;
            case Orientation.West:
                this.orientation = Orientation.North;
                break;
        }
    }
}