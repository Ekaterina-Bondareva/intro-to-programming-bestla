const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Ekaterina Bondareva ${thisYear}`;

footer.appendChild(copyright);

const skills = ['JavaScript', 'HTML', 'CSS', 'SQL'];

const skillsSection = document.getElementById('skills');

skillsList = skillsSection.querySelector('ul'); //???

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li'); 
    skill.innerHTML = `${skills[i]}`;
    skillsList.appendChild(skill);
}