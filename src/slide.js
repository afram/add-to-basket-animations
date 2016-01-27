import Properties from './properties';

class Slide {
    constructor(el) {
        this.props = new Properties(el);
        this.props.removeWrapper = this.props.el.querySelector('.inbasket-btns');

        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.props.addBtn.addEventListener('click', this.addClickHandler.bind(this));
        this.props.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
        this.props.addBtn.addEventListener('animationend', this.animationEndHandler.bind(this));
        this.props.removeWrapper.addEventListener('animationend', this.animationEndHandler.bind(this));
    }

    addClickHandler(e) {
        e.preventDefault();
        let classList = this.props.actionsEl.classList;
        this.props.productCount += 1;
        if (!classList.contains(this.props.className)) {
            classList.add('slide-in');
            this.props.addBtn.innerHTML = '&plus;';
            classList.add(this.props.className);
        }
        this.updateInputValue();
    }

    removeClickHandler(e) {
        e.preventDefault();
        let classList = this.props.actionsEl.classList;
        if (this.props.productCount > 0) {
            this.props.productCount -= 1;
            if (this.props.productCount === 0) {
                classList.add('slide-out');
                this.props.addBtn.innerHTML = 'Add';
                classList.remove(this.props.className);
            }
            this.updateInputValue();
        }
    }

    updateInputValue() {
        this.props.input.value = this.props.productCount;
    }

    animationEndHandler() {
        let classList = this.props.actionsEl.classList;
        classList.remove('slide-in');
        classList.remove('slide-out');
    }
}

export default Slide;