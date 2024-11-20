// Function to show the search page
function showSearchPage() {
  document.getElementById('searchPage').style.display = 'block';
}

// Function to close the search page
function closeSearchPage() {
  document.getElementById('searchPage').style.display = 'none';
}

// Form validation (existing code)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  if (name === '' || email === '') {
    alert('Please fill out all fields');
    e.preventDefault();
  }
});

