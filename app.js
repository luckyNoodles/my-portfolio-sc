const navToggle = document.querySelector('.material-symbols-outlined');
const mainNav = document.querySelector('.topNav');

navToggle.addEventListener('click', function() {
 mainNav.classList.toggle('mobileNav')
})

const projects = [
    {
        preview: './images/news-app.png',
        title: 'Daily NYT Headlines',
        stackUsed: 'React, Sass, CSS Grid, HTML', 
        description: 'The goal of this project was to create a functional React app. CSS Grid and Flexbox were used for the layout and each content section is fetched from the NYT Headline API\'s.',
        live: 'https://daily-times-headlines.netlify.app/',
        code: 'https://github.com/luckyNoodles/my-portfolio-sc'
    },
    {
        preview: './images/project-2.png', 
        title: 'World Cup 2022',
        stackUsed: 'JavaScript, HTML, CSS, SASS', 
        description: 'The goal of this project was to create a dynamic stats website. The Fetch AJAX method is used to retrieve JSON data from an external source.',
        live: 'https://worldcup-app.netlify.app/',
        code: 'https://github.com/luckyNoodles/project-2/tree/main'
    },
    {
        preview: './images/psd-conversion2.png',
        title: 'Willow\'s Blog',
        stackUsed: 'HTML, CSS, SASS',
        description: 'The was a PSD conversion project using HTML, CSS and SASS. The website is fully responsive and compatible with all modern web browsers.',
        live: 'https://psdconversion-html-css.netlify.app/',
        code: 'https://github.com/luckyNoodles/scottCheung-assigment2'
    },
    {
        preview: './images/psd-conversion1.png',
        title: 'Galass Handbags',
        stackUsed: 'HTML, CSS', 
        description: 'The goal of this project was to convert a PSD (Photoshop) file into a static website that is responsive using only HTML and CSS.',
        live: 'https://psd-conversion1.netlify.app/',
        code: 'https://github.com/luckyNoodles/assignment-one-scott-cheung'
    }
    
]

const displayProjects = () => {
   
    projects.forEach((project) => {
        const latest = document.querySelector('.recent');

        if (latest !== null) {
            const projectContainer = document.createElement('div');
            projectContainer.classList.add('project');
            latest.appendChild(projectContainer);
    
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('imgContainer');
            projectContainer.appendChild(imageContainer);
    
            const projectImage = document.createElement('img');
            projectImage.setAttribute('src', project.preview);
            projectImage.setAttribute('alt','image of webpage');
            projectImage.classList.add('projectImg')
            imageContainer.appendChild(projectImage);
    
            const projectInfo = document.createElement('div');
            projectInfo.classList.add('projText');
            projectContainer.appendChild(projectInfo);
    
            const projectTitle = document.createElement('h3');
            projectTitle.innerText = project.title;
            projectInfo.appendChild(projectTitle);
    
            const projectStack = document.createElement('p');
            projectStack.innerText = project.stackUsed;
            projectStack.classList.add('stack');
            projectInfo.appendChild(projectStack);
            
            const projectDescription = document.createElement('p');
            projectDescription.innerText = project.description;
            projectDescription.classList.add('description');
            projectInfo.appendChild(projectDescription);
    
            const linkButtons = document.createElement('div');
            linkButtons.classList.add('linkButton');
            projectContainer.appendChild(linkButtons);
    
            const projectLive = document.createElement('a');
            projectLive.setAttribute('href', project.live);
            projectLive.innerText = 'View Live';
            linkButtons.appendChild(projectLive);
    
            const projectCode = document.createElement('a');
            projectCode.setAttribute('href', project.code)
            projectCode.innerText = 'View Code';
            linkButtons.appendChild(projectCode);

        } else return;
    })
}

displayProjects();

           