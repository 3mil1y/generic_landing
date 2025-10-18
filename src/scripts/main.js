document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll para baixo
            header.classList.add('scroll-down');
            header.classList.remove('scrolled');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll para cima
            header.classList.remove('scroll-down');
            header.classList.add('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Adiciona classe scrolled ao header após rolar a página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Botão Voltar ao Topo
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Scroll suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de revelação ao rolar
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar a página
    
    // Validação do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector('textarea').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return false;
            }
            
            if (!isValidEmail(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return false;
            }
            
            // Aqui você pode adicionar o código para enviar o formulário
            // Por exemplo, usando fetch() para enviar os dados para um servidor
            
            // Simulando envio bem-sucedido
            this.reset();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            return false;
        });
    }
    
    // Função auxiliar para validar e-mail
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Inicialização de bibliotecas de terceiros podem ser adicionadas aqui
    // Exemplo: inicialização de um carrossel, lightbox, etc.
    
    // Exemplo de inicialização de um carrossel (descomente se estiver usando uma biblioteca como Slick, Swiper, etc.)
    /*
    if (typeof $ !== 'undefined' && typeof $.fn.slick === 'function') {
        $('.testimonials-slider').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
    */
});
