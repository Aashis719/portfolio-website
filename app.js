  // sticky nav bar
  const navbar = document.getElementById("nav");

  // Get the navbar's initial position
  const navOffset = navbar.offsetTop;
  
  window.addEventListener("scroll", () => {
      // Check when scroll reaches navbar's position
      if (window.scrollY >= navOffset) {
          navbar.classList.add("sticky");
          if (document.body.classList.contains("theme-green")) {
            navbar.style.backgroundColor = "rgb(247, 231, 206)"; // Green theme navbar color
        } else if (document.body.classList.contains("theme-white")) {
            navbar.style.backgroundColor = "white"; // Black theme navbar color
        } else {
            navbar.style.backgroundColor = "black"; // Default sticky navbar color
        }
          
      } else {
          navbar.classList.remove("sticky");
          navbar.style.backgroundColor = "";
      }
  });
  
  
  // progress bar animation
  const targets = [75, 60, 55, 40, 50]; // Target percentages for each bar
          const bars = ['bar1', 'bar2', 'bar3', 'bar4', 'bar5'];
          const texts = ['text1', 'text2', 'text3', 'text4', 'text5'];
  
          // Function to animate each progress bar independently
          function animateProgressBar(barId, textId, targetPercentage) {
              let currentPercentage = 0;
              const progressBar = document.getElementById(barId);
              const percentageText = document.getElementById(textId);
  
              function animate() {
                  if (currentPercentage < targetPercentage) {
                      currentPercentage++;
                      progressBar.style.width = currentPercentage + "%";
                      percentageText.textContent = currentPercentage + "%";
                      setTimeout(animate, 10);
                  }
              }
  
              animate(); // Start animation immediately
          }
  
          // Trigger animation for all bars at once
          bars.forEach((bar, i) => animateProgressBar(bar, texts[i], targets[i]));
  
          // contact me walla
          document.getElementById('contactForm').addEventListener('submit', function(e) {
              e.preventDefault();
              const name = document.getElementById('name').value.trim();
              const email = document.getElementById('email').value.trim();
              const message = document.getElementById('message').value.trim();
  
              if (name && email && message) {
                  alert(`Thank you, ${name}! Your message has been sent.`);
                  document.getElementById('contactForm').reset();
              } else {
                  alert('Please fill in all fields before submitting.');
              }
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
                    boxhok.style.backgroundColor = ''; // Reset to default (or you can set it to a base color)
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
                      headimg.style.border="yellow";
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
  
  