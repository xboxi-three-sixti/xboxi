// bing.js

(function() {
  // Get the current URL's query string
  const urlParams = new URLSearchParams(window.location.search);
  
  // Retrieve the "bingSearchTerm" query parameter
  const searchTerm = urlParams.get('bingSearchTerm');
  
  // If there is a search term, redirect to Bing search
  if (searchTerm) {
    // Redirect the user to Bing with the search term
    window.location.href = `https://www.bing.com/search?q=${encodeURIComponent(searchTerm)}`;
  } else {
    // Optionally, you can handle the case where no search term is provided
    console.log("No search term provided.");
  }
})();
