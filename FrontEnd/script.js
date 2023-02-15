

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


fetch('http://localhost:5678/api/works/')
    .then(result => result.json())
    .then(categories => {


        const boutonTous = document.querySelector(".bouton-tous");

        boutonTous.addEventListener("click", function () {
            const travauxTous = categories.filter(function (travaux) {
                return travaux.categoryId <= 3;
            });
            console.log(travauxTous)
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML="";
            travauxTous.forEach(data => {

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

        const boutonObjets = document.querySelector(".bouton-objets");

        boutonObjets.addEventListener("click", function () {
            const travauxObjets = categories.filter(function (travaux) {
                return travaux.categoryId === 1;
            });
            console.log(travauxObjets)
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML="";
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

        const boutonsAppartements = document.querySelector(".bouton-appartements");

        boutonsAppartements.addEventListener("click", function () {
            const travauxAppartements = categories.filter(function (travaux) {
                return travaux.categoryId === 2;
            });
            console.log(travauxAppartements)
            const gallery = document.querySelector('.gallery');
            gallery.innerHTML="";
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
    

/*const reponse = await fetch('http://localhost:5678/api/works/');
const category = await reponse.json();

function getWorks(category){
    for (let i = 0; i < category.length; i++) {

        const article = category[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".buttons");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        //Code ajouté
        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        //Code aJouté
        pieceElement.appendChild(avisBouton);
    
        }
        ajoutListenersAvis();
}

genererPieces(pieces);

    //gestion des bouttons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
        });
        document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
}); */