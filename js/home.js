import '/scss/style.scss';

import './components/header.js';
import { createProductList } from './components/product-lst.js';

/**
 * Turn a string into a timestamp.
 * @param {string} date Given date, string format
 * @returns {number} Timestamp
 */
function getTimestamp(date) {
    date = new Date(date);
    return date.getTime();
}

/**
 * Load datas from Json and display the last products.
 * @param {HTMLElement} parentElement - HTML Element to add created products
 */
async function displayLastProducts(parentElement) {
    try {
        const response = await fetch('/data/products.json');
        const products = await response.json();

        // Sort products
        products.sort((a, b) => getTimestamp(b.dateAdded) - getTimestamp(a.dateAdded));

        // Create the 4 last product elements and list and add them to the page 
        parentElement.appendChild(createProductList(products.slice(0, 4)));
    }
    catch (error) {
        console.error('Unable to load products data ' + error);
    }
}

displayLastProducts(document.getElementById('newProducts'));