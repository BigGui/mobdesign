
/**
 * Hydrate en element with given data
 * @param {HTMLElement} element Element to hydrate
 * @param {*} data Data to inject
 */
export function hydrateTemplate(element, data) {
    element.querySelectorAll('[data-content]').forEach(e => {
        if (data[e.dataset.content] !== undefined) {
            e.textContent = data[e.dataset.content];
        }
    });
}