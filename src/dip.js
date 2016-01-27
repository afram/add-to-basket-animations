import Properties from './properties';

class Dip {
    constructor(el) {
        this.props = new Properties(el);
        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.props.addBtn.addEventListener('click', this.addClickHandler.bind(this));
        this.props.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
        this.props.actionsEl.addEventListener('animationend', this.animationEndHandler.bind(this));

    }

    addClickHandler(e) {
        e.preventDefault();
        let classList = this.props.actionsEl.classList;
        this.props.productCount += 1;
        if (!classList.contains(this.props.className)) {
            classList.add('dip');
            setTimeout(function() {
                classList.add(this.props.className);
                this.props.addBtn.innerHTML = '&plus;';
            }.bind(this), 135);
        }
        this.updateInputValue();
    }

    removeClickHandler(e) {
        e.preventDefault();
        let classList = this.props.actionsEl.classList;
        if (this.props.productCount > 0) {
            this.props.productCount -= 1;
            if (this.props.productCount === 0) {
                classList.add('dip');
                setTimeout(function() {
                    classList.remove(this.props.className);
                    this.props.addBtn.innerHTML = 'Add';
                    this.updateInputValue();
                }.bind(this), 135);
            }
            else {
                this.updateInputValue();
            }
        }
    }

    updateInputValue() {
        this.props.input.value = this.props.productCount;
    }

    animationEndHandler() {
        let classList = this.props.actionsEl.classList;
        classList.remove('dip');
    }
}

export default Dip;