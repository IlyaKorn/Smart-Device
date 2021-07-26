'use strict';
const sectionAccordeon = document.querySelector('.sections__title');
const addressAccordeon = document.querySelector('.company-address__title');
const sectionsList = document.querySelector('.sections__list');
const addressList = document.querySelector('.company-address__list');
const social = document.querySelector('.social');
const socialList = document.querySelector('.social');
const copyrightData = document.querySelector('.copyright__item--data');
const deviceWidth = window.screen.width;

sectionsList.classList.remove('sections__list--nojs');
addressList.classList.remove('company-address__list--nojs');


sectionAccordeon.addEventListener('click', function() {
  sectionsList.classList.toggle('active');
  sectionAccordeon.classList.toggle('active');
});

addressAccordeon.addEventListener('click', function() {
  addressList.classList.toggle('active');
  addressAccordeon.classList.toggle('active');
});

const getElement = function() {
  if (deviceWidth <= 768) {
    const copyrightDataCopy = copyrightData.cloneNode(true);
    copyrightDataCopy.className =  'social__data';
    social.appendChild(copyrightDataCopy);
  }
};

getElement();

