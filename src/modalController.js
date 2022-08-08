const modal = document.querySelector('.modal');

const closeOnClickOutside = (() =>{
    window.onclick = function(e){
        if(e.target == modal){
            modal.style.display = "none";
        }
    }
})();

const openModal = () => {
    modal.style.display = "block";
}

export {openModal}