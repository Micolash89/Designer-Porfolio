(() => {

    const iconOpen = document.querySelector('.li__icon--open');
    const iconClose = document.querySelector('.li__icon--close');
    const sidebar = document.querySelector('.sidebar');

    console.dir(sidebar);
    iconOpen.addEventListener('click', showSidebar);
    iconClose.addEventListener('click', closeSidebar);

    function showSidebar() {
        sidebar.style.display = 'flex';
    }
    function closeSidebar() {

        sidebar.style.display = 'none';
    }


})()