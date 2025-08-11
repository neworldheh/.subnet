const howElement = document.querySelector('.how');
const top2Element = document.querySelector('.top2');
let cursor = document.querySelector('.cursor');


howElement.addEventListener('mouseenter', () => {
    top2Element.style.filter = 'blur(4px)';
});

howElement.addEventListener('mouseleave', () => {
    top2Element.style.filter = 'none';
});

function scrollControl(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            est.style.color = "white"
        }else{
            est.style.color = "black"
        }
        if(window.scrollY > window.innerHeight * 90/100){
            title.style.color = "white"
            star.style.color = "white"
        }else{
            title.style.color = "black"
            star.style.color = "black"
        }
    });
}
scrollControl()
function updateCursorPosition(event) {
    let x = event.clientX - 20;
    let y = event.clientY - 20;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
}
document.addEventListener('mousemove', updateCursorPosition);