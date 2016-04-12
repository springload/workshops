function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

/*
 * Updates val to never be out of bounds.
 */
Math.clamp = (min, val, max) => Math.max(Math.min(val, max), min);

const items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function change_quality(quality, value, max = 50) {
    return Math.clamp(0, quality + value, max);
}

/* eslint-disable no-param-reassign */
function update(item) {
    switch (item.name) {
    case 'Backstage passes to a TAFKAL80ETC concert':
        item.quality = change_quality(item.quality, 1);

        if (item.sell_in < 6) {
            item.quality = change_quality(item.quality, 2);
        } else if (item.sell_in < 11) {
            item.quality = change_quality(item.quality, 1);
        }

        item.sell_in--;

        if (item.sell_in < 0) {
            item.quality = 0;
        }
        break;

    case 'Sulfuras, Hand of Ragnaros':
        item.sell_in = 0;
        item.quality = 80;
        break;

    case 'Aged Brie':
        item.quality = change_quality(item.quality, 1);

        item.sell_in--;

        if (item.sell_in < 0) {
            item.quality = change_quality(item.quality, 1);
        }
        break;

    default:
        item.quality = change_quality(item.quality, -1);

        item.sell_in--;

        if (item.sell_in < 0) {
            item.quality = change_quality(item.quality, -1);
        }
        break;
    }
}

function update_quality(items) {
    items.forEach(update);
}

module.exports = {
    Item: Item,
    items: items,
    update_quality: update_quality,
};
