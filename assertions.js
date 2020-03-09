describe('Protractor Demo App', function () {

    it('assertion', function () {
        expect(10).toEqual(10);
    });

        it('assertion', function () {
            expect(11).toBeGreaterThan(8);
        });

        it('assertion', function () {
            expect(3).toBeLessThan(5);
        });

        it('assertion', function () {
            expect("Hello").toEqual("Hello");
        });

        it('assertion', function () {
            expect("Hello").toContain("llo");
        });

        it('assertion', function () {
            expect([1, 2, 3]).toEqual([2, 1, 3].sort());
        });

        it('assertion', function () {
            expect([1, 2, 3]).toEqual(([1, 2, 3]));

        });

        it('assertion', function () {
            expect(['March', 'April', 'May']).toEqual((['March', 'April', 'May']));

        })
});