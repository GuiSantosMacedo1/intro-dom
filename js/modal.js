const modal = document.querySelector('#modal-inscricao');
const modalFechar = document.querySelector('.modal-fechar');

// modal.showModal();
// Caso para o modal abrir automaticamente após 5 segundos
window.addEventListener("load", () => {
  setTimeout(() => {
    modal.showModal();
  }, 5000)
})
// Caso para o modal abrir automaticamente a cada 5 segundos, sem parar.
// window.addEventListener("load", () => {
//   setInterval(() => {
//     modal.showModal();
//   }, 5000)
// })

modalFechar.addEventListener('click', () => {
  modal.close();
})

modal.addEventListener('click', (event) => {
  setTimeout(() => {
    if (event.target === modal) {
      modal.close();
    }
  }, 1000)
});


