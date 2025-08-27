document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('response');
 
  if (!name || !email || !message) {
    response.textContent = 'Please fill out all fields.';
    response.style.color = 'red';
    return;
  }

  // Simulate successful submission
  response.textContent = 'Thank you for contacting us!';
  response.style.color = 'red';

  // Reset form fields
  document.getElementById('form').reset();
}); 

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('response');
 
  if (!name || !email || !message) {
    response.textContent = 'Please fill out all fields.';
    response.style.color = 'red';
    return;
  }

  // Simulate successful submission
  response.textContent = 'Thank you for contacting us!';
  response.style.color = 'red';

  // Reset form fields
  document.getElementById('form').reset();
}); 

