// 1. CONFIGURAÇÃO E DADOS
const projetosData = [
  {
    id: 1,
    titulo: "Educação do Futuro",
    descricao: "Reforço escolar e inclusão digital para 50 crianças.",
    imagem: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60",
    categoria: "Educação"
  },
  {
    id: 2,
    titulo: "Horta Comunitária",
    descricao: "Plantio urbano e alimentação saudável para famílias.",
    imagem: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=500&auto=format&fit=crop&q=60",
    categoria: "Sustentabilidade"
  },
  {
    id: 3,
    titulo: "Apoio Jurídico",
    descricao: "Orientação legal gratuita para regularização de documentos.",
    imagem: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60",
    categoria: "Social"
  }
];

// 2. RENDERIZAÇÃO DE CARDS
const containerProjetos = document.getElementById('lista-projetos');

function criarCard(projeto) {
  // Usa classes do Grid System (col-4) e Design System (card, btn, tag)
  return `
    <article class="col-4" style="display: flex;">
      <div class="card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; flex-direction: column; width: 100%;">
        <div style="height: 200px; overflow: hidden;">
           <img src="${projeto.imagem}" alt="${projeto.titulo}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
        </div>
        <div style="padding: 24px; flex: 1; display: flex; flex-direction: column; align-items: start;">
          <span class="tag">${projeto.categoria}</span>
          <h3 style="margin-top: 8px; margin-bottom: 8px; color: var(--cor-primaria-main);">${projeto.titulo}</h3>
          <p style="flex: 1; font-size: var(--font-sm);">${projeto.descricao}</p>
          <a href="pages/projetos.html" class="btn btn-primary" style="margin-top: 16px; width: 100%;">Saiba Mais</a>
        </div>
      </div>
    </article>
  `;
}

function carregarProjetos() {
  if (containerProjetos) {
    const html = projetosData.map(criarCard).join('');
    containerProjetos.innerHTML = html;
  }
}

// 3. MENU MOBILE
const btnMobile = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

if (btnMobile) {
  btnMobile.addEventListener('click', () => {
    navList.classList.toggle('active');
    btnMobile.classList.toggle('active');
  });
}

// 4. SISTEMA DE FEEDBACK (TOAST)
window.mostrarFeedback = function(mensagem, tipo = 'sucesso') {
  const toast = document.getElementById("toast-box");
  if(!toast) return;

  toast.innerText = mensagem;
  toast.className = "toast show";
  
  if (tipo === 'erro') {
    toast.style.backgroundColor = "var(--cor-erro)";
  } else {
    toast.style.backgroundColor = "var(--cor-sucesso)";
  }

  setTimeout(function(){ 
    toast.className = toast.className.replace("show", ""); 
  }, 3500);
}

document.addEventListener('DOMContentLoaded', carregarProjetos);