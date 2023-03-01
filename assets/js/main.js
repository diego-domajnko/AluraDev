const menuCabecalho = document.querySelector('.nav__menu');

menuCabecalho.addEventListener('click', () => {
  const navLista = document.querySelector('.nav__lista');
  const classes = navLista.classList;
  
  if (classes.contains('hidden')) {
    navLista.style.display = "flex";
    classes.remove('hidden');
  } else {
    navLista.style.display = "none";
    classes.add('hidden');
  }
});