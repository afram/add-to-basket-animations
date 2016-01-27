class Properties {
    constructor(el) {
        this.className = 'in-basket';
        this.el = el;
        this.actionsEl = this.el.querySelector('.actions');
        this.productCount = 0;
        this.addBtn = this.el.querySelector('.btn.add');
        this.removeBtn = this.el.querySelector('.btn.remove');
        this.input = this.el.querySelector('.actions input');
    }
}

export default Properties;