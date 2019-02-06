describe("Airport", function() {

    var airport = new Airport();

    var plane = jasmine.createSpyObj('plane',['land']);
// createSpyObj - basically a double that accepts that its an instance of it

    describe('it instructs a plane to land', function() {
        it('sends a land command', function(){
            airport.land(plane);
            expect(plane.land).toHaveBeenCalled();
            // Checks that the method of plane.land has actually been called.
        });
    });
});

//  sdasdsad
