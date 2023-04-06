import {Rover} from "../src/Rover"
import {Orientation} from "../src/Orientation"
import { Action } from "../src/Action";
import { Planet } from "../src/Planet";

describe('Rover', () => {
    const planet = new Planet(6,6);

    it('should be positionned according to arguments', function () {
        let rover = new Rover(0, 0, Orientation.North, planet);

        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 0, ordinate: 0, orientation: N");
    });

    it('should be positionned according to arguments', function () {
        let rover = new Rover(3, 2, Orientation.North, planet);

        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 3, ordinate: 2, orientation: N");
    });

    it('should be positionned according to arguments', function () {
        let rover = new Rover(0, 0, Orientation.South, planet);

        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 0, ordinate: 0, orientation: S");
    });
    
    it('should be positionned according to arguments and face West if West direction is provided', function () {
        let rover = new Rover(5, 1, Orientation.West, planet);

        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 5, ordinate: 1, orientation: W");
    });

    it('should go up if facing North and be commanded to go forward', function () {
        let rover = new Rover(3, 1, Orientation.North, planet);

        rover.move([Action.Forwards]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 2, orientation: N");
    })
    
    it('should go down if facing South and be commanded to go forward', function () {
        let rover = new Rover(3, 1, Orientation.South, planet);

        rover.move([Action.Forwards]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 0, orientation: S");
    })
    
    it('should go left if facing West and be commanded to go forward', function () {
        let rover = new Rover(3, 1, Orientation.West, planet);

        rover.move([Action.Forwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 2, ordinate: 1, orientation: W");
    })
    
    it('should go left if facing East and be commanded to go forward', function () {
        let rover = new Rover(3, 1, Orientation.East, planet);

        rover.move([Action.Forwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 4, ordinate: 1, orientation: E");
    })

    it('should go down if facing North and be commanded to go backwards', function () {
        let rover = new Rover(3, 1, Orientation.North, planet);

        rover.move([Action.Backwards]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 0, orientation: N");
    })
    
    it('should go up if facing South and be commanded to go backwards', function () {
        let rover = new Rover(3, 1, Orientation.South, planet);

        rover.move([Action.Backwards]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 2, orientation: S");
    })
    
    it('should go right if facing West and be commanded to go backwards', function () {
        let rover = new Rover(3, 1, Orientation.West, planet);

        rover.move([Action.Backwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 4, ordinate: 1, orientation: W");
    })
    
    it('should go right if facing East and be commanded to go backwards', function () {
        let rover = new Rover(3, 1, Orientation.East, planet);

        rover.move([Action.Backwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 2, ordinate: 1, orientation: E");
    })

    it('should face North if facing East and be commanded to go turn left', function () {
        let rover = new Rover(3, 1, Orientation.East, planet);

        rover.move([Action.Left]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 1, orientation: N");
    })
    
    it('should face East if facing South and be commanded to go turn left', function () {
        let rover = new Rover(3, 1, Orientation.South, planet);

        rover.move([Action.Left]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 1, orientation: E");
    })
    
    it('should face South if facing West and be commanded to go turn left', function () {
        let rover = new Rover(3, 1, Orientation.West, planet);

        rover.move([Action.Left]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 1, orientation: S");
    })
    
    it('should face West if facing North and be commanded to go turn left', function () {
        let rover = new Rover(3, 1, Orientation.North, planet);

        rover.move([Action.Left]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 1, orientation: W");
    })
    
    it('should face South if facing East and be commanded to go turn right', function () {
        let rover = new Rover(3, 1, Orientation.East, planet);

        rover.move([Action.Right]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 1, orientation: S");
    })
    
    it('should face West if facing South and be commanded to go turn right', function () {
        let rover = new Rover(3, 1, Orientation.South, planet);

        rover.move([Action.Right]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 1, orientation: W");
    })
    
    it('should face North if facing West and be commanded to go turn right', function () {
        let rover = new Rover(3, 1, Orientation.West, planet);

        rover.move([Action.Right]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 1, orientation: N");
    })
    
    it('should face East if facing North and be commanded to go turn right', function () {
        let rover = new Rover(3, 1, Orientation.North, planet);

        rover.move([Action.Right]);
        const actual = rover.getPosition();
        
        expect(actual).toEqual("absciss: 3, ordinate: 1, orientation: E");
    })

    it('should do all actions when given severals', function () {
        let rover = new Rover(1, 0, Orientation.North, planet);

        rover.move([Action.Forwards, Action.Forwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 1, ordinate: 2, orientation: N");
    })

    it('should do all actions when given severals', function () {
        let rover = new Rover(5, 3, Orientation.South, planet);

        rover.move([Action.Forwards, Action.Left, Action.Backwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 4, ordinate: 2, orientation: E");
    })
    
    it('should be positionned accordingly to the spherical map when going over limit on East side', function () {
        let rover = new Rover(5, 3, Orientation.East, planet);

        rover.move([Action.Forwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 0, ordinate: 3, orientation: E");
    })

    it('should be positionned accordingly to the spherical map when going over limit on West side', function () {
        let rover = new Rover(0, 3, Orientation.West, planet);

        rover.move([Action.Forwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 5, ordinate: 3, orientation: W");
    })

    it('should be positionned accordingly to the spherical map when going over limit on North side', function () {
        let rover = new Rover(2, 5, Orientation.North, planet);

        rover.move([Action.Forwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 5, ordinate: 5, orientation: S");
    })

    it('should be positionned accordingly to the spherical map when going over limit on South side', function () {
        let rover = new Rover(2, 0, Orientation.South, planet);

        rover.move([Action.Forwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 5, ordinate: 0, orientation: N");
    })
    
    it('should be positionned accordingly to the spherical map when going over limit on East side backwardly', function () {
        let rover = new Rover(5, 3, Orientation.West, planet);

        rover.move([Action.Backwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 0, ordinate: 3, orientation: W");
    })

    it('should be positionned accordingly to the spherical map when going over limit on West side backwardly', function () {
        let rover = new Rover(0, 3, Orientation.East, planet);

        rover.move([Action.Backwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 5, ordinate: 3, orientation: E");
    })

    it('should be positionned accordingly to the spherical map when going over limit on North side backwardly', function () {
        let rover = new Rover(2, 5, Orientation.South, planet);

        rover.move([Action.Backwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 5, ordinate: 5, orientation: N");
    })

    it('should be positionned accordingly to the spherical map when going over limit on South side backwardly', function () {
        let rover = new Rover(2, 0, Orientation.North, planet);

        rover.move([Action.Backwards]);
        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 5, ordinate: 0, orientation: S");
    })
});