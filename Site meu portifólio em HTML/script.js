// Função para scroll suave ao clicar nos links do menu
function handleSmoothScroll(e) {
    e.preventDefault();
    // Obter o href do link (ex: "#Sobre-mim") e remover o caractere "#"
    const id = this.getAttribute('href').substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Adiciona o evento a todos os links do menu
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleSmoothScroll);
  });
  
  // Atualiza o ano atual no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();
  