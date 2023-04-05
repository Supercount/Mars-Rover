import { Action } from "./Action";
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

    move(action : Action[]) :void {
        switch (action[0]) {
            case Action.Forwards:
                this.position.goForwards();
                break;
            case Action.Backwards:
                this.position.goBackwards();
                break;
            case Action.Left:
                this.position.goLeft();
                break;
            case Action.Right:
                this.position.goRight();
                break;
        }
    }

}