document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const menuButton = document.querySelector(".header .menu-button");
    const sideBar = document.querySelector(".sideBar_mobile");
    const closeButton = document.querySelector(".sideBar_mobile .menu-sideBar");

    // Atualiza o placeholder do input de acordo com a largura
    const updatePlaceholder = () => {
        const isMobile = window.innerWidth <= 748;
        searchBar.placeholder = isMobile
            ? "Buscar paciente"
            : "Buscar paciente por nome,ID ou responsável";
    };

    // Alterna a visibilidade do menu lateral
    const toggleSidebar = () => {
        sideBar.classList.toggle("open");
        sideBar.classList.toggle("close");
    };

    // Inicializa o estado
    updatePlaceholder();

    // Atualiza placeholder em resize
    window.addEventListener("resize", updatePlaceholder);

    // Eventos de abrir e fechar menu lateral
    if (menuButton) {
        menuButton.addEventListener("click", toggleSidebar);
    }
    if (closeButton) {
        closeButton.addEventListener("click", toggleSidebar);
    }
});
