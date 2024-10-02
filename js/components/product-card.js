import { hydrateTemplate } from '../utils';

/**
 * Create the HTML element to display the product with given data.
 * @param {object} data - Product data 
 * @returns HTML Element to display the product
 */
export function createProduct(data) {
    const product = document.importNode(document.getElementById('templateProductCard').content, true);

    hydrateTemplate(product, data);

    const picture = product.querySelector('[data-content="picture"]');
    picture.src = data.imageUrl;
    picture.alt = data.title;

    return product;
}