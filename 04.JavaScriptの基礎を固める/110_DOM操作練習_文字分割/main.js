document.addEventListener("DOMContentLoaded", function() {
    const el = document.querySelector(".animate-title");
    let str = el.innerText.trim().split("");

    let concatStr = '';

    // for (let c of str) {
    //     console.log(`<span class="char">${c}</span>`);
    // }
    // for (let i = 0; i < str.length; i++) {
    //
    // }
    el.innerHTML = str.reduce((acc, curr) =>{
        curr = curr.replace('/\s+/', '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`
    }, "");
    console.log(concatStr)
})