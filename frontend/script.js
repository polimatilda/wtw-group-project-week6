const wtw = function () {
    return `
      <div id="preLoader"><img src="img/circ.svg"><div id="number">100</div></div>
      <header class="header">
          <div class="logo">
          <img src="img/WTW.svg" alt="WTW-logo"  width="68px" height="21.83px">
          </div>
          <div class="menu">
              <ul>
                  <li><a href="#questions"><h2 calss="left-line">Questions</h2></a></li>
                  <li><a href="#ask"><h2 calss="left-line">Ask</h2></a></li>
                  <li><a href="#about"><h2 calss="left-line">About</h2></a></li>
                  <li><a href="#instagram"><h2 calss="left-line">Instagram</h2></a></li>
              </ul>       
          </div>
      </header>
          <main class="content">
              <div class="leftlogo outer"><img src="img/circ.svg"></div>
              <div class="wtwtext-container">
                  <div><span class="women1">Women</span></div>
                  <div><span class="tell"><em>Tell</em></span></div>
                  <div><span class="women2">Women</span></div>
              </div>
              <div class="rightlogo"><img src="img/circ.svg"></div>
              <div class="underlogo-text"><p>Women Tell Women is a digital platform offering career advice to women who aim to build a healthy relationship with work. No pressure, just insightful reflections & thoughts to help you thrive, delivered by inspiring female professionals from all over the world.</p></div>
              
              <div class="questions">
              <h1>How to be a leader when you don’t feel like one?<span class="arrow">&#8594;</span></h1>
              <h1>When do you know you’re on the right path?<span class="arrow">&#8594;</span></h1>
              <h1>How to stop comparing your career?<span class="arrow">&#8594;</span></h1>
              <h1>Is success really the final goal?<span class="arrow">&#8594;</span></h1>
              <h1>When to quit?<span class="arrow">&#8594;</span></h1>
              <h1>How to tackle impostor syndrome?<span class="arrow">&#8594;</span></h1>
             
              
              </div>
              </main>
              `;
  };
  
  const rootElement = document.querySelector("#root");
  
  rootElement.insertAdjacentHTML("beforeend", wtw());
  
  const faders = document.querySelectorAll("h1");
  
  const appearOptions = {
      treshold: 1,
   };
  
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
     entries.forEach(entry => {
         if (!entry.isIntersecting) {
             return;
         } else {
             entry.target.classList.add("onScroll");
             appearOnScroll.unobserve(entry.target);
         }
  
     })
  }, appearOptions);
  
  
  faders.forEach(fader => {
     appearOnScroll.observe(fader);
  })
  
  let number = document.getElementById("number");
  let counter = 0;
  setInterval(() => {
      if(counter === 100){
          clearInterval();
      } else {
          counter += 1;
          number.innerHTML = counter + "%";
      }
  }, 10)
  
  
  window.addEventListener("load", function() {
      const loader = document.getElementById("preLoader");
      setTimeout(function() {loader.classList.add("loaded")}, 2000);
  });