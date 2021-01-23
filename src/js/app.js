// TODO: write code here
import CardFormWidget from './widget';

// 4111111111111111 - один из валидных номеров
const widget = new CardFormWidget(document.querySelector('[data-section="widget-container"]'));
widget.bindToDOM();
