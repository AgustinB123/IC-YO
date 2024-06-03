import { handleButtonClick } from '../clickHandler';

test('actualiza el texto del mensaje cuando el botón es clickeado', () => {
  // Configurar el DOM
  document.body.innerHTML = `
    <button id="actionButton"></button>
    <p id="message"></p>
  `;

  // Ejecutar la función de clic
  handleButtonClick();

  // Comprobar el resultado
  expect(document.getElementById('message').textContent).toBe('¡Botón clickeado!');
});
