class Product {
    constructor(el) {
        this.className = 'in-basket';
        this.el = el;
        this.actionsEl = this.el.querySelector('.actions');
        this.productCount = 0;
        this.addBtn = this.el.querySelector('.btn.add');
        this.removeBtn = this.el.querySelector('.btn.remove');
        this.input = this.el.querySelector('.actions input');
    }

    updateProductCount(newQty) {
        this.productCount = Math.max(0, newQty);
    }

    inputChange(evt) {
        evt.preventDefault();
        this.onQtychange(parseInt(evt.target.value, 10));
    }

    addClickHandler(e) {
        e.preventDefault();
        this.onQtychange(this.productCount + 1);
    }

    removeClickHandler(e) {
        e.preventDefault();
        this.onQtychange(this.productCount - 1);
    }

    updateInputValue() {
        this.input.value = this.productCount;
    }
}

export default Product;