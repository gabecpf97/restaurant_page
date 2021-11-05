import rest_img from './resturant_img.jpg';
import './style.css';

const create = () => {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMenuBar());
    content.appendChild(createPic());
    content.appendChild(createDescription());
}

function createHeader() {
    const header = document.createElement('h1');
    header.textContent = "Common Resturant";
    return header;
}

function createMenuBar() {
    const menuBar = document.createElement('div');
    const home = document.createElement('div');
    const contact = document.createElement('div');
    const menu = document.createElement('div');
    
    menuBar.classList.add('menu_bar');
    home.classList.add('home');
    contact.classList.add('contact');
    menu.classList.add('menu');
    home.classList.add('item');
    contact.classList.add('item');
    menu.classList.add('item');

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    menuBar.appendChild(home);
    menuBar.appendChild(menu);
    menuBar.appendChild(contact);
    return menuBar;
}

function createPic() {
    const img_holder = document.createElement('div');
    img_holder.classList.add('img_holder');
    const myImg = new Image();
    myImg.src = rest_img;
    img_holder.appendChild(myImg);
    return img_holder;
}

function createDescription() {
    const des = document.createElement('p');
    des.classList.add('des');
    des.textContent = "This will be description"
    return des;
}

export default create;