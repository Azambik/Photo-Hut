//middleware(control) file to help interactions for making a photo between server(model) and front end(view)
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="photo-title"]').value;
    const photo_url = document.querySelector('input[name="photo-url"]').value;
  
  
    const response = await fetch(`/api/photos`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        photo_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-photo-form').addEventListener('submit', newFormHandler);
  