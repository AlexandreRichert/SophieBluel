

window.addEventListener('load', () => {
    loadProjects()
    editsAfterLogin ();
    addModalElements();
    showModal('modal', 'second-modify', '#cross-mark', '.modal-wrapper');
    filterProjects();
    ///closeModal();
});