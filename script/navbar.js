// Seleciona os elementos necessários
const burgerIcon = document.querySelector('.navbar__mobile img'); // Ícone de hambúrguer
const mobileMenu = document.querySelector('.mobile__links'); // Menu móvel
const navbar = document.querySelector('.navbar'); // Navbar principal

// Adiciona um evento de clique ao ícone de hambúrguer
burgerIcon.addEventListener('click', () => {
  // Alterna a classe 'active' no menu móvel
  mobileMenu.classList.toggle('active');
  
  // Alterna a classe 'active' na barra de navegação (se necessário)
  navbar.classList.toggle('active');
});

// Fecha o menu móvel ao clicar em um link
const mobileLinks = document.querySelectorAll('.mobile__links li a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove a classe 'active' ao clicar em um link
    mobileMenu.classList.remove('active');
    navbar.classList.remove('active');
  });
});