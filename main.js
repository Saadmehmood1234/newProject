document.addEventListener('DOMContentLoaded',function(){
    var menu=document.getElementById('menu');
    var navbar=document.querySelector('.navbar');
    var header=document.querySelector('header');
    menu.addEventListener('click',function(){
        this.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');

    });
    window.addEventListener('scroll',function(){
        menu.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
        if(window.scrollY>60){
            header.classList.add('header-active');
        }
        else{
            header.classList.remove('header-active');

        }
    });
    window.addEventListener('load',function(){
        menu.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
        if(window.scrollY>60){
            header.classList.add('header-active');
        }
        
    });

});