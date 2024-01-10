const aboutMeBtn = document.getElementById('aboutMeButton')
const projectsBtn = document.getElementById('projectsButton')
const contactBtn = document.getElementById('contactButton')
const buttonsDiv = document.getElementById('buttons')
const sectionAboutMe = document.getElementById('sectionAboutMe')
const closeSection = document.getElementById('closeSection')

aboutMeBtn.addEventListener('click', function(){
    if(buttonsDiv.style.display === 'flex'){
        buttonsDiv.style.display = 'none'
        sectionAboutMe.style.display = 'flex'
        sectionAboutMe.classList.add('active');
    }else{
        buttonsDiv.style.display = 'flex'
        sectionAboutMe.classList.remove('active');
    }
})

closeSection.addEventListener('click', function(){
    if(sectionAboutMe.style.display === 'flex'){
        sectionAboutMe.style.display = 'none'
        buttonsDiv.style.display = 'flex'
        sectionAboutMe.classList.remove('active');
    }else{
        sectionAboutMe.style.display ='flex'
        sectionAboutMe.classList.add('active');


    }
})