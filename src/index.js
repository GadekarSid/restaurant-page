import createHome from './home.js';
import createMenu from './menu.js';
import './style.css';
initializeBody();


function initializeBody(){
    const content = document.createElement('div');
    content.setAttribute("id","content");
    content.classList.add('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    document.body.appendChild(content);
    loadContent('home');
}

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'La Pizza Piato';
    header.appendChild(h1);
    const nav = document.createElement('nav');
    const homeButton = createNavButton('Home');
    const menuButton = createNavButton('Menu');
    homeButton.addEventListener('click',e => {
        if (e.target.classList.contains('nav-button-active')) return;
        setActiveButton(homeButton);
        loadContent('home');
    })
    menuButton.addEventListener('click',e => {
        if (e.target.classList.contains('nav-button-active')) return;
        setActiveButton(menuButton);
        loadContent('menu');
    })
    //nav.appendChild(createNavButton('Contact'));
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    header.appendChild(nav);
    return header;
}

function createNavButton(text){
    const button = document.createElement('button');
    button.classList.add('nav-button');
    button.textContent = text;
    return button;
}

function createMain(){
    const main = document.createElement('div');
    main.setAttribute('id','main');
    main.classList.add('main');
    return main;
}

function loadContent(page){
    const main = document.getElementById('main');
    main.textContent = "";
    console.log(main);
    if(page == "home"){
        main.appendChild(createHome());
    }
    else{
        main.appendChild(createMenu());
    }
}

function setActiveButton(button){
    const buttons = document.querySelectorAll(".nav-button");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("nav-button-active");
    }
  });

  button.classList.add("nav-button-active");
}
function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const copyright = document.createElement("p");
    copyright.textContent = `Thanks Michael Osman`;

    footer.appendChild(copyright);

  
    return footer;
  }