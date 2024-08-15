function changeAboutMe()
{
    const aboutMeText = ["Full Stack Web Developer","Programmer","Tech Enthusiast"];
    const typeSpeed = 100;
    const eraseSpeed = 50;
    const pauseSpeed = 1000;
    const aboutMeElement = document.querySelector('.about-me')

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type()
    {
        const currentText = aboutMeText[textIndex];
        if (!isDeleting && charIndex < currentText.length)
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typeSpeed);
        }
        else if (isDeleting && charIndex > 0)
        {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        }
        else 
        {
            isDeleting = !isDeleting;
            if (!isDeleting)
            {
                textIndex = (textIndex + 1) % aboutMeText.length;
            }
            setTimeout(type, pauseSpeed)
        }
    }
    type();
}

changeAboutMe();

document.addEventListener('DOMContentLoaded', function()
{
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body

    darkModeToggle.addEventListener('click', () => 
    {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('darkmode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('light-mode');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const progress = progressBar.getAttribute('data-progress') + '%';
                    progressBar.style.setProperty('--progress', progress);
                    progressBar.classList.add('animated');
                }
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    });
    
    const programmingLanguages = document.querySelectorAll('#languages .skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });
});


