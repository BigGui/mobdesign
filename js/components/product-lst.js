import { createProduct } from './product-card.js';

/**
 * Wrap the given elment into a new LI
 * @param {HTMLElement} element 
 * @returns The new LI element
 */
function wrapIntoLi(element) {
    const li = document.createElement('li');
    li.append(element);
    return li;
}

/**
 * Create a product-lst / UL element with all the given products.
 * @param {Array} productsData - Array of products data.  
 * @returns - UL element with all the product to display
 */
export function createProductList(productsData) {
    const products =
        productsData
            .map(createProduct)
            .map(wrapIntoLi);

    const ul = document.createElement('ul');
    ul.append(...products);
    ul.classList.add('product-lst');

    return ul;
}