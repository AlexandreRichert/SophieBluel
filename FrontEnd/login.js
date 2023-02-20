/// Redirection vers page d'accueil quand la connexion est confirmée 
        ///Methode Post pour envoyer les valeurs entrées
        ///Window.location pour rediriger vers une autre page
        ///Si utilisateur === Sophie.Bluel@test.id && mdp === SOphie
        ///Si authentification réussie, redirection vers page d'accueil
        ///Si authentification réussie, ajout header modifs




/// Message d'erreur quand utilisateur et/ou mdp incorrect


/*const datatest = {
    username: 'sophie.bluel@test.tld',
    password: 'SOphie'
}*/

async function getToken () {


    const formEl = document.getElementById('login-form');
    console.log(formEl);

    formEl.addEventListener('submit',event => {
        event.preventDefault();

        const formData = new FormData(formEl);
        console.log(formData.get('email'));
        console.log(formData.get('password'));
        fetch ('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData))
        })  
        .then(function(res) {
            if (res.ok) {
                console.info(res);
                console.log("la requête cart.js est opérationelle.");
                return res.json();
            }
        })
        .then(function(value) {
            if (value) {
                sessionStorage.setItem('IDcommand', value.token);
                var token = sessionStorage.getItem('IDcommand');
                if (token != null) {
                    window.location.href = "index.html";
                }
            } else {
                alert("Une erreur est survenue. Veuillez réessayer ultérieurement.");
            }
        })
        .catch(function(err) {
            console.log("Une erreur est intervenue lors de la requête dans cart.js: " + err);
        });
        console.log(sessionStorage.getItem('IDcommand')); //renvoie null
    })
}

getToken();

/*let response = fetch ('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})  .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/
/*
let username1 = document.getElementById('email').value;
let password1 = document.getElementById('password').value;

const data = {
    username: 'usern'
}
/// récupération du formulaire de la page ///
const form = document.querySelector('.login-form');
console.log(form);
console.log(data);


/// à la validation du formulaire --> /// */
/*form.addEventListener('submit', (event) => {
///récupération d
    event.preventDefault();
    let email = document.getElementById('username').value;
    let email = document.getElementById('password').value;
    if (username.data === username && password.data === password) {
        console.log(2)
    }
});*/
