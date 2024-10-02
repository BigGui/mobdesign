
/**
 * Hydrate en element with given data
 * @param {HTMLElement} element Element to hydrate
 * @param {Array} data Data to inject
 */
function hydrateTemplate(element, data) {
    element.querySelectorAll('[data-content]').forEach(e => {
        if (data[e.dataset.content] !== undefined) {
            e.textContent = data[e.dataset.content];
        }
    });
}

/**
 * Turn a string into a timestamp.
 * @param {string} date Given date, string format
 * @returns {number} Timestamp
 */
function getTimestamp(date) {
    date = new Date(date);
    return date.getTime();
}

export {
    hydrateTemplate,
    getTimestamp
}