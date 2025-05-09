const menu = document.getElementById('menu');


export class Menu {
    constructor(items) {
        this.items = items;
        this.render();
    }

    render() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'h-full py-4 text-gray-500 dark:text-gray-400';

        const menuTitle = document.createElement('a');
        menuTitle.textContent = 'Model Secutity';
        menuTitle.className = 'ml-6 text-lg font-bold text-gray-800 dark:text-gray-200';

        const ul = document.createElement('ul');
        ul.className = 'mt-6';

        this.items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'relative px-6 py-3';

            const a = document.createElement('a');
            a.className = 'inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100';
            a.href = item.href;

            // Si el item tiene icono
            if (item.icon) {
                const SVG_NS = "http://www.w3.org/2000/svg";

                const svg = document.createElementNS(SVG_NS, 'svg');
                svg.setAttribute('class', 'w-5 h-5 mr-3');
                svg.setAttribute('fill', 'none');
                svg.setAttribute('stroke', 'currentColor');
                svg.setAttribute('stroke-width', '2');
                svg.setAttribute('viewBox', '0 0 24 24');

                const path = document.createElementNS(SVG_NS, 'path');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('d', item.icon);

                svg.appendChild(path);
                a.appendChild(svg);
            }

            a.appendChild(document.createTextNode(item.name));
            li.appendChild(a);
            ul.appendChild(li);
        });


        menuContainer.appendChild(menuTitle);
        menuContainer.appendChild(ul);
        menu.appendChild(menuContainer);
    }
}
