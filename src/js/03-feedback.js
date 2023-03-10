import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';       //ключ для сховища

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
console.log(form.elements);     // виводить у консоль усі елементи форми
reloadPage();     //при перезавантаженні сторінки залишає дані у полі email та message(п.2 Task)

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {    
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || message.value === '') {                // якщо значення email або message відсутнє,
    return alert('Please fill in all the fields!');               // то вивиодимо alert Please fill in all the fields!'
  }
  console.log({ email: email.value, message: message.value });   // виводить у консоль email та message тільки у тому випадку, якщо і поле email і поле message заповнені

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  console.log(e.currentTarget);          // поточний об'єкт(feedback-form)
  dataForm = {};
}

