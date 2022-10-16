const btn = document.querySelector('button');
const main = document.querySelector('menu');
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    if (main.style.display == 'none') {
        main.style.display = 'block';
    } else {
        main.style.display = 'none';
    }
});
document.onresize = () => {
    if (window.innerWidth >= 768) {
        main.style.display = 'block';
    }
    else{
        main.style.display = 'none';
    }
}