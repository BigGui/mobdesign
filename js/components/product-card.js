
/**
 * Create the HTML element to display the product with given data.
 * @param {object} data - Product data 
 * @returns HTML Element to display the product
 */
export function createProduct(data) {
    const product = document.importNode(document.getElementById('templateProductCard').content, true);

    product.querySelector('[data-content="picture"]').src = data.imageUrl;
    product.querySelector('[data-content="picture"]').setAttribute('alt', data.title);
    product.querySelector('[data-content="title"]').textContent = data.title;
    product.querySelector('[data-content="price"]').textContent = data.price;
    product.querySelector('[data-content="category"]').textContent = data.category;
    product.querySelector('[data-content="description"]').textContent = data.description;

    return product;
}