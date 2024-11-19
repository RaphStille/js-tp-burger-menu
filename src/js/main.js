(function () {
    const burgerMenu = {
        eMain : document.querySelector('.main'),
        eNavButton : document.querySelector('.nav-button'),

        init () {
            document.documentElement.classList.add('js-enabled');
            this.eNavButton.addEventListener('click',(event)=> {
                this.classChange();
            });
        },
        classChange(){
            this.eMain.classList.toggle('is-opened');
        }
    }
    burgerMenu.init();
})();