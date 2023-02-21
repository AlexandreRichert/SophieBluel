/// Redirection vers page d'accueil quand la connexion est confirmée 
        ///Methode Post pour envoyer les valeurs entrées
        ///Window.location pour rediriger vers une autre page
        ///Si utilisateur === Sophie.Bluel@test.id && mdp === SOphie
        ///Si authentification réussie, redirection vers page d'accueil
        ///Si authentification réussie, ajout header modifs




/// Message d'erreur quand utilisateur et/ou mdp incorrect


async function login () {


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
                return res.json();
            }
        })
        .then(function(value) {
            if (value) {
                sessionStorage.setItem('token', value.token);
                var token = sessionStorage.getItem('token');
                if (token != null) {
                    window.location.replace("index.html");
                }
            } else {
                alert("Une erreur est survenue. Veuillez réessayer ultérieurement.");
            }
        })
        .catch(function(err) {
            console.log("Une erreur est intervenue lors de la requête dans cart.js: " + err);
        });
    })
}

login();

/*async function fetchMyDocument() {      
    try {
        let response = await fetch('./index.html'); // Gets a promise
        document.body.innerHTML = await response.text(); // Replaces body with response
        const para = document.createElement("p");
        const node = document.createTextNode("This is new.");
        para.appendChild(node);
        const element = document.getElementById("introduction");
        element.appendChild(para);
    } catch (err) {
      console.log('Fetch error:' + err); // Error handling
    }
  }
*/

/*function editsAfterLogin() {
    fetch('index.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string
        console.log(html);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
*/