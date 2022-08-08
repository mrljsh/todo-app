const modal = document.querySelector('.modal');

const closeOnClickOutside = (() =>{
    window.onclick = function(e){
        if(e.target == modal){
            closeModal();
        }
    }
})();

const openModal = () => {
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

const closeModalOnClick = (() => {
    const closeButton = document.querySelector('.modal-content > span');
    closeButton.addEventListener('click', function(){closeModal()});
})();

export {openModal, closeModal}