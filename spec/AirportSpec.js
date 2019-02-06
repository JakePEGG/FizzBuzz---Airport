describe("Airport", function() {

    var airport = new Airport();
    var plane = jasmine.createSpyObj('plane',['land']);

    describe('it instructs a plane to land', function() {
        it('sends a land command', function(){
            airport.land(plane);
            expect(plane.land).toHaveBeenCalled();
        });
    });
});