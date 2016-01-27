import Product from './product';

class Dip extends Product {
    constructor(el) {
        super(el);
        
        this.setupEventHandlers();
    }

    setupEventHandlers() {
        this.addBtn.addEventListener('click', this.addClickHandler.bind(this));
        this.removeBtn.addEventListener('click', this.removeClickHandler.bind(this));
        this.actionsEl.addEventListener('animationend', this.animationEndHandler.bind(this));
        this.input.addEventListener('change', this.inputChange.bind(this));
    }

    onQtychange(newQty) {
        this.updateProductCount(newQty);

        let classList = this.actionsEl.classList;
        if (this.productCount > 0 && !classList.contains(this.className)) {
            classList.add('dip');
            setTimeout(function() {
                classList.add(this.className);
                this.addBtn.innerHTML = '&plus;';
            }.bind(this), 135);
        }
        else if (this.productCount === 0) {
            classList.add('dip');
            setTimeout(function() {
                classList.remove(this.className);
                this.addBtn.innerHTML = 'Add';
                this.updateInputValue();
            }.bind(this), 135);
        }
        this.updateInputValue();
    }

    animationEndHandler() {
        let classList = this.actionsEl.classList;
        classList.remove('dip');
    }
}

export default Dip;