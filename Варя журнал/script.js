// Основной класс журнала
class BirthdayMagazine {
    constructor() {
        this.currentPage = 'cover';
        this.pages = [
            'cover', 'greeting', 'family', 'name', 'wanted', 
            'friendship', 'meaning', 'home', 'eyes', 'google', 'character'
        ];
        this.init();
    }

    init() {
        this.hideLoader();
        this.setupNavigation();
        this.setupPageNavigation();
        this.setupScrollToTop();
        this.setupMobileMenu();
        this.updatePageIndicator();
        this.setupSmoothAnimations();
    }

    hideLoader() {
        // Скрываем лоадер после полной загрузки страницы
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500);
                }
            }, 1000);
        });

        // На всякий случай - скрываем через 3 секунды максимум
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader && loader.style.display !== 'none') {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }
        }, 3000);
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const targetPage = e.target.dataset.page;
                this.navigateToPage(targetPage);
                
                // Обновляем активные кнопки
                navButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                // Закрываем мобильное меню
                this.closeMobileMenu();
            });
        });
    }

    setupPageNavigation() {
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => this.previousPage());
            nextBtn.addEventListener('click', () => this.nextPage());

            // Добавляем навигацию клавишами
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.previousPage();
                if (e.key === 'ArrowRight') this.nextPage();
            });

            // Swipe для мобильных устройств
            this.setupSwipeNavigation();
        }
    }

    setupSwipeNavigation() {
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextPage();
            } else {
                this.previousPage();
            }
        }
    }

    navigateToPage(pageId) {
        // Скрываем текущую страницу
        const currentPage = document.getElementById(this.currentPage);
        if (currentPage) {
            currentPage.classList.remove('active');
        }

        // Показываем новую страницу
        const newPage = document.getElementById(pageId);
        if (newPage) {
            newPage.classList.add('active');
            this.currentPage = pageId;
            this.updatePageIndicator();
            this.updateNavButtons();
            this.scrollToTop();
            this.animatePageContent();
        }
    }

    previousPage() {
        const currentIndex = this.pages.indexOf(this.currentPage);
        if (currentIndex > 0) {
            const prevPage = this.pages[currentIndex - 1];
            this.navigateToPage(prevPage);
            this.updateNavButtonActive(prevPage);
        }
    }

    nextPage() {
        const currentIndex = this.pages.indexOf(this.currentPage);
        if (currentIndex < this.pages.length - 1) {
            const nextPage = this.pages[currentIndex + 1];
            this.navigateToPage(nextPage);
            this.updateNavButtonActive(nextPage);
        }
    }

    updateNavButtonActive(pageId) {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.page === pageId) {
                btn.classList.add('active');
            }
        });
    }

    updateNavButtons() {
        const currentIndex = this.pages.indexOf(this.currentPage);
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        if (prevBtn && nextBtn) {
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentIndex === this.pages.length - 1 ? '0.5' : '1';
        }
    }

    updatePageIndicator() {
        const currentIndex = this.pages.indexOf(this.currentPage);
        const currentPageElement = document.getElementById('currentPage');
        const totalPagesElement = document.getElementById('totalPages');

        if (currentPageElement) {
            currentPageElement.textContent = (currentIndex + 1).toString();
        }
        if (totalPagesElement) {
            totalPagesElement.textContent = this.pages.length.toString();
        }
    }

    setupScrollToTop() {
        const scrollBtn = document.getElementById('scrollToTop');
        
        if (scrollBtn) {
            // Показываем/скрываем кнопку при скролле
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollBtn.style.display = 'block';
                } else {
                    scrollBtn.style.display = 'none';
                }
            });

            // Прокрутка вверх при клике
            scrollBtn.addEventListener('click', () => {
                this.scrollToTop();
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    setupMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');

        if (menuBtn && navMenu) {
            menuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            // Закрываем меню при клике вне его
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.nav-content')) {
                    navMenu.classList.remove('active');
                }
            });
        }
    }

    closeMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }

    setupSmoothAnimations() {
        // Добавляем CSS для плавных анимаций
        const style = document.createElement('style');
        style.textContent = `
            .magazine-page {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease;
            }
            
            .magazine-page.active {
                opacity: 1;
                transform: translateY(0);
            }
            
            .fade-in {
                animation: fadeInUp 0.8s ease both;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    animatePageContent() {
        const currentPage = document.getElementById(this.currentPage);
        if (!currentPage) return;

        // Анимируем элементы с задержкой
        const animatedElements = currentPage.querySelectorAll('.memory-item, .letter-block, .trait-category, .result-item');
        animatedElements.forEach((element, index) => {
            element.classList.remove('fade-in');
            setTimeout(() => {
                element.classList.add('fade-in');
            }, index * 100);
        });
    }
}

// Дополнительные функции для интерактивности
function setupInteractiveElements() {
    // Добавляем эффект при наведении на фото
    const photos = document.querySelectorAll('.photo-placeholder, .memory-photo, .name-photo');
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Эффект для кнопки поиска Google
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            this.textContent = 'Ищем самую лучшую сестру...';
            setTimeout(() => {
                this.textContent = 'Найдено! ★★★★★';
                setTimeout(() => {
                    this.textContent = 'Поиск в Google';
                }, 2000);
            }, 1000);
        });
    }

    // Добавляем плавающие сердечки на обложку
    createFloatingHearts();
}

function createFloatingHearts() {
    const hearts = ['💖', '💕', '✨', '🌟', '🎀'];
    const cover = document.getElementById('cover');
    
    if (!cover) return;

    setInterval(() => {
        if (Math.random() > 0.7) {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `heartFloat ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(heart);

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5000);
        }
    }, 2000);

    // Добавляем CSS для анимации сердечек
    const heartStyle = document.createElement('style');
    heartStyle.textContent = `
        @keyframes heartFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(heartStyle);
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
    const magazine = new BirthdayMagazine();
    setupInteractiveElements();
    
    console.log('🎉 Журнал для Варя успешно загружен!');
    console.log('📖 Страниц: ' + magazine.pages.length);
    console.log('💫 Готов к просмотру!');
});

// Функция для легкого добавления своих фото
function replacePhoto(placeholderClass, imageUrl) {
    const elements = document.querySelectorAll('.' + placeholderClass);
    elements.forEach(element => {
        element.style.backgroundImage = `url('${imageUrl}')`;
    });
}

// Пример использования:
// replacePhoto('photo-placeholder', 'photos/my-photo.jpg');

// Функция для обновления текста
function updateText(elementSelector, newText) {
    const element = document.querySelector(elementSelector);
    if (element) {
        element.textContent = newText;
    }
}

// Пример использования:
// updateText('.cover-title h1', 'С Днем Рождения!');