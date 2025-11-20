
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'gold': '#D4AF37',
                        'dark': '#1a1a1a',
                        'light': '#f8f8f8',
                        'accent': '#8B7355'
                    },
                    fontFamily: {
                        'serif': ['Playfair Display', 'serif'],
                        'sans': ['Inter', 'sans-serif']
                    }
                }
            }
        }
// Script pour le carousel 
        document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('[data-carousel="slide"]');
            const items = carousel.querySelectorAll('[data-carousel-item]');
            const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
            const prevButton = carousel.querySelector('[data-carousel-prev]');
            const nextButton = carousel.querySelector('[data-carousel-next]');
            
            let currentIndex = 0;
            
            function showSlide(index) {
                // Masquer toutes les slides
                items.forEach(item => item.classList.add('hidden'));
                // Afficher la slide actuelle
                items[index].classList.remove('hidden');
                
                // Mettre à jour les indicateurs
                indicators.forEach((indicator, i) => {
                    if (i === index) {
                        indicator.classList.add('bg-white');
                        indicator.classList.remove('bg-white/50');
                    } else {
                        indicator.classList.remove('bg-white');
                        indicator.classList.add('bg-white/50');
                    }
                });
                
                currentIndex = index;
            }
            
            function nextSlide() {
                let nextIndex = currentIndex + 1;
                if (nextIndex >= items.length) {
                    nextIndex = 0;
                }
                showSlide(nextIndex);
            }
            
            function prevSlide() {
                let prevIndex = currentIndex - 1;
                if (prevIndex < 0) {
                    prevIndex = items.length - 1;
                }
                showSlide(prevIndex);
            }
            
            // Événements pour les boutons
            nextButton.addEventListener('click', nextSlide);
            prevButton.addEventListener('click', prevSlide);
            
            // Événements pour les indicateurs
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Défilement automatique
            setInterval(nextSlide, 5000);
            
            // Afficher la première slide
            showSlide(0);
        });

        // Menu mobile functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileSearchButton = document.getElementById('mobile-search-button');
    const mobileSearchBar = document.getElementById('mobile-search-bar');
    
    // Gestion du menu mobile
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Fermer la barre de recherche si ouverte
            mobileSearchBar.classList.add('hidden');
        });
    }
    
    // Gestion de la barre de recherche mobile
    if (mobileSearchButton && mobileSearchBar) {
        mobileSearchButton.addEventListener('click', function() {
            mobileSearchBar.classList.toggle('hidden');
            // Fermer le menu si ouvert
            mobileMenu.classList.add('hidden');
            // Focus sur l'input de recherche quand il s'ouvre
            if (!mobileSearchBar.classList.contains('hidden')) {
                setTimeout(() => {
                    const searchInput = mobileSearchBar.querySelector('input[type="search"]');
                    if (searchInput) searchInput.focus();
                }, 100);
            }
        });
    }
    
    // Fermer le menu et la recherche en cliquant à l'extérieur
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.contains(event.target) && mobileMenuButton && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
        if (mobileSearchBar && !mobileSearchBar.contains(event.target) && mobileSearchButton && !mobileSearchButton.contains(event.target)) {
            mobileSearchBar.classList.add('hidden');
        }
    });
    
    // Carousel functionality
    const carousel = document.querySelector('[data-carousel="slide"]');
    if (carousel) {
        const items = carousel.querySelectorAll('[data-carousel-item]');
        const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
        const prevButton = carousel.querySelector('[data-carousel-prev]');
        const nextButton = carousel.querySelector('[data-carousel-next]');
        
        let currentIndex = 0;
        
        function showSlide(index) {
            items.forEach(item => item.classList.add('hidden'));
            items[index].classList.remove('hidden');
            
            indicators.forEach((indicator, i) => {
                if (i === index) {
                    indicator.classList.add('bg-white');
                    indicator.classList.remove('bg-white/50');
                } else {
                    indicator.classList.remove('bg-white');
                    indicator.classList.add('bg-white/50');
                }
            });
            
            currentIndex = index;
        }
        
        function nextSlide() {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= items.length) nextIndex = 0;
            showSlide(nextIndex);
        }
        
        function prevSlide() {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) prevIndex = items.length - 1;
            showSlide(prevIndex);
        }
        
        if (nextButton) nextButton.addEventListener('click', nextSlide);
        if (prevButton) prevButton.addEventListener('click', prevSlide);
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => showSlide(index));
        });
        
        setInterval(nextSlide, 5000);
        showSlide(0);
    }
});
    