const header = document.querySelector('.hdr');

    window.addEventListener('scroll', function(){
        header.classList.toggle('active', 
        this.window.scrollY > 50)
    });
