import Product from './product';

class Nudge extends Product {
    constructor(el, prevEl = null, nextEl = null) {
        super(el);
        this.prevElActions = prevEl && prevEl.querySelector('.actions');
        this.nextElActions = nextEl && nextEl.querySelector('.actions');

        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.addBtn.addEventListener('click', this.addClickHandler.bind(this));
        this.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
        this.actionsEl.addEventListener('animationend', this.animationEndHandler.bind(this));
        this.input.addEventListener('change', this.inputChange.bind(this));
    }

    animateNeighbours() {
        if (this.prevElActions) {
            let classList = this.prevElActions.classList;
            classList.add('nudge-left');
        }
        if (this.nextElActions) {
            let classList = this.nextElActions.classList;
            classList.add('nudge-right');
        }
    }

    onQtychange(newQty) {
        this.updateProductCount(newQty);

        let classList = this.actionsEl.classList;
        if (this.productCount > 0 && !classList.contains(this.className)) {
            this.addBtn.innerHTML = '&plus;';
            this.animateNeighbours();
            classList.add(this.className);
        }
        else if (this.productCount === 0) {
            this.addBtn.innerHTML = 'Add';
            this.animateNeighbours();
            classList.remove(this.className);
        }
        this.updateInputValue();
    }

    animationEndHandler(evt) {
        let classList = this.actionsEl.classList;
        if (evt.animationName === 'nudge-left') {
            classList.remove('nudge-left');
        }
        else if (evt.animationName === 'nudge-right') {
            classList.remove('nudge-right');
        }
    }
}

export default Nudge;