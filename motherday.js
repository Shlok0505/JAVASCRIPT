const showLoveButton = document.getElementById('show-love');
const loveMessageDiv = document.getElementById('love-message');

showLoveButton.addEventListener('click', () => {
  loveMessageDiv.innerHTML = `
    <p>You are loved, appreciated, and cherished more than words can express.</p>
    <p>Thank you for being an amazing mom!</p>
  `;
});