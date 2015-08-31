var expect = require('chai').expect;
var rose = require('../src/gilded_rose');

var Item = rose.Item;
var items = rose.items;
var update_quality = rose.update_quality;

describe('Gilded Rose', function() {
    var foo;

    beforeEach(function() {
        foo = 0;
    });

    afterEach(function() {
        foo = 0;
    });

    it('should do something', function() {

    });

    it('is a syntax example', function() {
        expect(true).to.be.true;
        expect(false).not.to.be.true;
    });

    describe('Nested specs', function() {
        it('is just a function, so it can contain any code', function() {
            var foo = 0;
            foo += 1;

            expect(foo).to.equal(1);
        });

        it('has mathematical comparisons', function() {
            expect(2).to.be.lessThan(3);
            expect(3).not.to.be.lessThan(2);
            expect(3).to.be.greaterThan(2);
            expect(2).not.to.be.greaterThan(3);
        });
    });

    describe('value update', () => {
        // Reset global array before each test case.
        beforeEach(() => {
            items = [
                new Item('Test item', 10, 20),
                new Item('Test item 2', 2, 30),
                new Item('Test item 3', 5, 7),
                new Item('+5 Dexterity Vest', 10, 20),
                new Item('Aged Brie', 2, 0),
                new Item('Elixir of the Mongoose', 5, 7),
                new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
                new Item('Conjured Mana Cake', 3, 6),
            ];
        });

        // - At the end of each day our system lowers both values for every item
        it('lowers sell_in value each day', () => {
            const sell_in = items[0].sell_in;

            update_quality(items);
            expect(items[0].sell_in).to.be.lessThan(sell_in);
        });
    });

});
