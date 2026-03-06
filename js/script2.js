let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
})

ScrollReveal().reveal('.home-content,.heading,.show',{origin:'top'})
ScrollReveal().reveal('.home-img,.services-container, .qais-box,.contact form',{origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'})
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});


const toggleIcon = document.getElementById('darkMode-icon');
const root = document.documentElement;

// استرجاع الوضع المخزن مسبقًا
const savedMode = localStorage.getItem('mode');
if(savedMode === 'light') {
    // إعداد الوضع النهاري
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--second-bg-color', '#d0edd2');
    root.style.setProperty('--text-color', '#000000');
    root.style.setProperty('--main-color', 'hsl(96, 39%, 57%)');
    toggleIcon.classList.remove('bx-moon');
    toggleIcon.classList.add('bx-sun');
} else {
    // الوضع الليلي الافتراضي
    root.style.setProperty('--bg-color', '#1f242d');
    root.style.setProperty('--second-bg-color', '#323946');
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty('--main-color', 'hsl(96, 100%, 69%)');
    toggleIcon.classList.remove('bx-sun');
    toggleIcon.classList.add('bx-moon');
}

// عند الضغط على الايقونة
toggleIcon.addEventListener('click', () => {
    if(toggleIcon.classList.contains('bx-moon')) {
        // الوضع النهاري
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--second-bg-color', '#d0edd2');
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--main-color', 'hsl(96, 39%, 57%)');

        toggleIcon.classList.remove('bx-moon');
        toggleIcon.classList.add('bx-sun');

        // حفظ الوضع
        localStorage.setItem('mode', 'light');
    } else {
        // الوضع الليلي
        root.style.setProperty('--bg-color', '#1f242d');
        root.style.setProperty('--second-bg-color', '#323946');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--main-color', 'hsl(96, 100%, 69%)');

        toggleIcon.classList.remove('bx-sun');
        toggleIcon.classList.add('bx-moon');

        // حفظ الوضع
        localStorage.setItem('mode', 'dark');
    }
});