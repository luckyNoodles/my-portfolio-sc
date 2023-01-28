const projects = [
    {
        preview: 'URL',
        title: 'project',
        stackUsed: 'JavaScript, React, HTML, CSS, SASS,', 
        description: 'lorem',
        preview: 'URL',
        code: 'URL'
    },
    {
        preview: 'URL',
        title: 'project',
        stackUsed: 'JavaScript, React, HTML, CSS, SASS,',
        description: 'lorem',
        preview: 'URL',
        code: 'URL'
    },
    {
        preview: 'URL',
        title: 'project',
        stackUsed: 'JavaScript, React, HTML, CSS, SASS,', 
        description: 'lorem',
        preview: 'URL',
        code: 'URL'
    }
]

const displayProjects = () => {
    console.log('display projects');
    
    projects.forEach((project) => {
        const latest = document.querySelector('.latest');

        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
        latest.appendChild(projectContainer);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imgContainer');
        projectContainer.appendChild(imageContainer);

        const projectImage = document.createElement('img');
        projectImage.setAttribute('src',project.preview);
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
        projectInfo.appendChild(projectStack);
        
        const projectDescription = document.createElement('p');
        projectDescription.innerText = project.description;
        projectInfo.appendChild(projectDescription);

        const linkButtons = document.createElement('div');
        linkButtons.classList.add('linkButton');
        projectContainer.appendChild(linkButtons);

        const projectLive = document.createElement('a');
        projectLive.setAttribute('href', project.preview);
        projectLive.innerText = 'View Live';
        linkButtons.appendChild(projectLive);

        const projectCode = document.createElement('a');
        projectCode.setAttribute('href', project.code)
        projectCode.innerText = 'View Code';
        linkButtons.appendChild(projectCode);

    })
}

displayProjects();

           