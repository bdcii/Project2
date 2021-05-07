const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#book-title').value.trim();
  const author = document.querySelector('#book-author').value.trim();
  const isbn = document.querySelector('#book-isbn').value.trim();
  const price = document.querySelector('#book-price').value.trim();
  const description = document.querySelector('#book-desc').value.trim();
  const user_email = document.querySelector('#book-email').value.trim();
  const location = document.querySelector('#book-location').value.trim();
  
 

  if (title && author && isbn && price && description && user_email && location) {
    const response = await fetch(`/api/books`, {
      method: 'POST',
      body: JSON.stringify({ title, author, isbn, price, description, user_email,location,}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
