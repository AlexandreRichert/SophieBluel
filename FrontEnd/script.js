/// \\\\\\\\\Récupération de tous les travaux de l'API ///

fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(projects => {


        const gallery = document.querySelector('.gallery');

        /// suppression du contenu déjà existant dans la div gallery ///
        gallery.innerHTML = "" ;


        /// création des éléments de gallery pour chaque travaux /// 
        projects.forEach(element => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const figcaption = document.createElement('figcaption');

            /// attribution à chaque élément, l'image et le titre ///
            img.src = element.imageUrl;
            img.alt = element.title;
            figcaption.textContent = element.title;

            /// attribution de l'image et de figcaption à son élément parent : figure ///
            figure.appendChild(img);
            figure.appendChild(figcaption);
            /// attribution de figure à son élément parent : gallery ///
            gallery.appendChild(figure);
            
        });
    })
    .catch((erreur) => console.log('Erreur : ' + erreur));




///\\\\\\\\\\\\\\\\ BOUTONS FILTRES ///////////////////
/// Récupération de l'API pour les filtres ///
fetch('http://localhost:5678/api/works/')
    .then(result => result.json())
    .then(categories => {

/// Sélection du bouton tous ////
        const boutonTous = document.querySelector(".bouton-tous");
            /// Au clique du bouton tous, retourne les éléments de toutes les catégories ////
        boutonTous.addEventListener("click", function () {
            const travauxTous = categories.filter(function (travaux) {
                return travaux.categoryId <= 3;
            });
            /// affiche à la console, les éléments de toutes les catégories (pas nécessaire) ///
            console.log(travauxTous)


            ///Sélection de la div gallery ///
            const gallery = document.querySelector('.gallery');
            /// suppression du contenu déjà existant dans la div gallery ///
            gallery.innerHTML="";
            /// parcours du tableau contenant tous les éléments ///
            travauxTous.forEach(data => {
            /// création des éléments de gallery pour chaque travaux /// 
                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const figcaption = document.createElement('figcaption');

                /// attribution à chaque élément, l'image et le titre ///
                img.src = data.imageUrl;
                img.alt = data.title;
                figcaption.textContent = data.title;

                /// attribution de l'image et de figcaption à son élément parent : figure ///
                figure.appendChild(img);
                figure.appendChild(figcaption);
                /// attribution de figure à son élément parent : gallery ///
                gallery.appendChild(figure);

            })
            
        })

        /// Sélection du bouton objets ////
        const boutonObjets = document.querySelector(".bouton-objets");
            /// Au clique du bouton objets, retourne les éléments de la catégorie objet ////
        boutonObjets.addEventListener("click", function () {
            const travauxObjets = categories.filter(function (travaux) {
                return travaux.categoryId === 1;
            });
            /// affiche à la console, les éléments de la catégorie objet  ///
            console.log(travauxObjets)
             ///Sélection de la div gallery ///
            const gallery = document.querySelector('.gallery');
            /// suppression du contenu déjà existant dans la div gallery ///
            gallery.innerHTML="";
            /// parcours du tableau contenant les objets filtrés ///
            travauxObjets.forEach(data => {

                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const figcaption = document.createElement('figcaption');

                /// attribution à chaque élément, l'image et le titre ///
                img.src = data.imageUrl;
                img.alt = data.title;
                figcaption.textContent = data.title;

                /// attribution de l'image et de figcaption à son élément parent : figure ///
                figure.appendChild(img);
                figure.appendChild(figcaption);
                /// attribution de figure à son élément parent : gallery ///
                gallery.appendChild(figure);

            })
            });
        /// Sélection du bouton appartements ////
        const boutonsAppartements = document.querySelector(".bouton-appartements");
        /// Au clique du bouton appartements, retourne les éléments de la catégorie appt ////
        boutonsAppartements.addEventListener("click", function () {
            const travauxAppartements = categories.filter(function (travaux) {
                return travaux.categoryId === 2;
            });
            /// affiche à la console, les éléments de la catégorie appt  ///
            console.log(travauxAppartements)
            ///Sélection de la div gallery ///
            const gallery = document.querySelector('.gallery');
            /// suppression du contenu déjà existant dans la div gallery ///
            gallery.innerHTML="";
            /// parcours du tableau contenant les appt filtrés ///
            travauxAppartements.forEach(data => {

                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const figcaption = document.createElement('figcaption');

                /// attribution à chaque élément, l'image et le titre ///
                img.src = data.imageUrl;
                img.alt = data.title;
                figcaption.textContent = data.title;

                /// attribution de l'image et de figcaption à son élément parent : figure ///
                figure.appendChild(img);
                figure.appendChild(figcaption);
                /// attribution de figure à son élément parent : gallery ///
                gallery.appendChild(figure);

            })
            });

        const boutonsHotel = document.querySelector(".bouton-hotel");

        boutonsHotel.addEventListener("click", function () {
            const travauxHotel = categories.filter(function (travaux) {
                return travaux.categoryId === 3;
            });
            console.log(travauxHotel)
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML="";
            travauxHotel.forEach(data => {

                const figure = document.createElement('figure');
                const img = document.createElement('img');
                const figcaption = document.createElement('figcaption');

                /// attribution à chaque élément, l'image et le titre ///
                img.src = data.imageUrl;
                img.alt = data.title;
                figcaption.textContent = data.title;

                /// attribution de l'image et de figcaption à son élément parent : figure ///
                figure.appendChild(img);
                figure.appendChild(figcaption);
                /// attribution de figure à son élément parent : gallery ///
                gallery.appendChild(figure);

            })
            });
        })
    
/// fonction qui ajoute les modifications à la page d'accueil après connexion réussie ///
function editsAfterLogin () {
    ///récupération du token stocké
    var token = sessionStorage.getItem('token');
    if (token != null) {
        edits();
    }
}

editsAfterLogin ();


function edits () {

        /// création de la bande noire au dessus du header ///

        /// création d'une div regroupant les éléments de la bande noire///
        const element = document.getElementById("body");
        const header = document.getElementById("header");
        const containerEdits = document.createElement("div");
        containerEdits.setAttribute('id','container-edits');
        /// insertion de cette div au dessus du header ///
        element.insertBefore(containerEdits,header);


        /// création de l'icône d'édition ///
        const icon = document.createElement("i");
        icon.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
        icon.setAttribute('id','icon-edit');
        /// insertion de cette icône dans la div créée précédemment///
        containerEdits.appendChild(icon);

        /// création du texte "Mode édition" ///
        const editionMode = document.createElement("p");
        const editionModeText = document.createTextNode("Mode édition");
        editionMode.setAttribute('id','edition-mode');
        editionMode.appendChild(editionModeText);
        ///insertion de ce texte dans la div créée précédemment///
        containerEdits.appendChild(editionMode);

        /// création du texte "publier les changements" ///
        const publishChanges = document.createElement("p");
        const publishChangesText = document.createTextNode("publier les changements");
        publishChanges.setAttribute('id','publish-changes');
        publishChanges.appendChild(publishChangesText);
        ///insertion de ce texte dans la div créée précédemment///
        containerEdits.appendChild(publishChanges);
        
        /// remplacement de "login" par "logout" dans nav ///
        document.getElementById("login").innerHTML ="logout";
        
        
        /// création d'une div en dessous de l'image de présentation ///
        const getIntro = document.getElementById("figure");
        const modifyUnderIntro = document.createElement("div");
        modifyUnderIntro.setAttribute('id','container-intro');
        getIntro.appendChild(modifyUnderIntro);
   
        const iconUnderIntro = document.createElement("i");
        iconUnderIntro.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
        iconUnderIntro.setAttribute('id','icon-edit');
        modifyUnderIntro.appendChild(iconUnderIntro);

        const firstModify = document.createElement("p");
        const firstModifyText = document.createTextNode("modifier");
        firstModify.setAttribute('id','first-modify');
        firstModify.appendChild(firstModifyText);
        modifyUnderIntro.appendChild(firstModify);

        /// Masquer les boutons filtres ///
        const hideBoutons = document.getElementById("boutons");
        hideBoutons.style.display ='none';

        const getContainerProjects = document.getElementById("portfolio")
        const getProjectTitle = document.getElementById("mes-projets");
        const modifyNextToProject = document.createElement("div");
        modifyNextToProject.setAttribute('id','container-projects');
        getContainerProjects.append(modifyNextToProject);
        modifyNextToProject.appendChild(getProjectTitle)

        const iconNextToProject = document.createElement("i");
        iconNextToProject.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
        iconNextToProject.setAttribute('id','icon-edit-project');
        modifyNextToProject.append(iconNextToProject);

        const secondModify = document.createElement("button");
        const secondModifyText = document.createTextNode("modifier");
        secondModify.setAttribute('id','second-modify');
        ///secondModify.setAttribute('href','#modal');
        secondModify.appendChild(secondModifyText);
        ///secondModify.href = "#modal";
        modifyNextToProject.appendChild(secondModify);

        hideBoutons.before(modifyNextToProject);
    }


function addModalElements () {
    fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(projects => {


        const getContainerImages = document.querySelector('.container-images');
        const getEdition = document.querySelector('.edition');


        /// suppression du contenu déjà existant dans la div gallery ///


        /// création des éléments de gallery pour chaque travaux /// 
        projects.forEach(element => {
            const figure = document.createElement('figure');
            figure.setAttribute('id','figure-modal');
            const img = document.createElement('img');
            img.setAttribute('id','image-modal');
            /// attribution à chaque élément, l'image et le titre ///
            img.src = element.imageUrl;
            img.alt = element.title;

            const iconTrash = document.createElement("i");
            iconTrash.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
            iconTrash.setAttribute('id','icon-modal');
            figure.appendChild(iconTrash);

            const edition = document.createElement("p");
            const editionText = document.createTextNode("éditer");
            edition.setAttribute('id','editer');
            edition.appendChild(editionText);
            figure.appendChild(edition);
            

            /// attribution de l'image et de figcaption à son élément parent : figure ///
            figure.appendChild(img);
            /// attribution de figure à son élément parent : gallery ///
            getContainerImages.appendChild(figure);
            
        });
    })
    .catch((erreur) => console.log('Erreur : ' + erreur));
}

addModalElements();

function showModal () {
    const getModal = document.getElementById('modal');
    const btnModify = document.getElementById('second-modify');
    btnModify.addEventListener("click", function () {
        getModal.style.display ='flex';
})
    getModal.addEventListener("click", closeModal)
    getModal.querySelector('#cross-mark').addEventListener('click', closeModal)
    getModal.querySelector('.modal-wrapper').addEventListener('click', Propagation)
}

showModal();

function closeModal () {
    const getModal = document.getElementById('modal');
    getModal.style.display ='none';
   
}


function Propagation (e){
    e.stopPropagation()
}

closeModal();

window.addEventListener('click', e => {
    console.log(e.target)
})