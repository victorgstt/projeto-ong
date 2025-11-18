const containerProjetos = document.getElementById('lista-projetos');

function criarCardProjeto(projeto) {
  return `
    <article class="card-projeto" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
      <div class="img-wrapper" style="height: 200px; overflow: hidden;">
        <img src="${projeto.imagem}" alt="${projeto.titulo}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="conteudo-card" style="padding: 20px;">
        <h3 style="color: var(--cor-primaria); margin-bottom: 10px;">${projeto.titulo}</h3>
        <p style="margin-bottom: 15px; font-size: 0.9rem;">${projeto.descricao}</p>
        <a href="${projeto.link}" class="cta-button" style="font-size: 0.8rem; padding: 8px 15px;">Saiba Mais</a>
      </div>
    </article>
    <img 
     src="${projeto.imagem}" 
     alt="${projeto.titulo}" 
     loading="lazy"       width="300"          height="200"
     style="...">
  `;
}

function carregarProjetos() {
  if (containerProjetos) {
    const cardsHTML = projetosData.map((projeto) => {
      return criarCardProjeto(projeto);
    });


    containerProjetos.innerHTML = cardsHTML.join('');
    
    containerProjetos.style.display = 'grid';
    containerProjetos.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    containerProjetos.style.gap = '20px';
    containerProjetos.style.marginTop = '20px';
  }
}

document.addEventListener('DOMContentLoaded', carregarProjetos);

// --- LÓGICA DO MENU MOBILE ---
const btnMobile = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

if (btnMobile) {
  btnMobile.addEventListener('click', () => {
    navList.classList.toggle('active');
    btnMobile.classList.toggle('active'); 
  });
}