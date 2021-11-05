import rest_img from './resturant_img.jpg';
import './style.css';

const create = () => {
    const content = document.querySelector('#content');
    content.appendChild(createPic());
    content.appendChild(createHeadline());
    content.appendChild(createDescription());
}

function createHeadline() {
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = "Just a very common fake resturant";
    return headline;
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