const modal = document.querySelector('.modal');

const openModal = () => {
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

const closeButton = document.querySelector('.modal-content > span');
closeButton.addEventListener('click', () => { closeModal(); });

window.onclick = function (e) {
  if (e.target === modal) {
    closeModal();
  }
};

export { openModal, closeModal };
