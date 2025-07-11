// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const emailBtn = document.getElementById('emailBtn');
  const popup = document.getElementById('emailPopup');
  const closeBtn = document.querySelector('.close-btn');
  const copyBtn = document.getElementById('copyBtn');
  const emailText = document.getElementById('emailText');

  // Show popup when email button is clicked
  emailBtn.addEventListener('click', function(e) {
    e.preventDefault();
    popup.style.display = 'block';
  });

  // Close popup when X is clicked
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  });

  // Close popup when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  // Copy email to clipboard
  copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(emailText.textContent)
      .then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  });
});