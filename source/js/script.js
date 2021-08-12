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
const mainFeedbackForm = feedbackForm.querySelector('form');
const popupFeedbackForm = popup.querySelector('form');
const formName = document.getElementById('input-name');
const formTelephone = document.getElementById('input-telephone');
const formText = document.getElementById('textarea');
const formNamePopup = document.getElementById('input-name-popup');
const formTelephonePopup = document.getElementById('input-telephone-popup');
const formTextPopup = document.getElementById('textarea-popup');
const anchors = document.querySelectorAll('a[href*="#');
const productionLink = document.querySelector('.production__link');
const companyPartners = document.querySelector('.company-info__partners-name');

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

const changeContentElement = function() {
  if (deviceWidth < 768) {
    productionLink.textContent = 'Бесплатная консультация';
  }
}

getElement();
changeContentElement();

navigationPopupButton.addEventListener('click', function() {
  popup.style.display = 'block';
  popup.classList.add('popup-modal-view');
  formNamePopup.focus();
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

mainFeedbackForm.addEventListener('submit', function(evt) {
  localStorage.setItem('name', formName.value);
  localStorage.setItem('telephone', formTelephone.value);
  localStorage.setItem('text', formText.value);
  formName.value = '';
  formTelephone.value = '';
  formText.value = '';
})

popupFeedbackForm.addEventListener('submit', function(evt) {
  localStorage.setItem('name', formNamePopup.value);
  localStorage.setItem('telephone', formTelephonePopup.value);
  localStorage.setItem('text', formTextPopup.value);
  formNamePopup.value = '';
  formTelephonePopup.value = '';
  formTextPopup.value = '';
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

  var phoneMaskPopup = IMask(
    formTelephonePopup, {
      mask: '+{7}(000)000-00-00'
    });
