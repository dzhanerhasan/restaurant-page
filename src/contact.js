import './styles/contact.css';

import { createNavBar, createSidebar } from '.';

function goToContactPage() {
    const content = document.querySelector('#content');

    const contactPage = document.createElement('div');
    const contactUs = document.createElement('div');
    const phoneNum = document.createElement('h2');
    const address = document.createElement('h2');
    const email = document.createElement('h2');

    contactPage.classList.add('contact-us');
    contactUs.classList.add('contact-info');
    phoneNum.textContent = '+359 000 0000';
    email.textContent = 'randemail@gmail.com';
    address.textContent = 'street Random, Block 88, Sofia';

    contactUs.append(phoneNum, email, address);
    contactPage.append(contactUs);

    content.textContent = '';
    createNavBar();
    createSidebar();
    content.append(contactPage);
}

export default goToContactPage;
