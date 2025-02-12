function init(array, htmlElement) {
    for (let i = 0; i < array.length; i++) {
        let section = document.createElement("li");
        section.classList.add("multiselect__item");

        section.setAttribute("tabindex", '0');
        section.setAttribute("aria-checked", 'false');
        section.setAttribute("data-value", `${array[i].toLowerCase()}`);

        section.insertAdjacentHTML("beforeend", `<input class="multiselect__checkbox-input" type="checkbox" id="item- ${i + 1}" />`);
        section.insertAdjacentHTML("beforeend", `<label class="multiselect__checkbox-label" for="item-${i + 1}">${array[i]}</label>`);

        htmlElement.append(section);
    }
}

const itemsList = ['Kyiv', 'Kharkiv', 'Lviv', 'Odessa', 'Dnipro'];

init(itemsList, document.querySelector(".multiselect__list"));