const API = 'http://localhost:5678/api/works'

async function getAPI() {
    const response = await fetch(API);
    const json= await response.json();
    console.log(json);
}

getAPI();