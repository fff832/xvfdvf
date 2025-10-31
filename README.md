
[index.html](https://github.com/user-attachments/files/23260363/index.html)
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Birthday Varya! 💖</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Лоадер -->
    <div id="loader" class="loader">
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Загружается журнал...</p>
        </div>
    </div>

    <!-- Навигация -->
    <nav class="magazine-nav">
        <div class="nav-content">
            <div class="nav-logo">VARYA • 2024</div>
            <button class="mobile-menu-btn">☰</button>
            <div class="nav-menu">
                <button class="nav-btn active" data-page="cover">Обложка</button>
                <button class="nav-btn" data-page="greeting">Поздравление</button>
                <button class="nav-btn" data-page="family">Семья</button>
                <button class="nav-btn" data-page="name">Имя Варя</button>
                <button class="nav-btn" data-page="wanted">Разыскивается</button>
                <button class="nav-btn" data-page="friendship">Дружба</button>
                <button class="nav-btn" data-page="meaning">Значение имени</button>
                <button class="nav-btn" data-page="home">Дом</button>
                <button class="nav-btn" data-page="eyes">Глаза</button>
                <button class="nav-btn" data-page="google">Поиск</button>
                <button class="nav-btn" data-page="character">Характер</button>
            </div>
        </div>
    </nav>

    <!-- Основной контент -->
    <main class="magazine-container">
        <!-- Страница 1: Обложка -->
        <section id="cover" class="magazine-page active">
            <div class="cover-content">
                <div class="photo-collage">
                    <div class="collage-item large" style="background-image: url('photos/cover1.jpg')"></div>
                    <div class="collage-item small" style="background-image: url('photos/cover2.jpg')"></div>
                    <div class="collage-item small" style="background-image: url('photos/cover3.jpg')"></div>
                    <div class="collage-item medium" style="background-image: url('photos/cover4.jpg')"></div>
                </div>
                <div class="cover-title">
                    <h1>HAPPY BIRTHDAY</h1>
                    <div class="subtitle">VARYA</div>
                    <div class="cover-date">SPECIAL EDITION</div>
                </div>
            </div>
        </section>

        <!-- Страница 2: Поздравление -->
        <section id="greeting" class="magazine-page">
            <div class="page-content">
                <div class="two-column-layout">
                    <div class="column photo-column">
                        <div class="photo-frame">
                            <div class="photo-placeholder" style="background-image: url('photos/greeting1.jpg')">
                                <div class="photo-overlay">Фото Варя</div>
                            </div>
                        </div>
                    </div>
                    <div class="column text-column">
                        <h2>Кто эта девушка?</h2>
                        <p class="lead">Это человек, с которым каждому будет комфортно, в каком бы состоянии тот ни находился.</p>
                        <p>Она всегда готова помочь, поддержать и выслушать. Не существует более искренней девушки, чем Варя.</p>
                        <div class="highlight-box">
                            <p>С ней можно не бояться показать себя настоящим - эта девушка никогда не осудит, а примет тебя таким, какой ты есть.</p>
                        </div>
                        <p>Варя вдохновляет на совершенствование и учит действовать так, как чувствует сердце.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Страница 3: Семейные воспоминания -->
        <section id="family" class="magazine-page">
            <div class="page-content">
                <h2 class="page-title">Наши воспоминания</h2>
                <div class="memories-grid">
                    <div class="memory-item">
                        <div class="memory-photo" style="background-image: url('photos/family1.jpg')"></div>
                        <div class="memory-text">
                            <h3>Тот самый день...</h3>
                            <p>Когда мы поняли, что вместе можем всё</p>
                        </div>
                    </div>
                    <div class="memory-item">
                        <div class="memory-photo" style="background-image: url('photos/family2.jpg')"></div>
                        <div class="memory-text">
                            <h3>Незабываемые моменты</h3>
                            <p>Смех, который слышен был всем вокруг</p>
                        </div>
                    </div>
                    <div class="memory-item">
                        <div class="memory-photo" style="background-image: url('photos/family3.jpg')"></div>
                        <div class="memory-text">
                            <h3>Семейные традиции</h3>
                            <p>То, что делает нас особенными</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Страница 4: Имя Варя -->
        <section id="name" class="magazine-page">
            <div class="page-content">
                <h2 class="page-title">В А Р Я</h2>
                <div class="name-acrostic">
                    <div class="letter-block">
                        <div class="letter">В</div>
                        <div class="letter-meaning">Восхитительная - такой, как ты, свет не видывал</div>
                    </div>
                    <div class="letter-block">
                        <div class="letter">А</div>
                        <div class="letter-meaning">Ахеренная лучшая сестра на свете</div>
                    </div>
                    <div class="letter-block">
                        <div class="letter">Р</div>
                        <div class="letter-meaning">Редкой красоты душа и внешность</div>
                    </div>
                    <div class="letter-block">
                        <div class="letter">Я</div>
                        <div class="letter-meaning">Яркая звезда в нашей жизни</div>
                    </div>
                </div>
                <div class="name-photos">
                    <div class="name-photo" style="background-image: url('photos/name1.jpg')"></div>
                    <div class="name-photo" style="background-image: url('photos/name2.jpg')"></div>
                </div>
            </div>
        </section>

        <!-- Страница 5: Разыскивается -->
        <section id="wanted" class="magazine-page">
            <div class="page-content">
                <div class="wanted-poster">
                    <div class="wanted-header">
                        <h1>РАЗЫСКИВАЕТСЯ</h1>
                        <h2>ПРЕСТУПНИЦА: самая лучшая девочка!</h2>
                        <h3>ОСОБО ОПАСНА!</h3>
                    </div>
                    
                    <div class="wanted-content">
                        <div class="wanted-photo" style="background-image: url('photos/wanted1.jpg')">
                            <div class="photo-label">ФОТОГРАФИЯ ПРЕСТУПНИЦЫ</div>
                        </div>
                        
                        <div class="wanted-details">
                            <h4>Преступление: слишком хороша</h4>
                            <div class="details-list">
                                <div class="detail-item">
                                    <span class="label">Пол:</span>
                                    <span class="value">женский</span>
                                </div>
                                <div class="detail-item">
                                    <span class="label">Рост:</span>
                                    <span class="value">167 см</span>
                                </div>
                                <div class="detail-item">
                                    <span class="label">Цвет глаз:</span>
                                    <span class="value">зеленый</span>
                                </div>
                                <div class="detail-item">
                                    <span class="label">Цвет волос:</span>
                                    <span class="value">русый</span>
                                </div>
                                <div class="detail-item">
                                    <span class="label">Вес:</span>
                                    <span class="value">а это секрет, она и так худая</span>
                                </div>
                            </div>
                            <div class="wanted-reward">
                                <p>НАГРАДА: бесконечная любовь и обнимашки!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Страница 6: Дружба -->
        <section id="friendship" class="magazine-page">
            <div class="page-content">
                <div class="friendship-layout">
                    <div class="friendship-text">
                        <h2>Дружба это...</h2>
                        <h3>friendship is...</h3>
                        <div class="friendship-quote">
                            <p>Быть рядом всегда...</p>
                            <p>To be always there...</p>
                        </div>
                        <div class="friendship-description">
                            <p>Даже когда километры разделяют, сердце знает - твоя поддержка всегда со мной.</p>
                        </div>
                    </div>
                    <div class="friendship-photos">
                        <div class="friendship-photo main" style="background-image: url('photos/friendship1.jpg')"></div>
                        <div class="friendship-photo small" style="background-image: url('photos/friendship2.jpg')"></div>
                        <div class="friendship-photo small" style="background-image: url('photos/friendship3.jpg')"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Страница 7: Значение имени -->
        <section id="meaning" class="magazine-page">
            <div class="page-content">
                <div class="meaning-layout">
                    <div class="meaning-header">
                        <h1>ВАРВАРА</h1>
                        <div class="name-subtitle">нежное и прекрасное</div>
                    </div>
                    
                    <div class="meaning-content">
                        <div class="meaning-text">
                            <p>Имя Варвара имеет древнегреческие корни и означает "чужестранка", "дикарка". Но в современном понимании это имя ассоциируется с чем-то прекрасным и необычным.</p>
                            
                            <p>Варвара - это девушка с сильным характером и добрым сердцем. Она сочетает в себе нежность и решительность, мягкость и твердость принципов.</p>
                            
                            <div class="meaning-highlight">
                                <p>Обладательницы этого имени часто бывают творческими личностями с богатым внутренним миром и уникальным взглядом на жизнь.</p>
                            </div>
                            
                            <p>Ты - настоящая Варвара в лучшем смысле этого слова: сильная, красивая и невероятно особенная!</p>
                        </div>
                        
                        <div class="meaning-photo" style="background-image: url('photos/meaning1.jpg')">
                            <div class="photo-caption">Настоящая Варвара</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Страница 8: Дом -->
        <section id="home" class="magazine-page">
            <div class="page-content">
                <div class="home-layout">
                    <div class="home-photo" style="background-image: url('photos/home1.jpg')"></div>
                    <div class="home-text">
                        <h2>ЖИТЬ НЕ ИЗ ТРЕВОГИ,</h2>
                        <h3>а из любви</h3>
                        <div class="home-quote">
                            <p>"Дом не там, где ты живешь, а там, где тебя ждут и любят таким, какой ты есть."</p>
                        </div>
                        <div class="home-message">
                            <p>Ты создаешь уют и тепло везде, где появляешься. С тобой любое место становится домом.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Страница 9: Глаза -->
        <section id="eyes" class="magazine-page">
            <div class="page-content">
                <div class="eyes-layout">
                    <div class="eyes-photo" style="background-image: url('photos/eyes1.jpg')">
                        <div class="eyes-overlay"></div>
                    </div>
                    <div class="eyes-text">
                        <h2>О чём говорят твои глаза...</h2>
                        <div class="eyes-description">
                            <p>В твоих глазах - целая вселенная. Они меняют цвет в зависимости от настроения: то становятся глубокими, как океан, то светлыми, как небо после дождя.</p>
                            <p>Когда ты смотришь на человека, кажется, что видишь его душу. В твоём взгляде столько тепла, понимания и мудрости, что хочется рассказать всё-всё.</p>
                            <p>Это не просто глаза - это врата в прекрасный мир, который ты носишь в себе.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Страница 10: Поиск Google -->
        <section id="google" class="magazine-page">
            <div class="page-content">
                <div class="google-layout">
                    <div class="google-header">
                        <h1 class="google-logo">Google</h1>
                    </div>
                    
                    <div class="search-container">
                        <div class="search-box">
                            <div class="search-icon">🔍</div>
                            <div class="search-query">самая лучшая сестра</div>
                        </div>
                        <button class="search-btn">Поиск в Google</button>
                    </div>
                    
                    <div class="search-results">
                        <div class="result-item featured">
                            <div class="result-title">Варя - идеальная сестра ★★★★★</div>
                            <div class="result-url">www.family.best/sisters/varya</div>
                            <div class="result-desc">Найдена самая лучшая сестра на свете. Обладает сверхспособностями: забота, поддержка, бесконечная любовь.</div>
                        </div>
                        
                        <div class="result-item">
                            <div class="result-title">Почему Варя - лучшая сестра?</div>
                            <div class="result-url">www.sisterhood.perfect/varya</div>
                            <div class="result-desc">1001 причина почему эта девушка - настоящее сокровище для своей семьи.</div>
                        </div>
                        
                        <div class="photos-grid">
                            <div class="google-photo" style="background-image: url('photos/google1.jpg')"></div>
                            <div class="google-photo" style="background-image: url('photos/google2.jpg')"></div>
                            <div class="google-photo" style="background-image: url('photos/google3.jpg')"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Страница 11: Характер -->
        <section id="character" class="magazine-page">
            <div class="page-content">
                <div class="character-layout">
                    <div class="character-header">
                        <h1>ХАРАКТЕР</h1>
                        <div class="character-subtitle">Уникальная личность</div>
                    </div>
                    
                    <div class="character-content">
                        <div class="character-photos">
                            <div class="character-photo main" style="background-image: url('photos/character1.jpg')"></div>
                            <div class="character-photo small" style="background-image: url('photos/character2.jpg')"></div>
                        </div>
                        
                        <div class="character-traits">
                            <div class="trait-category">
                                <h3>💖 Душевные качества</h3>
                                <ul>
                                    <li>Невероятно добрая и отзывчивая</li>
                                    <li>Всегда готова помочь</li>
                                    <li>Обладает прекрасным чувством юмора</li>
                                    <li>Искренняя и честная</li>
                                </ul>
                            </div>
                            
                            <div class="trait-category">
                                <h3>🌟 Таланты и способности</h3>
                                <ul>
                                    <li>Умеет слушать и понимать</li>
                                    <li>Создает уют вокруг себя</li>
                                    <li>Вдохновляет других</li>
                                    <li>Обладает творческим мышлением</li>
                                </ul>
                            </div>
                            
                            <div class="trait-category">
                                <h3>✨ Особенности</h3>
                                <ul>
                                    <li>Уникальное чувство стиля</li>
                                    <li>Прекрасный вкус</li>
                                    <li>Умение радоваться мелочам</li>
                                    <li>Невероятная сила духа</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="character-footer">
                        <div class="final-message">
                            <h2>С Днём Рождения, дорогая Варя! 🎂</h2>
                            <p>Ты - самое ценное сокровище нашей семьи! Любим тебя бесконечно! 💖</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Навигационные стрелки -->
    <div class="page-nav">
        <button id="prevPage" class="nav-arrow">‹</button>
        <div class="page-indicator">
            <span id="currentPage">1</span> / <span id="totalPages">11</span>
        </div>
        <button id="nextPage" class="nav-arrow">›</button>
    </div>

    <!-- Кнопка вверх -->
    <button id="scrollToTop" class="scroll-top-btn">↑</button>

    <script src="script.js"></script>
    <!-- QR-код для быстрого доступа -->
<div id="qrcode-modal" class="qrcode-modal">
    <div class="qrcode-content">
        <span class="qrcode-close">&times;</span>
        <h3>Отсканируй для быстрого доступа 📱</h3>
        <div class="qrcode-image">
            <!-- Здесь будет твой QR-код -->
            <div class="qrcode-placeholder">
                <p>Добавь сюда свой QR-код</p>
                <p>↓</p>
            </div>
        </div>
        <p class="qrcode-text">Сохрани журнал на телефон</p>
        <button class="qrcode-btn" onclick="shareJournal()">Поделиться журналом</button>
    </div>
</div>

<button id="qrcode-btn" class="qrcode-floating-btn">📱 QR</button>
</body>
</html>



[script.js](https://github.com/user-attachments/files/23260368/script.js)
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
// QR-код функциональность
function setupQRCode() {
    const qrBtn = document.getElementById('qrcode-btn');
    const qrModal = document.getElementById('qrcode-modal');
    const qrClose = document.querySelector('.qrcode-close');

    if (qrBtn && qrModal) {
        qrBtn.addEventListener('click', () => {
            qrModal.style.display = 'block';
        });

        qrClose.addEventListener('click', () => {
            qrModal.style.display = 'none';
        });

        // Закрытие по клику вне модального окна
        window.addEventListener('click', (e) => {
            if (e.target === qrModal) {
                qrModal.style.display = 'none';
            }
        });
    }
}

// Функция для поделиться
function shareJournal() {
    if (navigator.share) {
        navigator.share({
            title: 'Журнал для Варя - С Днем Рождения!',
            text: 'Посмотри этот прекрасный журнал ко дню рождения!',
            url: window.location.href
        })
        .then(() => console.log('Успешный шаринг'))
        .catch((error) => console.log('Ошибка шаринга:', error));
    } else {
        // Копирование ссылки в буфер обмена
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                alert('Ссылка скопирована в буфер обмена!');
            })
            .catch(() => {
                alert('Скопируйте ссылку из адресной строки');
            });
    }
}

// Обнови функцию инициализации в script.js - добавь эту строку:
// В методе init() класса BirthdayMagazine добавь:
setupQRCode();


[style.css](https://github.com/user-attachments/files/23260376/style.css)
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-pink: #f8d7da;
    --light-pink: #faeef0;
    --soft-pink: #fdf6f8;
    --accent-pink: #e8b4bc;
    --dark-pink: #d4a5ac;
    --text-color: #5a4a4a;
    --gold: #d4af37;
    --shadow: 0 4px 20px rgba(0,0,0,0.08);
    --transition: all 0.3s ease;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
    background: var(--soft-pink);
    color: var(--text-color);
    overflow-x: hidden;
    min-height: 100vh;
    line-height: 1.6;
    font-size: 16px;
}

/* Лоадер */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--soft-pink);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader-content {
    text-align: center;
    color: var(--text-color);
}

.loader-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid transparent;
    border-top: 3px solid var(--accent-pink);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 15px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Навигация - МОБИЛЬНАЯ ВЕРСИЯ */
.magazine-nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(248, 215, 218, 0.98);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 0.8rem 0;
    box-shadow: var(--shadow);
}

.nav-content {
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color);
    white-space: nowrap;
}

.mobile-menu-btn {
    display: block;
    background: none;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--text-color);
    padding: 0.3rem;
}

.nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(248, 215, 218, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem;
    box-shadow: var(--shadow);
    max-height: 70vh;
    overflow-y: auto;
}

.nav-menu.active {
    display: flex;
}

.nav-btn {
    background: none;
    border: none;
    padding: 0.8rem 1rem;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.9rem;
    transition: var(--transition);
    border-radius: 8px;
    text-align: left;
    color: var(--text-color);
    margin: 0.2rem 0;
}

.nav-btn.active,
.nav-btn:hover {
    background: var(--accent-pink);
    color: white;
}

/* Основной контейнер */
.magazine-container {
    width: 100%;
    margin: 60px auto 0;
    padding: 0;
}

.magazine-page {
    min-height: 100vh;
    width: 100%;
    background: var(--soft-pink);
    display: none;
    position: relative;
    overflow-x: hidden;
}

.magazine-page.active {
    display: block;
}

/* Общие стили страниц */
.page-content {
    padding: 1.5rem 1rem;
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.page-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-color);
    font-weight: 500;
    line-height: 1.3;
}

/* Страница 1: Обложка - МОБИЛЬНАЯ ВЕРСИЯ */
.cover-content {
    height: 100vh;
    position: relative;
    overflow: hidden;
    padding: 1rem;
}

.photo-collage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 8px;
    padding: 1rem;
}

.collage-item {
    background: var(--light-pink);
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid white;
    box-shadow: var(--shadow);
}

.collage-item.large {
    grid-row: 1 / span 2;
}

.collage-item.medium {
    grid-row: 3;
}

.collage-item.small {
    grid-row: 4;
}

.cover-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: rgba(255, 255, 255, 0.95);
    padding: 1.5rem;
    border-radius: 15px;
    backdrop-filter: blur(5px);
    box-shadow: var(--shadow);
    width: 90%;
    max-width: 300px;
}

.cover-title h1 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--text-color);
    margin-bottom: 0.8rem;
    font-weight: 600;
    line-height: 1.2;
}

.cover-title .subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    color: var(--accent-pink);
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.cover-title .cover-date {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.8rem;
    color: var(--text-color);
    opacity: 0.8;
    letter-spacing: 1px;
}

/* Страница 2: Поздравление - МОБИЛЬНАЯ ВЕРСИЯ */
.two-column-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.photo-column .photo-frame {
    background: white;
    padding: 15px;
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.photo-placeholder {
    height: 300px;
    background: var(--light-pink);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    position: relative;
}

.photo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
    border-radius: 12px;
    font-size: 0.9rem;
}

.photo-placeholder:hover .photo-overlay {
    opacity: 1;
}

.text-column h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
    color: var(--text-color);
    text-align: center;
}

.lead {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
    color: var(--text-color);
    line-height: 1.6;
    text-align: center;
}

.highlight-box {
    background: var(--light-pink);
    padding: 1.2rem;
    border-left: 4px solid var(--accent-pink);
    margin: 1.2rem 0;
    border-radius: 0 10px 10px 0;
    font-size: 0.95rem;
}

.text-column p {
    margin-bottom: 1rem;
    text-align: justify;
}

/* Страница 3: Семейные воспоминания */
.memories-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.memory-item {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.memory-item:hover {
    transform: translateY(-3px);
}

.memory-photo {
    height: 180px;
    background: var(--light-pink);
    background-size: cover;
    background-position: center;
}

.memory-text {
    padding: 1.2rem;
}

.memory-text h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

/* Страница 4: Имя Варя */
.name-acrostic {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2rem;
}

.letter-block {
    text-align: center;
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.letter-block:hover {
    transform: scale(1.02);
}

.letter {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    color: var(--accent-pink);
    margin-bottom: 0.8rem;
    font-weight: 600;
}

.letter-meaning {
    font-size: 1rem;
    color: var(--text-color);
    line-height: 1.4;
}

.name-photos {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.name-photo {
    height: 220px;
    background: var(--light-pink);
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    box-shadow: var(--shadow);
}

/* Страница 5: Разыскивается */
.wanted-poster {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    border: 3px solid var(--accent-pink);
}

.wanted-header {
    text-align: center;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--accent-pink);
    padding-bottom: 1rem;
}

.wanted-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--text-color);
    margin-bottom: 0.5rem;
}

.wanted-header h2 {
    font-size: 1.1rem;
    color: var(--accent-pink);
    margin-bottom: 0.3rem;
}

.wanted-header h3 {
    font-size: 1rem;
    color: var(--text-color);
    font-weight: 600;
}

.wanted-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.wanted-photo {
    height: 250px;
    background: var(--light-pink);
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    position: relative;
    border: 2px dashed var(--accent-pink);
}

.photo-label {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 0.5rem;
    font-size: 0.8rem;
}

.wanted-details h4 {
    font-size: 1.1rem;
    color: var(--accent-pink);
    margin-bottom: 1rem;
    text-align: center;
}

.details-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
}

.detail-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--light-pink);
}

.detail-item .label {
    font-weight: 600;
    color: var(--text-color);
}

.detail-item .value {
    color: var(--text-color);
}

.wanted-reward {
    text-align: center;
    background: var(--light-pink);
    padding: 1rem;
    border-radius: 8px;
    font-weight: 600;
}

/* Страница 6: Дружба */
.friendship-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.friendship-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.friendship-text h3 {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--accent-pink);
    font-style: italic;
}

.friendship-quote {
    text-align: center;
    margin-bottom: 1.5rem;
    padding: 1.2rem;
    background: white;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.friendship-quote p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.friendship-description {
    text-align: center;
    font-size: 0.95rem;
}

.friendship-photos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.friendship-photo {
    height: 200px;
    background: var(--light-pink);
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    box-shadow: var(--shadow);
}

.friendship-photo.main {
    height: 250px;
}

/* Страница 7: Значение имени */
.meaning-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.meaning-header {
    text-align: center;
}

.meaning-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    color: var(--text-color);
    margin-bottom: 0.5rem;
}

.name-subtitle {
    font-size: 1.1rem;
    color: var(--accent-pink);
    font-style: italic;
}

.meaning-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.meaning-text p {
    margin-bottom: 1.2rem;
    text-align: justify;
}

.meaning-highlight {
    background: var(--light-pink);
    padding: 1.2rem;
    border-radius: 10px;
    margin: 1.2rem 0;
    border-left: 4px solid var(--accent-pink);
}

.meaning-photo {
    height: 280px;
    background: var(--light-pink);
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    position: relative;
    box-shadow: var(--shadow);
}

.photo-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 0.8rem;
    text-align: center;
    font-size: 0.9rem;
}

/* Страница 8: Дом */
.home-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.home-photo {
    height: 250px;
    background: var(--light-pink);
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    box-shadow: var(--shadow);
}

.home-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.home-text h3 {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--accent-pink);
    font-style: italic;
}

.home-quote {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    box-shadow: var(--shadow);
    text-align: center;
    font-style: italic;
}

.home-message {
    text-align: center;
    font-size: 0.95rem;
}

/* Страница 9: Глаза */
.eyes-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.eyes-photo {
    height: 300px;
    background: var(--light-pink);
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    position: relative;
    box-shadow: var(--shadow);
    overflow: hidden;
}

.eyes-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(232,180,188,0.2), rgba(248,215,218,0.1));
}

.eyes-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

.eyes-description p {
    margin-bottom: 1.2rem;
    text-align: justify;
}

/* Страница 10: Поиск Google */
.google-layout {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
}

.google-header {
    text-align: center;
    margin-bottom: 2rem;
}

.google-logo {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #4285f4;
    font-weight: 600;
}

.search-container {
    margin-bottom: 2rem;
}

.search-box {
    display: flex;
    align-items: center;
    border: 2px solid #dfe1e5;
    border-radius: 24px;
    padding: 0.8rem 1.2rem;
    margin-bottom: 1rem;
    background: white;
}

.search-icon {
    margin-right: 1rem;
    font-size: 1.1rem;
}

.search-query {
    font-size: 1rem;
    color: var(--text-color);
}

.search-btn {
    width: 100%;
    background: #4285f4;
    color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
}

.search-btn:hover {
    background: #3367d6;
}

.search-results {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.result-item {
    padding: 1rem;
    border-radius: 8px;
    background: #f8f9fa;
}

.result-item.featured {
    background: var(--light-pink);
    border-left: 4px solid var(--accent-pink);
}

.result-title {
    font-size: 1.1rem;
    color: #1a0dab;
    margin-bottom: 0.3rem;
    font-weight: 500;
}

.result-url {
    font-size: 0.8rem;
    color: #006621;
    margin-bottom: 0.5rem;
}

.result-desc {
    font-size: 0.9rem;
    color: var(--text-color);
}

.photos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-top: 1rem;
}

.google-photo {
    height: 80px;
    background: var(--light-pink);
    border-radius: 8px;
    background-size: cover;
    background-position: center;
}

/* Страница 11: Характер */
.character-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.character-header {
    text-align: center;
}

.character-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--text-color);
    margin-bottom: 0.5rem;
}

.character-subtitle {
    font-size: 1.1rem;
    color: var(--accent-pink);
    font-style: italic;
}

.character-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.character-photos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.character-photo {
    height: 200px;
    background: var(--light-pink);
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    box-shadow: var(--shadow);
}

.character-photo.main {
    height: 250px;
}

.character-traits {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.trait-category {
    background: white;
    padding: 1.2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.trait-category h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    color: var(--text-color);
}

.trait-category ul {
    list-style: none;
    padding-left: 0;
}

.trait-category li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--light-pink);
    position: relative;
    padding-left: 1.5rem;
}

.trait-category li:before {
    content: "•";
    color: var(--accent-pink);
    position: absolute;
    left: 0;
    font-size: 1.2rem;
}

.trait-category li:last-child {
    border-bottom: none;
}

.character-footer {
    text-align: center;
    margin-top: 2rem;
}

.final-message {
    background: white;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: var(--shadow);
}

.final-message h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--accent-pink);
    margin-bottom: 1rem;
}

/* Навигационные стрелки - МОБИЛЬНАЯ ВЕРСИЯ */
.page-nav {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: rgba(255, 255, 255, 0.95);
    padding: 0.8rem;
    border-radius: 25px;
    box-shadow: var(--shadow);
    z-index: 100;
}

.nav-arrow {
    width: 40px;
    height: 40px;
    border: none;
    background: var(--accent-pink);
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-arrow:hover {
    transform: scale(1.1);
    background: var(--dark-pink);
}

.page-indicator {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.8rem;
    color: var(--text-color);
    white-space: nowrap;
}

/* Кнопка вверх */
.scroll-top-btn {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    width: 40px;
    height: 40px;
    background: var(--accent-pink);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.1rem;
    transition: var(--transition);
    z-index: 100;
    display: none;
}

.scroll-top-btn:hover {
    background: var(--dark-pink);
    transform: scale(1.1);
}

/* Анимации */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.magazine-page.active {
    animation: fadeIn 0.5s ease;
}

/* Планшетная версия */
@media (min-width: 768px) {
    body {
        font-size: 17px;
    }
    
    .nav-content {
        padding: 0 2rem;
    }
    
    .nav-logo {
        font-size: 1.1rem;
    }
    
    .mobile-menu-btn {
        display: none;
    }
    
    .nav-menu {
        display: flex;
        position: static;
        flex-direction: row;
        background: transparent;
        backdrop-filter: none;
        padding: 0;
        max-height: none;
        overflow-y: visible;
        width: auto;
    }
    
    .nav-btn {
        padding: 0.5rem 1rem;
        text-align: center;
        margin: 0;
        font-size: 0.8rem;
    }
    
    .magazine-container {
        margin: 70px auto 0;
    }
    
    .page-content {
        padding: 2rem;
    }
    
    .cover-title {
        padding: 2rem;
        max-width: 400px;
    }
    
    .cover-title h1 {
        font-size: 2.2rem;
    }
    
    .two-column-layout {
        flex-direction: row;
        gap: 2.5rem;
    }
    
    .photo-column, .text-column {
        flex: 1;
    }
    
    .photo-placeholder {
        height: 400px;
    }
    
    .memories-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .name-acrostic {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .name-photos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .wanted-content {
        flex-direction: row;
    }
    
    .friendship-layout {
        flex-direction: row;
    }
    
    .friendship-photos {
        flex: 1;
    }
    
    .friendship-text {
        flex: 1;
    }
    
    .meaning-content {
        flex-direction: row;
    }
    
    .home-layout {
        flex-direction: row;
    }
    
    .eyes-layout {
        flex-direction: row;
    }
    
    .character-content {
        flex-direction: row;
    }
    
    .character-photos {
        flex: 1;
    }
    
    .character-traits {
        flex: 1;
    }
}

/* Десктопная версия */
@media (min-width: 1024px) {
    .nav-content {
        max-width: 1200px;
    }
    
    .page-content {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .cover-title h1 {
        font-size: 2.8rem;
    }
    
    .cover-title .subtitle {
        font-size: 2rem;
    }
    
    .photo-collage {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    
    .collage-item.large {
        grid-column: 1;
        grid-row: 1 / span 2;
    }
    
    .collage-item.medium {
        grid-column: 2;
        grid-row: 2;
    }
    
    .collage-item.small {
        grid-column: 2;
        grid-row: 1;
    }
    
    .memories-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .name-acrostic {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Очень маленькие экраны */
@media (max-width: 360px) {
    body {
        font-size: 15px;
    }
    
    .nav-content {
        padding: 0 0.8rem;
    }
    
    .nav-logo {
        font-size: 0.9rem;
    }
    
    .page-content {
        padding: 1rem 0.8rem;
    }
    
    .cover-title {
        padding: 1.2rem;
    }
    
    .cover-title h1 {
        font-size: 1.6rem;
    }
    
    .cover-title .subtitle {
        font-size: 1.3rem;
    }
    
    .page-nav {
        bottom: 0.8rem;
        right: 0.8rem;
        padding: 0.6rem;
    }
    
    .nav-arrow {
        width: 35px;
        height: 35px;
        font-size: 1rem;
    }
    
    .scroll-top-btn {
        bottom: 0.8rem;
        left: 0.8rem;
        width: 35px;
        height: 35px;
        font-size: 1rem;
    }
}
/* QR-код стили */
.qrcode-floating-btn {
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    width: 50px;
    height: 50px;
    background: var(--accent-pink);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    z-index: 100;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.qrcode-floating-btn:hover {
    background: var(--dark-pink);
    transform: scale(1.1);
}

.qrcode-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 1000;
    animation: fadeIn 0.3s ease;
}

.qrcode-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    max-width: 300px;
    width: 90%;
    box-shadow: var(--shadow);
}

.qrcode-close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
}

.qrcode-content h3 {
    margin-bottom: 1rem;
    color: var(--text-color);
    font-family: 'Playfair Display', serif;
}

.qrcode-image {
    margin: 1rem 0;
    padding: 1rem;
    background: var(--light-pink);
    border-radius: 10px;
}

.qrcode-placeholder {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border: 2px dashed var(--accent-pink);
    border-radius: 8px;
    color: var(--text-color);
}

.qrcode-text {
    margin: 1rem 0;
    color: var(--text-color);
}

.qrcode-btn {
    background: var(--accent-pink);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    transition: var(--transition);
}

.qrcode-btn:hover {
    background: var(--dark-pink);
}
