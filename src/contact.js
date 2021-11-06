const create = () => {
    const content = document.querySelector('#content');
    content.appendChild(createContact());
}

function createContact() {
    const contact = document.createElement('div');
    const number = '(1) 123 456-7890';
    const email = 'commonFakeResturant129@gmail.com';
    const address = '1234 56th Ave SE Seattle, WA';
    const info = 'Feel free to contact us for any reservation or question';

    contact.classList.add('contact');
    contact.appendChild(addEle(number));
    contact.appendChild(addEle(email));
    contact.appendChild(addEle(address));
    contact.appendChild(addEle(info));
    return contact;
}

function addEle(string) {
    const ele = document.createElement('p');
    ele.classList.add('contact_info');
    ele.textContent = string;
    return ele;
}

export default create;