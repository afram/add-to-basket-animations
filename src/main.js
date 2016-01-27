import SlideProduct from './slide';
import Product from './dip';
import NudgeProduct from './nudge';

require('./styles.scss');

function setupSlideProducts() {
    let products = document.querySelectorAll('.slide .fp');

    for (let i = 0, l = products.length; i < l; i++) {
        new SlideProduct(products[i]);
    }
}

function setupDipProducts() {
    let products = document.querySelectorAll('.dip .fp');

    for (let i = 0, l = products.length; i < l; i++) {
        new Product(products[i]);
    }
}

function setupNudgeProducts() {
    let products = document.querySelectorAll('.nudge .fp');

    for (let i = 0, l = products.length; i < l; i++) {
        new NudgeProduct(products[i], products[i-1], products[i+1]);
    }
}

window.addEventListener('load', function() {
    setupSlideProducts();
    setupDipProducts();
    setupNudgeProducts();
});