(function () {
    const navChange = {
        navElement : document.getElementById('navigation'),
        button : document.querySelector('.nav-button'),
        init(){
            this.button.addEventListener('click', (evt) => {
                this.buttonNav(evt);
            })
            window.addEventListener('resize', ()=>{
                this.navigationChange()
            });
        },
        navigationChange() {
            if (window.innerWidth > 544) {
                if (this.navElement) {
                    this.navElement.style.display = 'block';
                    this.button.style.display = 'none'
                }
            } else {
                if (this.navElement) {
                    this.navElement.style.display = 'none'
                    this.button.style.display ='block'
                }
            }
        },
        buttonNav(evt){
            document.querySelector('.main').classList.toggle('is-opened');
            if(this.navElement.style.display === 'block'){
                this.navElement.style.display = 'none'
            } else{
                this.navElement.style.display = 'block'
            }
            if (this.navElement) {
                this.navElement.focus();
            }
            evt.preventDefault();
        }
    }

    navChange.init();
})();