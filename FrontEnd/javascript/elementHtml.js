function createIcone(id = null, classes  = null) {
    const icon = createElement("i", id, classes);

    // par défaut tous les icones sont en regular
    icon.classList.add('fa-regular');

    return icon;
   
}

function createLinkUpdate() {
    let iconUpdate = createIcone('icon-edit-project', [ "fa-pen-to-square"]);
    let linkUpdate = createLink("", "", 'first-modify');
    let spanUpdate = createSpan("Modifier");

    linkUpdate.appendChild(iconUpdate);
    linkUpdate.appendChild(spanUpdate);

    return linkUpdate;
}

function createLink(link = null, text = null, id = null, onClickFunction = null) {
    let a = createElement("a", id);
   


    a.text = text;

    if(link != "") {
        a.href = link;
    }

    if(onClickFunction !== null) {
        a.setAttribute("onclick",onClickFunction);
    }

    return a;
}

function createSpan(text, id = null, classes = null) {
    let span = createElement("span", id, classes);

    span.innerText = text;

    return span;
}

function createElement(type, id = null, classes  = null) {
    let element = document.createElement(type) ;

    if(id !== null) {
        element.id = id;
    }
    if(classes != null) {
        element.classList.add(...classes);
    }

    return element;
} 