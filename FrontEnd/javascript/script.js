/// fonction d'affichage des projets ///
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
        
    let a =document.querySelectorAll('.boutons button')
    a.forEach(bouton => {
        console.log(bouton);
        bouton.addEventListener('click', event => {
            a.forEach(b => {
                b.style.backgroundColor= "white";
                b.style.color ="#1D6154"
            });
            event.target.style.backgroundColor="#1D6154";
            event.target.style.color="white";
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
                showProjects(travauxObjets);
            });
        });
    });
}


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
       

    
/// fonction qui ajoute les edits à la page d'accueil après connexion réussie ///
function editsAfterLogin () {
    ///récupération du token stocké
    var token = sessionStorage.getItem('token');
    if (token != null) {
        /// si le token n'est pas nul et que donc la connexion est réussie, on applique les changements à la page principale///
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
    let logout=document.getElementById("login");
    logout.innerHTML ="logout";
    logout.addEventListener("click", () => {
        sessionStorage.removeItem('token');
        window.location.href= "index.html";
    });    
    
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


    let linkNextToProject = createLinkUpdate();
    linkNextToProject.setAttribute('id','second-modify');
    modifyNextToProject.appendChild(linkNextToProject);

    hideBoutons.before(modifyNextToProject);
}

/// fonction d'ajout des éléments à l'intérieur de la modale ///
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
/// création de l'icone poubelle en lui donnant l'id correspondant à l'id du work ///
            const iconTrash = createIcone( element.id, [ "fa-trash-can"]);
            /// au clique de cette icone, suppression du work correspondant à l'icone ///
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

/// fonction permettant la suppression d'un travaux au clique de l'icone de suppression ///
async function deleteProduct(idWork) {

    const res= await fetch(`http://localhost:5678/api/works/${idWork}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "authorization": `Bearer ${sessionStorage.getItem('token')}`
        }
        
    });
    /// si la réponse que renvoie la méthode delete...///
    if(res.status == 204) {
        /// on supprime l'élement selectionné de la modale
        let getFigureModal = document.getElementById('figure-modal ' + idWork);
        getFigureModal.remove();
        /// on supprime l'élement selectionné de la page principale///
        let getFigurePortfolio = document.getElementById('figure ' + idWork);
        getFigurePortfolio.remove();

    }
    
}

/// focntion permettant d'afficher la modale sélectionnée ///
/// modal = container aside de toutes les modales ///
/// button = lorsque l'on clique sur button, la fonction s'exécute///
/// cross = la croix de fermeture de modale ///
/// wrapper = wrapper de la modale permettant le clique à l'extérieur de cette dernière pour la fermer /// 
function showModal (modal, button, cross, wrapper) {
    const getModal = document.getElementById(modal);
    const btnModify = document.getElementById(button);
    if( btnModify !== null) {
        btnModify.addEventListener("click", function () {
            getModal.style.display ='flex';
        });
        /// au clique partout sur la page, on ferme la modale
        getModal.addEventListener("click", closeModal)
        /// au clique sur la croix, on ferme la modale
        getModal.querySelector(cross).addEventListener('click', closeModal)
        /// On empêche la possibilité de cliquer n'importe où pour fermer la modale, mais uniquement à l'extérieur de celle-ci///
        getModal.querySelector(wrapper).addEventListener('click', Propagation)
    }
    
}
/// fonction qui ferme le aside modale ///
function closeModal () {
    const getModal = document.getElementById('modal');
    getModal.style.display ='none';
   
}

///fonction empêchant aux modales la fermeture de la modale au clique à l'intérieur de la modale ///
function Propagation (e){
    e.stopPropagation()
}

///fonction permettant de changer les displays des modales ///
function changeModal(display1, display2) {
    document.querySelector('.modal-wrapper').style.display=display1;
    document.querySelector('.modal-form').style.display=display2;
}

/// Au clique du bouton d'ajout de photo, fonctions changeModal et showModal s'appliquent ///
let getButtonAddImage = document.querySelector('.add-image');
getButtonAddImage.addEventListener('click',() => {    
    /// disparition de la modale de présentation des modales et affichage de la modale du formulaire d'ajout de travaux///
    changeModal('none','flex');
    showModal('modal', 'add-image', '#cross', '.modal-form');    
});

/// Au clique sur la flèche gauche de la 2nde modale, la 1ère s'affiche à nouveau ///
let getArrowLeft = document.querySelector('.fa-arrow-left-long');
getArrowLeft.addEventListener('click',() => {    
    changeModal('flex','none');
});


///Affichage de l'image dans le formulaire après avoir l'avoir sélectionnée ///
var input = document.querySelector('input[type="file"]');

input.addEventListener('change', function(event) {
  /// Récupérer le fichier sélectionné par l'utilisateur
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    /// Créer un nouvel élément d'image
    var img =createElement("img","image-form");
    /// Définir la source de l'image sur le contenu du fichier
    img.src = event.target.result;
    /// récupération du container de la partie image du formulaire ///
    var container = document.querySelector(".add-work-image");
    /// Vider la div avant d'y ajouter l'image
    container.innerHTML = '';
    /// Ajouter l'image à la div
    container.appendChild(img);
  };
  /// Lire le contenu du fichier en tant que URL de données
  reader.readAsDataURL(file);
});

async function addWorkElement () {
    ///récupération du formulaire ///
    const form = document.querySelector('.add-work-form');
        ///récupération de l'id de l'image du form ///
    const image = document.getElementById('image_uploads');
        ///récupération de l'id du titre ///
    const title = document.getElementById('title');
        ///récupération de l'id de la catégorie ///
    const category = document.getElementById('categories');

    ///Au submit du formulaire ///
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!title.value || !image.files[0] || !category.value) {
        alert ("Veuillez remplir tous les champs");
        return;
    }
    /// Création d'un nouveau formData///
    const formData = new FormData();
    ///Attribution de l'input du titre au formData
    formData.append('title',title.value);
    ///Attribution de l'input de l'image au formData
    formData.append('image', image.files[0]);
    ///Attribution de l'input de la catégorie au formData
    formData.append('category',category.value);
    
    fetch('http://localhost:5678/api/works', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        body: formData
    })
    .then(res => {
        /// Si reponse du Post est favorable, alors on recharge la page automatiquement ///
        if (res.status>= 200 && res.status <205) {
            window.location.reload();
        }
    })
    .catch(error => {
        console.error('Erreur lors du téléchargement', error);
    });
    });
}
