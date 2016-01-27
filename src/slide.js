import Product from './product';

class Slide extends Product {
    constructor(el) {
        super(el);
        this.removeWrapper = this.el.querySelector('.inbasket-btns');

        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.addBtn.addEventListener('click', this.addClickHandler.bind(this));
        this.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
        this.addBtn.addEventListener('animationend', this.animationEndHandler.bind(this));
        this.removeWrapper.addEventListener('animationend', this.animationEndHandler.bind(this));
        this.input.addEventListener('change', this.inputChange.bind(this));
    }

    onQtychange(newQty) {
        this.updateProductCount(newQty);

        let classList = this.actionsEl.classList;
        if (this.productCount > 0 && !classList.contains(this.className)) {
            classList.add('slide-in');
            this.addBtn.innerHTML = '&plus;';
            classList.add(this.className);
        }
        else if (this.productCount === 0) {
            classList.add('slide-out');
            this.addBtn.innerHTML = 'Add';
            classList.remove(this.className);
        }
        this.updateInputValue();
    }

    animationEndHandler() {
        let classList = this.actionsEl.classList;
        classList.remove('slide-in');
        classList.remove('slide-out');
    }
}

export default Slide;