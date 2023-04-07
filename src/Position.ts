import { Orientation } from "./Orientation";
import { Planet } from "./Planet";
import { Point } from "./Point";

export class Position {
    private point : Point
    private orientation : Orientation;
    private planet : Planet;

    constructor(absciss : number, ordinate : number, orientation : Orientation, planet : Planet) {
        this.point = new Point(absciss, ordinate);
        this.orientation = orientation;
        this.planet = planet;
    }

    toString() : String {
        return `${this.point}, orientation: ${this.orientation}`;
    }

    goForwards() : void {
        const maxAbsciss = this.planet.getMaxAbsciss();
        let newPoint : Point;
        switch (this.orientation)
        {
            case Orientation.North: 
                newPoint = this.point.moveNorth(this.planet);
                if (newPoint.ordinate === this.point.ordinate) {
                    this.orientation = this.reverse();
                }
                this.point = newPoint;
                break;
            case Orientation.East:
                this.point = this.point.moveEast(this.planet);
                break;
            case Orientation.South: 
            newPoint = this.point.moveSouth(this.planet);
            if (newPoint.ordinate === this.point.ordinate) {
                this.orientation = this.reverse();
            }
            this.point = newPoint;
            break;
            case Orientation.West:
                this.point = this.point.moveWest(this.planet);
                break;
        }
    }

    goBackwards() : void {
        const maxAbsciss = this.planet.getMaxAbsciss();
        let newPoint : Point;
        switch (this.orientation)
        {
            case Orientation.North: 
            newPoint = this.point.moveSouth(this.planet);
            if (newPoint.ordinate === this.point.ordinate) {
                this.orientation = this.reverse();
            }
            this.point = newPoint;
            break;
            case Orientation.East:
                this.point = this.point.moveWest(this.planet);
                break;
            case Orientation.South:
                newPoint = this.point.moveNorth(this.planet);
                if (newPoint.ordinate === this.point.ordinate) {
                    this.orientation = this.reverse();
                }
                this.point = newPoint;
                break;
            case Orientation.West:
                this.point = this.point.moveEast(this.planet);
                break;
        }
    }

    turnLeft() : void {
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

    turnRight() : void {
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