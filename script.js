///* ©Thorsten Bylicki | https://bylickilabs.de | https://Github.com/bylickilabs */

function toggleTheme() {
  const body = document.body;
  const newTheme = body.classList.contains('theme-dark') ? 'theme-light' : 'theme-dark';
  body.className = newTheme;
  localStorage.setItem('theme', newTheme);
}

///* ©Thorsten Bylicki | https://bylickilabs.de | https://Github.com/bylickilabs */
