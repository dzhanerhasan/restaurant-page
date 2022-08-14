import goToHomePage from './homepage';
import goToMenuPage from './menu.js';
import goToContactPage from './contact';

import './styles/style.css';

import HeaderLogo from './images/logo.png';
import TwitterLogo from './images/twitter-logo.png';
import IgLogo from './images/ig-logo.jpeg';

function createNavBar() {
    const header = document.createElement('header');

    const logoDiv = document.createElement('div');
    const logoPic = new Image();
    logoPic.src = HeaderLogo;

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Shawarma King';

    const headerBtnDiv = document.createElement('div');
    const menuBtn = document.createElement('a');
    const contactBtn = document.createElement('a');

    logoDiv.classList.add('logo-div');
    logoPic.classList.add('logo-pic');

    headerTitle.classList.add('header-title');
    headerTitle.addEventListener('click', goToHomePage);

    headerBtnDiv.classList.add('header-btns');
    menuBtn.classList.add('menu-btn');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', goToMenuPage);

    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', goToContactPage);

    logoDiv.append(logoPic);
    headerBtnDiv.append(menuBtn, contactBtn);
    header.append(logoDiv, headerTitle, headerBtnDiv);
    content.append(header);
}

function createSidebar() {
    const sidebar = document.createElement('div');
    const socialMediaDiv = document.createElement('div');
    const twitterDiv = document.createElement('div');
    const igDiv = document.createElement('div');
    const twitterLogo = new Image();
    const igLogo = new Image();
    twitterLogo.src = TwitterLogo;
    igLogo.src = IgLogo;

    sidebar.classList.add('sidebar');
    socialMediaDiv.classList.add('social-media');

    twitterDiv.append(twitterLogo);
    igDiv.append(igLogo);
    socialMediaDiv.append(twitterDiv, igDiv);
    sidebar.append(socialMediaDiv);
    content.append(sidebar);
}

const content = document.querySelector('#content');

createNavBar();
createSidebar();
goToHomePage();

export { createNavBar, createSidebar };
