import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

(function() {
    const content = document.createElement('div');
    const topBar = document.createElement('div');
    content.id = "content";
    topBar.classList.add('topBar');
    topBar.appendChild(createHeader());
    topBar.appendChild(createMenuBar());
    document.querySelector('body').appendChild(topBar);
    document.querySelector('body').appendChild(content);
    createHome();
    addListenerToButt();

    function createHeader() {
        const header = document.createElement('h1');
        header.textContent = "Common Resturant";
        return header;
    }
    
    function createMenuBar() {
        const menuBar = document.createElement('div');
        const home = document.createElement('button');
        const contact = document.createElement('button');
        const menu = document.createElement('button');
        
        menuBar.classList.add('menu_bar');
        home.classList.add('but_home');
        contact.classList.add('but_contact');
        menu.classList.add('but_menu');
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

    function addListenerToButt() {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                clearContent();
                if (e.target.classList[0] == 'but_home')
                    createHome();
                else if (e.target.classList[0] == 'but_menu')
                    createMenu();
                else if (e.target.classList[0] == 'but_contact')
                    createContact();
            });
        })
    }

    function clearContent() {
        while (content.firstChild != null) 
            content.removeChild(content.firstChild)
    }
})();