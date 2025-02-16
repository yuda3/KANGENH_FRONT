document.addEventListener('DOMContentLoaded', function () {
    const ta1 = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() =>{
        ta1.animate()
        ta2.animate()
    },1000);
});
class TextAnimation{
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText(){
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate(){
        this.el.classList.toggle('inview');
    }
}
