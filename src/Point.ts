import { Planet } from "./Planet";

export class Point {
    public absciss : number;
    public ordinate : number;

    constructor (x : number, y : number) {
        this.absciss = x;
        this.ordinate = y;
    }

    public isOutOfPlanet (p : Planet) : boolean {
        return (this.absciss >= 0 && this.absciss < p.getMaxAbsciss() && this.ordinate >= 0 && this.ordinate < p.getMaxOrdinate());
    }

    public toString() : String {
        return `absciss: ${this.absciss}, ordinate: ${this.ordinate}`
    }

    public moveNorth(planet : Planet) : Point {
        const maxOrdinate = planet.getMaxOrdinate();
        const maxAbsciss = planet.getMaxAbsciss();
        if (this.ordinate + 1 >= maxOrdinate) {
            return new Point((this.absciss + maxAbsciss/2) % maxAbsciss, this.ordinate);
        } else {
            return new Point(this.absciss, this.ordinate + 1);
        }
    }

    public moveSouth(planet : Planet) : Point {
        const maxAbsciss = planet.getMaxAbsciss();
        if (this.ordinate == 0) {
            return new Point((this.absciss + maxAbsciss/2) % maxAbsciss, this.ordinate);
        } else {
            return new Point(this.absciss, this.ordinate - 1);
        }
    }

    public moveEast(planet : Planet) : Point {
        const newAbsciss = ((this.absciss +1) % planet.getMaxAbsciss());
        return new Point(newAbsciss, this.ordinate);
    }

    public moveWest(planet : Planet) : Point {
        const maxAbsciss = planet.getMaxAbsciss();
        const newAbsciss =  ((this.absciss -1 + maxAbsciss) % maxAbsciss);
        return new Point(newAbsciss, this.ordinate);
    }
}