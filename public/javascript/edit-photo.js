//middleware(control) file to help interactions for editing photo between server(model) and front end(view)
async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="photo-title"]').value.trim();
    const photo_url = document.querySelector('input[name="photo-url"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/photos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        photo_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-photo-form').addEventListener('submit', editFormHandler);
  