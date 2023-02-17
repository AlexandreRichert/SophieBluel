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
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(error => console.log(error, "Erreur dans l'identifiant ou le mot de passe"))
});

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
