import { Orientation } from "./Orientation";
import { Planet } from "./Planet";

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

    goForwards(planet : Planet) : void {
        const maxOrdinate = planet.getMaxOrdinate();
        const maxAbsciss = planet.getMaxAbsciss();
        switch (this.orientation)
        {
            case Orientation.North: 
                if (this.ordinate + 1 >= maxOrdinate) {
                    this.absciss = (this.absciss + maxAbsciss/2) % maxAbsciss;
                    this.orientation = this.reverse();
                } else {
                    this.ordinate++;
                }
                break;
            case Orientation.East:
                this.absciss = (++this.absciss % maxAbsciss);
                break;
            case Orientation.South: 
                if (this.ordinate == 0) {
                    this.absciss = (this.absciss + maxAbsciss/2) % maxAbsciss;
                    this.orientation = this.reverse();
                } else {
                    this.ordinate--;
                }
                break;
            case Orientation.West:
                this.absciss = ((--this.absciss + maxAbsciss) % maxAbsciss);
                break;
        }
    }

    goBackwards(planet : Planet) : void {
        const maxOrdinate = planet.getMaxOrdinate();
        const maxAbsciss = planet.getMaxAbsciss();
        switch (this.orientation)
        {
            case Orientation.North: 
            if (this.ordinate == 0) {
                this.absciss = (this.absciss + maxAbsciss/2) % maxAbsciss;
                this.orientation = this.reverse();
            } else {
                this.ordinate--;
            }
                break;
            case Orientation.East:
                this.absciss = ((--this.absciss + maxAbsciss) % maxAbsciss);
                break;
            case Orientation.South:
                if (this.ordinate + 1 >= maxOrdinate) {
                    this.absciss = (this.absciss + maxAbsciss/2) % maxAbsciss;
                    this.orientation = this.reverse();
                } else {
                    this.ordinate++;
                }
                break;
            case Orientation.West:
                this.absciss = (++this.absciss % maxAbsciss);
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

    reverse() : Orientation {
        switch (this.orientation) {
            case Orientation.North:
                return Orientation.South;
            case Orientation.East:
                return Orientation.West;
            case Orientation.South:
                return Orientation.North;
            case Orientation.West:
                return Orientation.East;
        }
    }
}