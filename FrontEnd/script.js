

/// Récupération de tous les travaux de l'API ///

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


/// Récupération de l'API catégories pour les filtres ///
fetch('http://localhost:5678/api/categories')
    .then(result => result.json())
    .then(categories => {

        const boutonTous = document.querySelector(".bouton-tous");

        boutonTous.addEventListener("click", function () {
            const travauxTous = categories.filter(function (travaux) {
                return travaux.id <= 3;
            });
            console.log(travauxTous)
        })

        const boutonObjets = document.querySelector(".bouton-objets");

        boutonObjets.addEventListener("click", function () {
            const travauxObjets = categories.filter(function (travaux) {
                return travaux.id === 1;
            });
            console.log(travauxObjets)
        })
    })