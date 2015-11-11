/**
 * Template strings.
 */

function getURL() {
    const dimensions = this.getDimensionsString();

    return `/indicators/${this.id}/${dimensions}`;
}

// What we did before.
'/indicators/' + this.id + '/' + dimensions

// Why it's a good idea to use the ES6 way: the + operator is unreliable.
('1' + 1 + 3 +  2) === "1132"
(1 + 3 +  2 + '1') === '61'

/**
 * Arrow functions and this.
 */

function loadMeasures(indicator, selectedMeasureIndex, timeInterval) {
    api.getMeasures(indicator.id, indicator.selectedDimensions, (data) => {

        this.setState({
            data: data
        });
    });
}

// What we did before
var self = this;

self.setState({
    data: data
});

/**
 * Spread.
 */

(
    <Component {...props} flux={flux} key={key}/>
);

// What we did before
// (nothing, it was a real pain)

/**
 * Rest.
 */

// ;(

/**
 * Default parameters.
 */

const thing = {
    togglePopover(isOpen = !this.state.isPopoverOpen) {
        this.setState({
            isPopoverOpen: isOpen,
        });
    },
};

// What we did before, the simple but hard to understand way
threshold = threshold || 5;
// What we did before, the proper way
isOpen = typeof isOpen === 'undefined' ? !this.state.isOpen : isOpen;
