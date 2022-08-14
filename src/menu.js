import './styles/menu.css';
import Beef from './images/menu/beef.png';
import Chicken from './images/menu/chicken.png';
import Falafel from './images/menu/falafel.png';
import Fries from './images/menu/fries.png';
import Pita from './images/menu/pita.png';
import Portion from './images/menu/portion.png';
import { createNavBar, createSidebar } from '.';

function goToMenuPage() {
    const content = document.querySelector('#content');
    const menu = document.createElement('div');
    const beef = document.createElement('div');
    const chicken = document.createElement('div');
    const falafel = document.createElement('div');
    const fries = document.createElement('div');
    const pita = document.createElement('div');
    const portion = document.createElement('div');

    menu.classList.add('menu');
    chicken.classList.add('menu-item');
    beef.classList.add('menu-item');
    falafel.classList.add('menu-item');
    fries.classList.add('menu-item');
    pita.classList.add('menu-item');
    portion.classList.add('menu-item');

    const chickenTitle = document.createElement('h1');
    chickenTitle.textContent = 'Chicken Shawarma';
    const chickenImgDiv = document.createElement('div');
    const chickenImg = new Image();
    chickenImg.src = Chicken;
    const chickenPrice = document.createElement('h3');
    chickenPrice.textContent = '5.99BGN';
    chickenImgDiv.append(chickenImg);
    chicken.append(chickenTitle, chickenImgDiv, chickenPrice);

    const beefTitle = document.createElement('h1');
    beefTitle.textContent = 'Beef Shawarma';
    const beefImgDiv = document.createElement('div');
    const beefImg = new Image();
    beefImg.src = Beef;
    const beefPrice = document.createElement('h3');
    beefPrice.textContent = '6.99BGN';
    beefImgDiv.append(beefImg);
    beef.append(beefTitle, beefImgDiv, beefPrice);

    const falafelTitle = document.createElement('h1');
    falafelTitle.textContent = 'Falafel Shawarma';
    const falafelImgDiv = document.createElement('div');
    const falafelImg = new Image();
    falafelImg.src = Falafel;
    const falafelPrice = document.createElement('h3');
    falafelPrice.textContent = '4.99BGN';
    falafelImgDiv.append(falafelImg);
    falafel.append(falafelTitle, falafelImgDiv, falafelPrice);

    const pitaTitle = document.createElement('h1');
    pitaTitle.textContent = 'Shawarma with Pita Bread';
    const pitaImgDiv = document.createElement('div');
    const pitaImg = new Image();
    pitaImg.src = Pita;
    const pitaPrice = document.createElement('h3');
    pitaPrice.textContent = '6.99BGN';
    pitaImgDiv.append(pitaImg);
    pita.append(pitaTitle, pitaImgDiv, pitaPrice);

    const friesTitle = document.createElement('h1');
    friesTitle.textContent = 'Fries';
    const friesImgDiv = document.createElement('div');
    const friesImg = new Image();
    friesImg.src = Fries;
    const friesPrice = document.createElement('h3');
    friesPrice.textContent = '3.99BGN';
    friesImgDiv.append(friesImg);
    fries.append(friesTitle, friesImgDiv, friesPrice);

    const portionTitle = document.createElement('h1');
    portionTitle.textContent = 'Portion Shawarma';
    const portionImgDiv = document.createElement('div');
    const portionImg = new Image();
    portionImg.src = Portion;
    const portionPrice = document.createElement('h3');
    portionPrice.textContent = '9.99BGN';
    portionImgDiv.append(portionImg);
    portion.append(portionTitle, portionImgDiv, portionPrice);

    menu.append(beef, chicken, falafel, pita, portion, fries);

    content.textContent = '';
    createNavBar();
    createSidebar();
    content.append(menu);
}

export default goToMenuPage;
