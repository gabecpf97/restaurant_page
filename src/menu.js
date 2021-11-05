const create = () => {
    const content = document.querySelector('#content');
    content.appendChild(createMenu());
}

function createMenu() {
    const menu = document.createElement('div');
    const dishes = document.createElement('ul');
    menu.classList.add('menu');
    dishes.classList.add('dishes');
    addDishes(dishes);
    menu.appendChild(dishes);
    return menu;
}

function addDishes(dishes) {
    dishes.appendChild(newDish('Chicken Katsu', '$11.9'));
    dishes.appendChild(newDish('Egg Roll', '$5.9'));
    dishes.appendChild(newDish('Beef Rib', '$13.9'));
    dishes.appendChild(newDish('Salmon Teriyaki', '$12.9'));
    dishes.appendChild(newDish('Yakisoba', '$9.5'));
    dishes.appendChild(newDish('Tempura', '$8.5'));
    dishes.appendChild(newDish('Beef Curry', '$13.9'));
}

function newDish(name, price) {
    const dish = document.createElement('li');
    const dishName = document.createElement('span');
    const dishPrice = document.createElement('span');
    dish.classList.add('dish');
    dishName.textContent = name;
    dishPrice.textContent = price;
    dish.appendChild(dishName);
    dish.appendChild(dishPrice);
    return dish;
}

export default create;