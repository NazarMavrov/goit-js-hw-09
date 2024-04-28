const localKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

function saveFormData() {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(localKey, JSON.stringify(formData));
}

function getFormData() {
  const savedData = localStorage.getItem(localKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    email.value = formData.email;
    message.value = formData.message;
  }
}

getFormData();

form.addEventListener('input', () => {
  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Fill please all fields!');
    return;
  }
  console.log({
    email: email.value.trim(),
    message: message.value.trim(),
  });

  localStorage.removeItem(localKey);
  email.value = '';
  message.value = '';
});