import {Rover} from "../src/Rover"
import {Orientation} from "../src/Orientation"

describe( 'Rover', () => {

    it('should be positionned according to arguments and face North if no orientation is provided', function () {
        let rover = new Rover(0, 0);

        const actual = rover.getPosition();

        expect(actual).toEqual({absciss: 0, ordinate: 0, orientation: Orientation.North});
    });

    it('should be positionned according to arguments and face North if no orientation is provided', function () {
        let rover = new Rover(3, 2);

        const actual = rover.getPosition();

        expect(actual).toEqual({absciss: 3, ordinate: 2, orientation: Orientation.North});
    });

    it('should be positionned according to arguments and face South if South direction is provided', function () {
        let rover = new Rover(0, 0, Orientation.South);

        const actual = rover.getPosition();

        expect(actual).toEqual({absciss: 0, ordinate: 0, orientation: Orientation.South});
    });
    
    it('should be positionned according to arguments and face West if West direction is provided', function () {
        let rover = new Rover(5, 1, Orientation.West);

        const actual = rover.getPosition();

        expect(actual).toEqual({absciss: 5, ordinate: 1, orientation: Orientation.West});
    });
});