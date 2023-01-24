const form = document.querySelector('form.login-form');
form.addEventListener('submit', submitHandler);
function submitHandler(e) {
  e.preventDefault();
  const { email, password } = form.elements;
  if (email.value === '' || password.value === '') {
    alert('All fields must be filled');
    return;
  } else {
    const respons = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(respons);
    console.log(`Login: ${email.value}, Password: ${password.value}`);

    e.currentTarget.reset();
    return respons;
  }
}
