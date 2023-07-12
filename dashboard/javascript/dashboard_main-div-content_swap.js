// dashboard_main-div-content_swap.js

document.getElementById('sidebar').addEventListener('click', function(e) {
  var target = e.target;
  if (target.tagName.toLowerCase() === 'a') {
    e.preventDefault(); // Prevent the default action (navigating to the link)
    var pageUrl = target.getAttribute('data-page'); // Get the URL from the data-page attribute
    fetchContent(pageUrl); // Fetch the content of the specified page
    history.pushState({ pageUrl: pageUrl }, '', '?page=' + pageUrl); // Add the page to the browser's history
  }
});

function fetchContent(pageUrl) {
  fetch(pageUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      // Update the content of the div container with the fetched data
      document.querySelector('.content-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Load the default page on initial page load
document.addEventListener('DOMContentLoaded', function() {
  var initialPage = 'flowbox.html';
  var params = new URLSearchParams(window.location.search);
  if (params.has('page')) {
    initialPage = params.get('page');
  }
  fetchContent(initialPage);
});

// When the page is refreshed, load the appropriate page
window.addEventListener('popstate', function(e) {
  if (e.state && e.state.pageUrl) {
    fetchContent(e.state.pageUrl);
  }
});
