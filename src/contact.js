const create = () => {
    const content = document.querySelector('#content');
    content.appendChild(createContact());
}

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.textContent = "this is contact";
    return contact;
}

export default create;