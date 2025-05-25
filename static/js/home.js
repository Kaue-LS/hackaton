function CheckWidth() {
    if (window.innerWidth <= 748) {
        window.document.getElementById("searchBar").placeholder = "Buscar paciente"
    }
    else {
        window.document.getElementById("searchBar").placeholder = "Buscar paciente por nome,ID ou responsável"
    }
}

window.addEventListener('resize', CheckWidth)
CheckWidth()