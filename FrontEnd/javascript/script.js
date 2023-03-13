
function showProjects(projects) {
    const gallery = document.querySelector('.gallery');

        /// suppression du contenu déjà existant dans la div gallery ///
        gallery.innerHTML = "" ;


        /// création des éléments de gallery pour chaque travaux /// 
        projects.forEach(element => {
           
            const figure = createElement('figure', 'figure ' + element.id);
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
}



///\\\\\\\\\\\\\\\\ BOUTONS FILTRES ///////////////////



function filterProjects() {
    console.log("clicke");
        
        document.querySelectorAll('.boutons button').forEach(bouton => {
            bouton.addEventListener('click', event => {
                console.log("clic bouton");
                /// Récupération de l'API pour les filtres ///
                fetch('http://localhost:5678/api/works/')
                .then(result => result.json())
                .then(projects => {
                    const travauxObjets = projects.filter(function (travaux) {
                        if(event.target.dataset.id >= 1 ) {
                            
                            return travaux.categoryId == event.target.dataset.id;
                        }
                        else {
                            return  travaux.categoryId >= 1;
                        }
                    }); 
                
                    /// affiche à la console, les éléments de la catégorie objet  ///
                    console.log(travauxObjets)
                    showProjects(travauxObjets);
                });
            })
          })

    /// Sélection du bouton tous ////
        /*const boutonTous = document.querySelector(".bouton-tous");
            /// Au clique du bouton tous, retourne les éléments de toutes les catégories ////
        boutonTous.addEventListener("click", function () {
            const travauxTous = projects.filter(function (travaux) {
                return travaux.categoryId <= 3;
            });
            /// affiche à la console, les éléments de toutes les catégories (pas nécessaire) ///
            console.log(travauxTous)
            showProjects(travauxTous);
        })

        /// Sélection du bouton objets ////
        const boutonObjets = document.querySelector(".bouton-objets");
            /// Au clique du bouton objets, retourne les éléments de la catégorie objet ////
        boutonObjets.addEventListener("click", function () {
            const travauxObjets = projects.filter(function (travaux) {
                return travaux.categoryId === 1;
            });
            /// affiche à la console, les éléments de la catégorie objet  ///
            console.log(travauxObjets)
            showProjects(travauxObjets);
            })

        const boutonsAppartements = document.querySelector(".bouton-appartements");
        /// Au clique du bouton appartements, retourne les éléments de la catégorie appt ////
        boutonsAppartements.addEventListener("click", function () {
            const travauxAppartements = projects.filter(function (travaux) {
                return travaux.categoryId === 2;
            });
            /// affiche à la console, les éléments de la catégorie appt  ///
            console.log(travauxAppartements)
            showProjects(travauxAppartements);
            });
        
        const boutonsHotel = document.querySelector(".bouton-hotel");
        boutonsHotel.addEventListener("click", function () {
            const travauxHotel = projects.filter(function (travaux) {
                return travaux.categoryId === 3;
            });
            console.log(travauxHotel)
            showProjects(travauxHotel);
        });*/
       
}






    
/// fonction qui ajoute les modifications à la page d'accueil après connexion réussie ///
function editsAfterLogin () {
    ///récupération du token stocké
    var token = sessionStorage.getItem('token');
    if (token != null) {
        edits();
    }
}




function edits () {

        /// création de la bande noire au dessus du header ///

        /// création d'une div regroupant les éléments de la bande noire///
        const element = document.getElementById("body");
        const header = document.getElementById("header");
        const containerEdits = createElement("div", "container-edits");
        ///containerEdits.setAttribute('id','container-edits');
        /// insertion de cette div au dessus du header ///
        element.insertBefore(containerEdits,header);


        /// création de l'icône d'édition ///
        const iconHeader = createIcone( 'icon-edit', [ "fa-pen-to-square"]);
        /// insertion de cette icône dans la div créée précédemment///
        containerEdits.appendChild(iconHeader);

        /// création du texte "Mode édition" ///
        const editionMode = createSpan("Mode édition", 'edition-mode');
        ///insertion de ce texte dans la div créée précédemment///
        containerEdits.appendChild(editionMode);

        /// création du texte "publier les changements" ///
        const publishChanges = createSpan("publier les changements", 'publish-changes');
        ///insertion de ce texte dans la div créée précédemment///
        containerEdits.appendChild(publishChanges);
        
        /// remplacement de "login" par "logout" dans nav ///
        document.getElementById("login").innerHTML ="logout";
        
        
        /// création d'une div en dessous de l'image de présentation ///
        const getIntro = document.getElementById("figure");
        const modifyUnderIntro = createElement("div",'container-intro');
        getIntro.appendChild(modifyUnderIntro);
   
        let linkIntro = createLinkUpdate();

        modifyUnderIntro.append(linkIntro);

        
        /// Masquer les boutons filtres ///
        const hideBoutons = document.getElementById("boutons");
        hideBoutons.style.display ='none';

        const getContainerProjects = document.getElementById("portfolio")
        const getProjectTitle = document.getElementById("mes-projets");
        const modifyNextToProject = createElement("div",'container-projects');
        getContainerProjects.append(modifyNextToProject);
        modifyNextToProject.appendChild(getProjectTitle)

  
       /* const iconNextToProject = createIcone('icon-edit-project', [ "fa-pen-to-square"]);
        modifyNextToProject.append(iconNextToProject);

        const secondModify = document.createElement("button");
        const secondModifyText = document.createTextNode("modifier");
        secondModify.setAttribute('id','second-modify');
        ///secondModify.setAttribute('href','#modal');
        secondModify.appendChild(secondModifyText);
        ///secondModify.href = "#modal";
        modifyNextToProject.appendChild(secondModify);*/

        let linkNextToProject = createLinkUpdate();
        linkNextToProject.setAttribute('id','second-modify');
        modifyNextToProject.appendChild(linkNextToProject);

        hideBoutons.before(modifyNextToProject);
    }


function addModalElements () {
    fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(projects => {


        const getContainerImages = document.querySelector('.container-images');
        /// création des éléments de gallery pour chaque travaux /// 
        projects.forEach(element => {
            const figure = createElement('figure', 'figure-modal ' + element.id);
            const img = createElement('img', 'image-modal ' + element.id);
            /// attribution à chaque élément, l'image et le titre ///
            img.src = element.imageUrl;
            img.alt = element.title;

            const iconTrash = createIcone( element.id, [ "fa-trash-can"]);
            iconTrash.setAttribute("onclick", "deleteProduct(this.id)");
            figure.appendChild(iconTrash);

            const edition = createSpan("éditer","editer");
            figure.appendChild(edition);
            

            /// attribution de l'image et de figcaption à son élément parent : figure ///
            figure.appendChild(img);
            /// attribution de figure à son élément parent : gallery ///
            getContainerImages.appendChild(figure);
            
        });
    })
    .catch((erreur) => console.log('Erreur : ' + erreur));
}


async function deleteProduct(idWork) {

    console.log("click delete product");
    const res= await fetch(`http://localhost:5678/api/works/${idWork}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "authorization": `Bearer ${sessionStorage.getItem('token')}`
        }
        
    });
    if(res.status == 204) {
        let getFigureModal = document.getElementById('figure-modal ' + idWork);
        getFigureModal.remove();
        let getFigurePortfolio = document.getElementById('figure ' + idWork);
        getFigurePortfolio.remove();
    }
    
}

function showModal (modal, button, cross, wrapper) {
    const getModal = document.getElementById(modal);
    const btnModify = document.getElementById(button);
    if( btnModify !== null) {
        btnModify.addEventListener("click", function () {
            getModal.style.display ='flex';
        });
        getModal.addEventListener("click", closeModal)
        getModal.querySelector(cross).addEventListener('click', closeModal)
        getModal.querySelector(wrapper).addEventListener('click', Propagation)
    }
    
}

function closeModal () {
    const getModal = document.getElementById('modal');
    getModal.style.display ='none';
   
}

function Propagation (e){
    e.stopPropagation()
}

window.addEventListener('click', e => {
    console.log(e.target)
})

function changeModal(display1, display2) {
    document.querySelector('.modal-wrapper').style.display=display1;
    document.querySelector('.modal-form').style.display=display2;

}

let getButtonAddImage = document.querySelector('.add-image');
getButtonAddImage.addEventListener('click',() => {    
    changeModal('none','flex');
    showModal('modal', 'add-image', '#cross', '.modal-form');    
});

let getArrowLeft = document.querySelector('.fa-arrow-left-long');
getArrowLeft.addEventListener('click',() => {    
    changeModal('flex','none');
});

let input = document.getElementById("input-file");
let imageName = document.getElementById("imageName")


