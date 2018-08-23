class Ascroll {

    constructor() {
        this.elements = document.querySelectorAll('.animated');
        this.init(this.elements);
    }

    init(element) {
        window.addEventListener('scroll', function() {
            for (let i = 0; i < element.length; i++) {
                let el = element[i];
                if (el.offsetTop - window.scrollY <= parseInt(el.getAttribute('@scroll'))) {
                    el.classList.add(el.getAttribute('@animate'));
                } else {
                    el.classList.remove(el.getAttribute('@animate'));
                }
            }
        }, false);
    }

}
