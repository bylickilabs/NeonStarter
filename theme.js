///* ©Thorsten Bylicki | https://bylickilabs.de | https://Github.com/bylickilabs */

window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
  }
};

///* ©Thorsten Bylicki | https://bylickilabs.de | https://Github.com/bylickilabs */
