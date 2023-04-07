import { Action } from "./Action";
import { Orientation } from "./Orientation";
import { Planet } from "./Planet";
import { Point } from "./Point";
import { Position } from "./Position";

export class Rover {

    private position : Position;

    constructor(absciss:number, ordinate:number, orientation : Orientation, planet: Planet) {
        this.position = new Position(absciss, ordinate, orientation, planet);
    }

    getPosition() : String {
        return this.position.toString();
    }

    move(actions : Action[]) : void {
        actions.forEach((action) => {
            switch (action) {
                case Action.Forwards:
                    this.position.goForwards();
                    break;
                    case Action.Backwards:
                this.position.goBackwards();
                break;
            case Action.Left:
                this.position.turnLeft();
                break;
                case Action.Right:
                this.position.turnRight();
                break;
            }
        })
    }

}