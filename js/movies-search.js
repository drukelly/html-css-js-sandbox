// Display x amount of results per page
const perPage = 10;
let currentPage = 1;

// Display results
const displayResults = data => {
  // Define results div
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  // Instantiate pagination
  const paginationDiv = document.getElementById('pagination');
  paginationDiv.innerHTML = '';

  // Display no results found when data.length is 0
  if (data.data.length === 0) {
    resultsDiv.innerHTML = '<p>No results found</p>';
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';
    return;
  }

  // Display movie title and year
  data.data.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');
    movieDiv.innerHTML = `<h2>${movie.Title}</h2><small>${movie.Year}</small>`;
    resultsDiv.appendChild(movieDiv);
  });

  // Display pagination when total_pages is greater than 1
  if (data.total_pages > 1) {
    let startPage = Math.max(currentPage - 2, 1);
    // Display 5 pages at a time
    // 0 is 1; hence 4 is 5 below due to 0 is the starting index
    let endPage = Math.min(startPage + 4, data.total_pages);

    // Loop through pages to determine pagination to display
    for (let i = startPage; i <= endPage; i++) {
      const pageLink = document.createElement('a');
      pageLink.href = '#';
      pageLink.textContent = i;
      // Highlight current page
      if (i === currentPage) {
        pageLink.className = 'active';
      }
      // Change page when clicked
      pageLink.addEventListener('click', event => {
        event.preventDefault();
        currentPage = i;
        performSearch();
      });
      // Append page link to pagination div
      paginationDiv.appendChild(pageLink);
    }

    // Display maximum number of pages based on search term
    const maxPagesDiv = document.createElement('div');
    maxPagesDiv.textContent = `of ${data.total_pages}`;
    paginationDiv.appendChild(maxPagesDiv);
  }
}

// Perform search
const performSearch = () => {
  const search = document.getElementById('search').value;
  const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${search}&page=${currentPage}&per_page=${perPage}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error(error));
}

// Add event listener to submit button
document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault();
  currentPage = 1;
  performSearch();
});