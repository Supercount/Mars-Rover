import { Orientation } from "./Orientation";
import { Position } from "./Position";

export class Rover {

    private position : Position;

    constructor(absciss:number, ordinate:number, orientation : Orientation) {
        this.position = new Position(absciss, ordinate, orientation);
    }

    getPosition() : String {
        return this.position.toString();
    }

    move(action :String) :void {
        this.position.goForwards();
    }

}