import create from "./page_load";

(function() {
    const content = document.createElement('div');
    content.id = "content";
    document.querySelector('body').appendChild(content);
    create();
})();