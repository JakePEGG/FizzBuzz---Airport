describe("Airport", function() {

    let airport = new Airport();

    let plane = jasmine.createSpy('plane');

    describe('it should instruct a plane to land', function() {
        it('should land', function(){
            airport.land(plane);
            expect(plane).toHaveBeenCalledWith("land")
        });
    });
});