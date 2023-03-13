

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
                alert("Erreur dans l'identifiant ou le mot de passe");
            }
        })
        .catch(function(err) {
            console.log("Une erreur est intervenue lors de la requête " + err);
        });
    })
}

login();

