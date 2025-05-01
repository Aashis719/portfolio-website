const navbar = document.getElementById("nav");


window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const workItems = document.querySelectorAll('.work-item');
  const modals = {
      'modal-tours': document.getElementById('modal-tours'),
      'modal-saas': document.getElementById('modal-saas'),
      'modal-ecommerce': document.getElementById('modal-ecommerce')
  };
  const closeButtons = document.querySelectorAll('.close-button');

  workItems.forEach(item => {
      item.addEventListener('click', function() {
          const modalId = this.dataset.modal;
          if (modals[modalId]) {
              modals[modalId].style.display = 'block';
          }
      });
  });

  closeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const modal = this.closest('.modal');
          if (modal) {
              modal.style.display = 'none';
          }
      });
  });

 
  window.addEventListener('click', function(event) {
      for (const modalId in modals) {
          if (modals[modalId] === event.target) {
              modals[modalId].style.display = 'none';
          }
      }
  });
});

  
  
          // Theme switcher
          const themeDots = document.querySelectorAll('.theme-dot');
          themeDots.forEach(dot => {
              dot.addEventListener('click', () => {
                  const color = dot.getAttribute('data-color');
                  const description=document.getElementById("des");
                  const navwalla=document.getElementsByClassName('nav');
                  const headwalla=document.getElementById('headimg');
                  const boxhokElements = document.getElementsByClassName('boxhok'); 
                  const educationWalla =document.getElementById('education')
                  const socialWalla= document.getElementsByClassName('top-social-links')
                  const navkoClassWalla=document.getElementsByClassName('navkoClass')


                  Array.from(boxhokElements).forEach(boxhok => {
                    boxhok.style.backgroundColor = ''; 
                    boxhok.querySelectorAll('p').forEach(p => p.style.setProperty('color', '', 'important'));
                    boxhok.querySelectorAll('h2').forEach(h2 => h2.style.setProperty('color', '', 'important'));
                    boxhok.querySelectorAll('h3').forEach(h3 => h3.style.setProperty('color', '', 'important'));
                });

                educationWalla.style.backgroundColor='';

                Array.from(socialWalla).forEach(socialWalla => {
                    socialWalla.querySelectorAll('i').forEach(i => i.style.setProperty('color', 'white', 'important'));
                });


                  if (color === 'white') {
                      document.body.style.backgroundColor = '#fff';
                      document.body.style.color = '#000';
                      des.style.color='#964B00';
                     
                      Array.from(navwalla).forEach(navwalla => navwalla.style.color = '#964B00');
                      educationWalla.style.backgroundColor='#1e1e2f'
                      Array.from(socialWalla).forEach(socialWalla => {
                        socialWalla.querySelectorAll('i').forEach(i => i.style.setProperty('color', '#2b2a2a', 'important'));
                    });
                    document.body.classList.add("theme-white");
                    document.body.classList.remove("theme-green");
                    document.body.classList.remove("theme-black");


                

                  } else if (color === 'green') {
                      document.body.style.backgroundColor = '#004f2f';
                      document.body.style.color = '#fff';
                      des.style.color='white';
                      Array.from(navwalla).forEach(navwalla => navwalla.style.color = 'white');
                      Array.from(boxhokElements).forEach(boxhok =>{
                        boxhok.style.backgroundColor = '#F7E7CE';
                        boxhok.querySelectorAll('p').forEach(p => p.style.setProperty('color', '#964B00', 'important'));
                        boxhok.querySelectorAll('h2').forEach(h2 => h2.style.setProperty('color', '#b28500', 'important'));
                        boxhok.querySelectorAll('h3').forEach(h3 => h3.style.setProperty('color', '#b28500', 'important'));
                    });
                    document.body.classList.add("theme-green");
                    document.body.classList.remove("theme-black");
                    document.body.classList.remove("theme-white");
                    
                    Array.from(navkoClassWalla).forEach(navkoClass => {
                        navkoClass.querySelectorAll('a').forEach(a => a.style.setProperty('color', 'rgb(222 156 1)', 'important'));
                    })

                   }
                  else if (color === 'black') {
                      document.body.style.backgroundColor = 'Black';
                      document.body.style.color = 'white';
                      des.style.color='#bbbbbb';
                      Array.from(navwalla).forEach(navwalla => navwalla.style.color = '#bbbbbb') ;
                      
                      document.body.classList.add("theme-black");
                    document.body.classList.remove("theme-green");
                    document.body.classList.remove("theme-white");
                  }
              });
          });
  
          // scroll up button 
         // Scroll progress bar
  window.addEventListener('scroll', function() {
      const scrollProgress = document.querySelector('.scroll-progress');
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
  
      scrollProgress.style.width = scrolled + '%';
  
      // Show up-arrow button when scrolling down
      const upArrow = document.querySelector('.up-arrow');
      if (window.scrollY > 100) {
          upArrow.classList.add('show');
      } else {
          upArrow.classList.remove('show');
      }
  });
  
  // Smooth scroll effect for the "Back to Top" button
  document.querySelector('.up-arrow').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  