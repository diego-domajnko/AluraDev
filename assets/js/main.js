const menuCabecalho = document.querySelector('.nav__menu');

menuCabecalho.addEventListener('click', () => {
  const navLista = document.querySelector('.nav__lista');
  const classes = navLista.classList;
  const filhos = menuCabecalho.children;
  
  if (classes.contains('hidden')) {
    navLista.style.display = "flex";
    classes.remove('hidden');
    for (let i = 0; i < filhos.length; i++) {
      const element = filhos[i];
      if (element.classList.contains('fa-bars')) {
        element.style.display = "none";
      } else {
        element.style.display = "inline-flex";
      }
    }
  } else {
    navLista.style.display = "none";
    classes.add('hidden');
    for (let i = 0; i < filhos.length; i++) {
      const element = filhos[i];
      if (!element.classList.contains('fa-bars')) {
        element.style.display = "none";
      } else {
        element.style.display = "inline-flex";
      }
    }
  }
});