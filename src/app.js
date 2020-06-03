import './style.css';
import './lazy-background';
import ModalPopup from './modal-popup';

const btn = document.getElementById('ytPlayBtn');
const popUpVideo = new ModalPopup(btn);
btn.onclick = popUpVideo.init;
