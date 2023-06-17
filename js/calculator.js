window.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.preventDefault();
    let trace = parseInt(e.target.textContent);
    let display = document.querySelector('.display');
    display.textContent = display.textContent === '0' ? trace : display.textContent += trace;
    console.log(trace);
  }
});