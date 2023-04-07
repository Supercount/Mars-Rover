import { Action } from "./Action";
import { Orientation } from "./Orientation";
import { Planet } from "./Planet";
import { Position } from "./Position";

export class Rover {

    private position : Position;
    private planet : Planet

    constructor(absciss:number, ordinate:number, orientation : Orientation, planet: Planet) {
        if (absciss < 0 || ordinate < 0 || absciss >= planet.getMaxAbsciss() || ordinate >= planet.getMaxOrdinate()) {
            throw new Error("The Rover must be at a valid position");
            
        } 
        this.position = new Position(absciss, ordinate, orientation);
        this.planet = planet;
    }

    getPosition() : String {
        return this.position.toString();
    }

    move(actions : Action[]) : void {
        actions.forEach((action) => {
            switch (action) {
                case Action.Forwards:
                    this.position.goForwards(this.planet);
                    break;
                    case Action.Backwards:
                this.position.goBackwards(this.planet);
                break;
            case Action.Left:
                this.position.goLeft();
                break;
                case Action.Right:
                this.position.goRight();
                break;
            }
        })
    }

}