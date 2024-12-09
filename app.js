document.addEventListener('DOMContentLoaded', function () {
    const skillsGrid = document.querySelector('.skills-grid');
    const skills = Array.from(document.querySelectorAll('.skill'));

    // Clone the skills dynamically for infinite scrolling
    const totalClones = Math.ceil(window.innerWidth / skillsGrid.offsetWidth) + 1; // Ensure enough clones for full coverage
    for (let i = 0; i < totalClones; i++) {
        skills.forEach(skill => {
            const clone = skill.cloneNode(true);
            skillsGrid.appendChild(clone);
        });
    }
});
// for sidebar
function showSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}
function hideSidebar(){
  const sidebar= document.querySelector('.sidebar')
    sidebar.style.display ='none'
}
