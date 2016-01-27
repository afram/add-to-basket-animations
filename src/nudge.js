import Properties from './properties';

class Nudge {
    constructor(el, prevEl = null, nextEl = null) {
        this.props = new Properties(el);
        this.props.prevElActions = prevEl && prevEl.querySelector('.actions');
        this.props.nextElActions = nextEl && nextEl.querySelector('.actions');

        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.props.addBtn.addEventListener('click', this.addClickHandler.bind(this));
        this.props.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
        this.props.actionsEl.addEventListener('animationend', this.addAnimationHandler.bind(this));

    }

    animateNeighbours() {
        if (this.props.prevElActions) {
            let classList = this.props.prevElActions.classList;
            classList.add('nudge-left');
        }
        if (this.props.nextElActions) {
            let classList = this.props.nextElActions.classList;
            classList.add('nudge-right');
        }
    }

    addClickHandler(e) {
        e.preventDefault();
        let classList = this.props.actionsEl.classList;
        this.props.productCount += 1;
        if (!classList.contains(this.props.className)) {
            this.props.addBtn.innerHTML = '&plus;';
            this.animateNeighbours();
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
                this.props.addBtn.innerHTML = 'Add';
                this.animateNeighbours();
                classList.remove(this.props.className);
            }
            this.updateInputValue();
        }
    }

    updateInputValue() {
        this.props.input.value = this.props.productCount;
    }

    addAnimationHandler(evt) {
        let classList = this.props.actionsEl.classList;
        if (evt.animationName === 'nudge-left') {
            classList.remove('nudge-left');
        }
        else if (evt.animationName === 'nudge-right') {
            classList.remove('nudge-right');
        }
    }
}

export default Nudge;