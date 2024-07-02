document.addEventListener('DOMContentLoaded', function () {
    const cb = function(el, isIntersection){
        if(isIntersection){
            const ta = new TextAnimation(el);
            ta.animate()
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
});
