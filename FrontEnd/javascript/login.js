
async function login () {
    /// Récupération du formulaire par son ID ///
    const formEl = document.getElementById('login-form');
    /// A la validation du formulaire, application des paramètres ci-dessous
    formEl.addEventListener('submit',event => {
        event.preventDefault();
        ///Création d'un FormData du formulaire de connexion
        const formData = new FormData(formEl);
        /// Methode FETCH POST afin d'envoyer les coordonnées de connexion
        fetch ('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            ///Permet de pouvoir traiter les infos du formData en JSON
            body: JSON.stringify(Object.fromEntries(formData))
        })  
        /// Si la méthode fonctionne, on retourne la réponse en format JSON
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            if (value) {
                /// Stockage du token généré en cas de bonne connexion administrateur
                sessionStorage.setItem('token', value.token);
                /// Récupération de ce dernier
                var token = sessionStorage.getItem('token');
                /// Si ce dernier existe, connexion autorisée et redirection vers la page principale
                if (token != null) {
                    window.location.replace("index.html");
                }
            /// Si pas de token généré, cela veut dire qu'il y a un souci dans les coordonnées
            } else {
                alert("Erreur dans l'identifiant ou le mot de passe");
            }
        })
        /// Message d'erreur en cas de problème lors de la requête
        .catch(function(err) {
            console.log("Une erreur est intervenue lors de la requête " + err);
        });
    })
}

login();

