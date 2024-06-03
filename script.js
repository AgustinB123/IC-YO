
import { handleButtonClick } from './clickHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('actionButton');
  if (button) {
    button.addEventListener('click', handleButtonClick);
  }
});

