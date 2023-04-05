import {Rover} from "../src/Rover"
import {Orientation} from "../src/Orientation"

describe('Rover', () => {

    it('should be positionned according to arguments', function () {
        let rover = new Rover(0, 0, Orientation.North);

        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 0, ordinate: 0, orientation: N");
    });

    it('should be positionned according to arguments', function () {
        let rover = new Rover(3, 2, Orientation.North);

        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 3, ordinate: 2, orientation: N");
    });

    it('should be positionned according to arguments', function () {
        let rover = new Rover(0, 0, Orientation.South);

        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 0, ordinate: 0, orientation: S");
    });
    
    it('should be positionned according to arguments and face West if West direction is provided', function () {
        let rover = new Rover(5, 1, Orientation.West);

        const actual = rover.getPosition();

        expect(actual).toEqual("absciss: 5, ordinate: 1, orientation: W");
    });

    it('should go up if facing North and be commanded to go forward', function () {
        let rover = new Rover(3, 1, Orientation.North);

        rover.move('f');
        const actual = rover.getPosition();
        expect(actual).toEqual("absciss: 3, ordinate: 2, orientation: N");
        
    })
    
    it('should go down if facing South and be commanded to go forward', function () {
        let rover = new Rover(3, 1, Orientation.South);

        rover.move('f');
        const actual = rover.getPosition();
        expect(actual).toEqual("absciss: 3, ordinate: 0, orientation: S");
        
    })
});