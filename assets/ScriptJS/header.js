var header           = document.getElementById('header');
    var navigationHeader = document.getElementById('navigation_header');
    var content          = document.getElementById('content');
    var showSidebar      = false;

    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(2px)';
        }
        else
        {
            navigationHeader.style.marginLeft = '-100vw';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
        }
    }

    function closeSidebar()
    {
        if(showSidebar)
        {
            showSidebar = true;
            toggleSidebar();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 768 && showSidebar) 
        {  
            showSidebar = true;
            toggleSidebar();
        }
    });

    var header = document.getElementById('header');
    var navigationHeader = document.getElementById('navigation_header');
    var content = document.getElementById('content');
    var showSidebar = false;
    
    function toggleSidebar() {
        showSidebar = !showSidebar;
        if (showSidebar) {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(2px)';
        } else {
            navigationHeader.style.marginLeft = '-100vw';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
        }
    }
    
    function closeSidebar() {
        if (showSidebar) {
            showSidebar = true;
            toggleSidebar();
        }
    }
    
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && showSidebar) {
            showSidebar = true;
            toggleSidebar();
        }
    });
    
    function toggleMode() {
        const html = document.documentElement;
        html.classList.toggle('light');
    
        // Alterar a imagem de perfil
        const img = document.querySelector("#profile img");
    
        if (html.classList.contains('light')) {
            img.setAttribute('src', './Assets/Img/avatar-dark.png');
        } else {
            img.setAttribute('src', './Assets/Img/avatar-light.png');
        }
    }
    