// Menu Mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Efeito de Digitação
const typingText = document.querySelector('.typing-text');
const texts = ['Desenvolvedor Front-End', 'web developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}

// Iniciar efeito de digitação
typeEffect();

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Por enquanto, apenas mostraremos um alerta
    alert('Mensagem enviada com sucesso!');
    contactForm.reset();
});

// Animação de scroll para as seções
const sections = document.querySelectorAll('section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        if (window.pageYOffset > sectionTop) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Adicionar estilo inicial para as seções
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-in-out';
});

window.addEventListener('scroll', checkScroll);
checkScroll(); // Verificar posição inicial