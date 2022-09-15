const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `&copy Ekaterina Bondareva, ${thisYear}`;

footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'SQL', 'GIT'];

const skillsSection = document.getElementById('skills');

skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
}

const messageSection = document.getElementById('messages');

const messageForm = document.getElementsByName('leave_message');
messageForm.item(0).addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<div>
        <span class="strong">${message}</span>
        <p>from <a class="limk" href="mailto:${email}">${name}</a> &nbsp;</p>
        </div>`;


    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
        const messageList = messageSection.querySelector('ul');
        if (messageList.childElementCount == 0) {
            const messageSection = document.getElementById('messages');
            messageSection.style.display = "none"    
        }
    });

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);

    messageSection.style.display = "block"

    messageForm.item(0).reset();
});

// let githubRequest = new XMLHttpRequest();
// githubRequest.open('GET', 'https://api.github.com/users/Ekaterina-Bondareva/repos');
// githubRequest.send();

// githubRequest.addEventListener('load', (event) =>{
//     let repositories = JSON.parse(githubRequest.response);
//     console.log(repositories);
//     let projectSection = document.getElementById('projects');
//     let projectList = document.getElementById('projects').querySelector('ul');
//     for (let i = 0; i < repositories.length; i++) {
//         let project = document.createElement('li');
//         project.innerHTML = `<a class="link link--no-decor" href="${repositories[i].html_url}">${repositories[i].name}</a>`;
//         projectList.appendChild(project);
//     }
// })

fetchData();

function fetchData() {
    fetch('https://api.github.com/users/Ekaterina-Bondareva/repos')
        .then(res => res.json())
        .then(data => {
            let projectSection = document.getElementById('projects');
            let projectList = document.getElementById('projects').querySelector('ul');
            for (let i = 0; i < data.length; i++) {
                let project = document.createElement('li');
                project.innerHTML = `<a class="link link--no-decor" href="${data[i].html_url}">${data[i].name}</a>`;
                projectList.appendChild(project);
            }
        })
}