import rest_img from './resturant_img.jpg';
import './style.css';

const create = () => {
    const content = document.querySelector('#content');
    content.appendChild(createPic());
    content.appendChild(createHeadline());
    content.appendChild(createDescription());
}

function createPic() {
    const img_holder = document.createElement('div');
    img_holder.classList.add('img_holder');
    const myImg = new Image();
    myImg.src = rest_img;
    img_holder.appendChild(myImg);
    return img_holder;
}

function createHeadline() {
    const headline = document.createElement('h2');
    headline.classList.add('headline');
    headline.textContent = "Just a very common fake resturant";
    return headline;
}

function createDescription() {
    const des = document.createElement('p');
    des.classList.add('des');
    des.textContent = "Our resturant will provide some of the most common food you can think of,\
    prepare to be amazed since this is a fake website\
    thank you for spending time reading this";
    return des;
}

export default create;