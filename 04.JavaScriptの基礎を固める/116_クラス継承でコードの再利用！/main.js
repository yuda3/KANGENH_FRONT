document.addEventListener('DOMContentLoaded', function () {
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el =document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML  = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}


class TweenTextAnimation extends TextAnimation {
    constructor(e2) {
        super(e2);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }
    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i)=>{
            TweenMax.to(c, .6,{
                ease: Back.easeOut,
                delay: i * .05,
                startAt: {y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            })
        });
    }
}