describe("Airport", function() {

    var airport = new Airport();

    plane = jasmine.createSpy('plane');

    describe('it should instruct a plane to land', function() {
        expect(airport.land(plane)).toHaveBeenCalledWith("land")
    })

});