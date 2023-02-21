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
    

function editsAfterLogin () {
    var token = sessionStorage.getItem('token');
    if (token != null) {
        edits();
    }
}

editsAfterLogin ();

function edits () {
        const element = document.getElementById("body");
        const header = document.getElementById("header");
        const containerEdits = document.createElement("div");
        containerEdits.setAttribute('id','container-edits');
        element.insertBefore(containerEdits,header);

        const icon = document.createElement("i");
        icon.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
        icon.setAttribute('id','icon-edit');
        containerEdits.appendChild(icon);

        const editionMode = document.createElement("p");
        const editionModeText = document.createTextNode("Mode édition");
        editionMode.setAttribute('id','edition-mode');
        editionMode.appendChild(editionModeText);
        containerEdits.appendChild(editionMode);

        const publishChanges = document.createElement("p");
        const publishChangesText = document.createTextNode("publier les changements");
        publishChanges.setAttribute('id','publish-changes');
        publishChanges.appendChild(publishChangesText);
        containerEdits.appendChild(publishChanges);
        
        document.getElementById("login").innerHTML ="logout";
}
