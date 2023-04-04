import {Rover} from "../src/Rover"
import {Orientation} from "../src/Orientation"

describe( 'Rover', () => {

    
    it('should be positionned at x=0 and y=0 and face North if no entry is provided', function () {
        let rover = new Rover();

        const actual = rover.getPosition();

        expect(actual).toEqual({x: 0, y: 0, orientation: Orientation.North});
    });
});