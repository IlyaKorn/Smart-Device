'use strict';

const sectionAccordeon = document.querySelector('.sections__title');
const addressAccordeon = document.querySelector('.company-address__title');
const sectionsList = document.querySelector('.sections__list');
const addressList = document.querySelector('.company-address__list');
const social = document.querySelector('.social');
const socialList = document.querySelector('.social');
const copyrightData = document.querySelector('.copyright__item--data');
const deviceWidth = window.screen.width;
const navigationPopupButton = document.querySelector('.navigation__button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.feedback-form__close-modal');
const popupWrapper = popup.querySelector('.popup__wrapper');
const pullform = document.querySelector('.feedback-form__button');
const feedbackForm = document.querySelector('.feedback-form');
const formName = feedbackForm.querySelector('.feedback-form__name');
const formTelephone = feedbackForm.querySelector('.feedback-form__telephone');
const formText = feedbackForm.querySelector('.feedback-form__text');
const anchors = document.querySelectorAll('a[href*="#');

sectionsList.classList.remove('sections__list--nojs');
addressList.classList.remove('company-address__list--nojs');


sectionAccordeon.addEventListener('click', function() {
  sectionsList.classList.toggle('active');
  sectionAccordeon.classList.toggle('active');
  addressList.classList.remove('active');

});

addressAccordeon.addEventListener('click', function() {
  addressList.classList.toggle('active');
  addressAccordeon.classList.toggle('active');
  sectionsList.classList.remove('active');
});

const getElement = function() {
  if (deviceWidth <= 768) {
    const copyrightDataCopy = copyrightData.cloneNode(true);
    copyrightDataCopy.className =  'social__data';
    social.appendChild(copyrightDataCopy);
  }
};

getElement();

navigationPopupButton.addEventListener('click', function() {
  popup.style.display = 'block';
  popup.classList.add('popup-modal-view');
});

popupCloseButton.addEventListener('click', function() {
  popup.style.display = 'none';
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('popup-modal-view')) {
      popup.classList.remove('popup-modal-view');
      popup.style.display = 'none';
    }
  }
});

popupWrapper.addEventListener('click', function() {
  if (popup.classList.contains('popup-modal-view')) {
    popup.classList.remove('popup-modal-view');
    popup.style.display = 'none';
  }
});

feedbackForm.addEventListener('submit', function(evt) {
  localStorage.setItem('name', formName.value);
  localStorage.setItem('telephone', formTelephone.value);
  localStorage.setItem('text', formText.value);
})

for (let anchor of anchors) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

var phoneMask = IMask(
  formTelephone, {
    mask: '+{7}(000)000-00-00'
  });
