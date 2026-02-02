// Smooth scroll for scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Add scroll-based animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections except landing
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Hide scroll indicator when scrolling down
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollIndicator) {
            if (scrollTop > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }
        
        lastScrollTop = scrollTop;
    });

    // Add active state to timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        timelineObserver.observe(item);
    });

    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        projectObserver.observe(card);
    });

    // Add click handler for GitHub link placeholder
    const githubLinks = document.querySelectorAll('.github-link');
    githubLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('GitHub repository will be made public soon. Stay tuned!');
        });
    });
});

// Add parallax effect to landing section (optional)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const landingContent = document.querySelector('.landing-content');
    
    if (landingContent && scrolled < window.innerHeight) {
        landingContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        landingContent.style.opacity = 1 - (scrolled / window.innerHeight) * 1.5;
    }
});
