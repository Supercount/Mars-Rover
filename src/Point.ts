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
        let newPoint : Point;
        if (this.ordinate + 1 >= maxOrdinate) {
            newPoint = new Point((this.absciss + maxAbsciss/2) % maxAbsciss, this.ordinate);
        } else {
            newPoint = new Point(this.absciss, this.ordinate + 1);
        }
        if (planet.isObstacle(newPoint)) {
            throw new Error(`Obstacle encountered when leaving position ${this.absciss} : ${this.ordinate}`);
        } else {
            return newPoint;
        }
    }

    public moveSouth(planet : Planet) : Point {
        const maxAbsciss = planet.getMaxAbsciss();
        let newPoint : Point;
        if (this.ordinate == 0) {
            newPoint = new Point((this.absciss + maxAbsciss/2) % maxAbsciss, this.ordinate);
        } else {
            newPoint = new Point(this.absciss, this.ordinate - 1);
        }
        if (planet.isObstacle(newPoint)) {
            throw new Error(`Obstacle encountered when leaving position ${this.absciss} : ${this.ordinate}`);
        } else {
            return newPoint;
        }
    }

    public moveEast(planet : Planet) : Point {
        const newAbsciss = ((this.absciss +1) % planet.getMaxAbsciss());
        const newPoint = new Point(newAbsciss, this.ordinate);
        if (planet.isObstacle(newPoint)) {
            throw new Error(`Obstacle encountered when leaving position ${this.absciss} : ${this.ordinate}`);
        } else {
            return newPoint;
        }
    }

    public moveWest(planet : Planet) : Point {
        const maxAbsciss = planet.getMaxAbsciss();
        const newAbsciss =  ((this.absciss -1 + maxAbsciss) % maxAbsciss);
        const newPoint = new Point(newAbsciss, this.ordinate);
        if (planet.isObstacle(newPoint)) {
            throw new Error(`Obstacle encountered when leaving position ${this.absciss} : ${this.ordinate}`);
        } else {
            return newPoint;
        }
    }
}