import './styles/homepage.css';
import IntroPic from './images/home-page.png';

import { createNavBar, createSidebar } from '.';

function goToHomePage() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    const introTextDiv = document.createElement('div');
    const introPicDiv = document.createElement('div');
    const introText = document.createElement('div');
    const introPic = new Image();
    const introTitle = document.createElement('h1');
    const introButton = document.createElement('a');

    container.classList.add('container');

    introTextDiv.classList.add('intro-text');
    introTitle.innerHTML = 'Shawarma King';
    introButton.textContent = 'Order Now';
    introButton.href = '';

    introPicDiv.classList.add('intro-pic');
    introPic.src = IntroPic;

    introText.append(introTitle, introButton);
    introTextDiv.append(introText);
    introPicDiv.append(introPic);
    container.append(introTextDiv, introPicDiv);

    content.textContent = '';
    createNavBar();
    createSidebar();
    content.append(container);
}

export default goToHomePage;
