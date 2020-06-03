import './modal-popup.css';
import './lazy-background';
import './main-container.css';
import ModalPopup from './modal-popup';

const btn = document.getElementsByClassName('main-container__youtube-button')[0];
const popUpVideo = new ModalPopup(btn, document);
btn.onclick = popUpVideo.init;
