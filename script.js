const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true,
  });
  
//   sr.reveal('.logo-container', { delay: 200, origin: 'left' });
//   sr.reveal('.header-buttons', { delay: 200, origin: 'top' });
  sr.reveal('#imagem-home', { delay: 200, origin: 'right' });
  sr.reveal('.home-text', { delay: 200, origin: 'left' });
  sr.reveal('.stat-box', { delay: 300, origin: 'top' });
    
  // Contadores
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+', ''); // Remove o "+" para fazer a conversão para número
      const increment = (target - count) / 20;
  
      if (count < target) {
        counter.innerText = '+' + Math.ceil(Math.min(count + increment, target));
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = '+' + target;
      }
    };
  
    updateCounter();
  });
  
  // Typewriter
  const typewriterText = ["Editor de Vídeo", "Entusiasta Front-End", "Engenheiro da Computação", "Designer Gráfico"];
  let currentText = '';
  let letterCount = 0;
  let currentIndex = 0;
  let isDeleting = false;
  let pauseTime = 200; // Ajustar conforme necessário para a velocidade de digitação
  
  function typeWriter() {
    if (currentIndex === typewriterText.length) {
      currentIndex = 0;
    }
    currentText = typewriterText[currentIndex];
  
    if (isDeleting) {
      // Remover letra mais rapidamente
      letterCount--;
      pauseTime = 60; // Aumentar a velocidade de remoção
    } else {
      // Adicionar letra
      letterCount++;
      pauseTime = 120; // Velocidade de digitação
    }
  
    let part = currentText.slice(0, letterCount);
    document.querySelector(".typewriter-text").innerHTML = part + '<span class="cursor">|</span>';
  
    if (!isDeleting && part.length === currentText.length) {
      // Pausa após terminar de escrever
      pauseTime = 700; // Pausa para leitura
      isDeleting = true; // Começa a deletar o texto
    } else if (isDeleting && part.length === 0) {
      isDeleting = false; // Volta a escrever o texto
      currentIndex++;
      pauseTime = 200; // Pausa antes de começar a escrever o próximo texto
    }
  
    setTimeout(typeWriter, pauseTime);
  }
  
  // Iniciar a animação
  typeWriter();
  
  //Planos
//Planos
document.addEventListener('DOMContentLoaded', () => {
  const basicPlan = document.getElementById('basicPlan');
  const premiumPlan = document.getElementById('premiumPlan');
  const background = document.querySelector('.plan-selector .background');
  const prices = document.querySelectorAll('.price');

  basicPlan.addEventListener('click', function() {
      selectPlan('basic');
  });

  premiumPlan.addEventListener('click', function() {
      selectPlan('premium');
  });

  function selectPlan(plan) {
      const isBasic = plan === 'basic';
      background.style.left = isBasic ? '0%' : '50%';
      background.style.backgroundColor = isBasic ? '#30cc9d' : '#ffcc71';
      
      // Atualiza as cores do texto dos botões de plano
      basicPlan.style.color = isBasic ? '#fff' : '#333'; // Texto do plano Básico
      premiumPlan.style.color = isBasic ? '#333' : '#333'; // Texto do plano Premium

      prices.forEach(price => {
          const basicPrice = price.getAttribute('data-basic');
          const premiumPrice = (parseFloat(basicPrice) * 2).toFixed(2);
          const newPrice = isBasic ? `R$${basicPrice}` : `R$${premiumPrice}`;
          animatePriceChange(price, newPrice);
      });
  }

  function animatePriceChange(priceElement, newPrice) {
      let currentValue = parseFloat(priceElement.textContent.replace('R$', '').replace(',', '.'));
      newPrice = parseFloat(newPrice.replace('R$', '').replace(',', '.'));
      const difference = Math.abs(newPrice - currentValue);
      let increment = difference > 1 ? (newPrice - currentValue) / 80 : (newPrice > currentValue ? 0.05 : -0.05);

      const updatePrice = () => {
          currentValue += increment;
          if ((increment > 0 && currentValue < newPrice) || (increment < 0 && currentValue > newPrice)) {
              priceElement.textContent = `R$${currentValue.toFixed(2)}`;
              requestAnimationFrame(updatePrice);
          } else {
              priceElement.textContent = `R$${newPrice.toFixed(2)}`;
          }
      };

      updatePrice();
  }

  // Initialize with basic plan selected
  selectPlan('basic');
});

