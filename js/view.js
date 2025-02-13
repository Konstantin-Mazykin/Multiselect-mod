function render(array, htmlElement) {
    for (let i = 0; i < array.length; i++) {
        let element = document.createElement("li");
        element.classList.add("multiselect__item");

        element.setAttribute("tabindex", '0');
        element.setAttribute("aria-checked", 'false');
        element.setAttribute("data-value", `${array[i].toLowerCase()}`);

        element.insertAdjacentHTML("beforeend", `<input class="multiselect__checkbox-input" type="checkbox" id="item-${i + 1}">`);
        element.insertAdjacentHTML("beforeend", `<label class="multiselect__checkbox-label" for="item-${i + 1}">${array[i]}</label>`);

        htmlElement.append(element);
    }
}

const itemsList = ['Kyiv', 'Kharkiv', 'Lviv', 'Odessa', 'Dnipro'];

render(itemsList, document.querySelector(".multiselect__list"));

