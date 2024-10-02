import '/scss/style.scss';

import './components/header.js';

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
 */
async function displayLastProducts() {
    try {
        const response = await fetch('/data/products.json');
        const products = await response.json();
        products.sort((a, b) => getTimestamp(b.dateAdded) - getTimestamp(a.dateAdded));
        console.table(products.slice(0, 4));
    }
    catch (error) {
        console.error('Unable to load products data ' + error);
    }
}

displayLastProducts();