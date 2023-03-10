

window.addEventListener('load', () => {
   
    editsAfterLogin ();
    addModalElements();
    showModal('modal', 'second-modify', '#cross-mark', '.modal-wrapper');
    filterProjects();
    document.querySelector('.bouton-tous').click();
    
    ///closeModal();
});
