/**
 * Template strings.
 */

function getURL() {
    const dimensions = this.getDimensionsString();

    return `/indicators/${this.id}/${dimensions}`;
}

'/indicators/' + this.id + '/' + dimensions

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

threshold = threshold || 5;
isOpen = typeof isOpen === 'undefined' ? !this.state.isOpen : isOpen;
