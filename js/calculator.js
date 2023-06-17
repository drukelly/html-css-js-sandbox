window.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.preventDefault();
    let trace = parseInt(e.target.textContent);
    console.log(trace);
  }
});