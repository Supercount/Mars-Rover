import { Point } from "./Point";

export class Planet {
    private maxAbsciss : number;
    private maxOrdinate : number;
    private obstacleList : Point[] = [];

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

    public addObstacle(x : number, y : number) : void {
        this.obstacleList.push(new Point(x,y));
    }

    public isObstacle(point : Point) : boolean {
        return this.obstacleList.some(obstacle => {
            return obstacle.absciss === point.absciss && obstacle.ordinate === point.ordinate;
          });
    }
}