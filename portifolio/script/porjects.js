const items = document.querySelectorAll('.carousel-item');
let currentIndex = 3; // A imagem 4 começa com o índice 3

function updateCarousel() {
  // Remover a classe "middle" de todas as imagens
  items.forEach(item => item.classList.remove('middle'));

  // Adiciona a classe "middle" à imagem que deve ser a central
  items[currentIndex].classList.add('middle');

  // Adiciona a transição para mover as imagens
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.transform = 'scale(1)'; // A imagem central fica maior
    } else {
      item.style.transform = 'scale(0.9)'; // As outras imagens ficam menores
    }
  });
}

// Inicializa o carrossel com a imagem central (imagem 4)
updateCarousel();

// Evento para a seta "next" (para a direita)
document.getElementById('next').addEventListener('click', () => {
  // Aumenta o índice para a próxima imagem (movimento para a direita)
  currentIndex = (currentIndex + 1) % items.length; // Comportamento circular (vai de 0 a 6)
  updateCarousel();
});

// Evento para a seta "prev" (para a esquerda)
document.getElementById('prev').addEventListener('click', () => {
  // Diminui o índice para a imagem anterior (movimento para a esquerda)
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Comportamento circular (vai de 0 a 6)
  updateCarousel();
});