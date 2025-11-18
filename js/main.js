/**
 * BANCO DE DADOS MOCKADO (Simulação)
 */
const db = {
    projetos: [
        { id: 1, titulo: "Educação Tech", desc: "Aulas de programação.", img: "https://via.placeholder.com/400x200", cat: "Educação" },
        { id: 2, titulo: "Horta Urbana", desc: "Alimentação sustentável.", img: "https://via.placeholder.com/400x200", cat: "Sustentabilidade" },
        { id: 3, titulo: "Apoio Legal", desc: "Consultoria jurídica.", img: "https://via.placeholder.com/400x200", cat: "Social" }
    ]
};

/**
 * 1. SISTEMA DE TEMPLATES (Views)
 * Retornam strings de HTML baseadas em dados.
 */
const Templates = {
    home: () => `
        <section class="hero-section">
            <div class="container">
                <h1>Juntos Transformamos<br>Realidades</h1>
                <p>Bem-vindo à nossa plataforma SPA interativa.</p>
                <a href="#voluntariado" class="btn btn-primary">Seja Voluntário</a>
            </div>
        </section>
        <section class="section-padrao container">
            <h2>Destaques</h2>
            <div class="grid-12">${Templates._renderProjetos(db.projetos.slice(0,2))}</div>
        </section>
    `,

    projetos: () => `
        <section class="section-padrao container">
            <h2>Nossos Projetos</h2>
            <div class="grid-12">${Templates._renderProjetos(db.projetos)}</div>
        </section>
    `,

    // Helper interno para renderizar cards (Reutilização de código)
    _renderProjetos: (lista) => lista.map(p => `
        <div class="col-4 card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <img src="${p.img}" alt="${p.titulo}" style="width: 100%;">
            <div style="padding: 20px;">
                <span class="tag">${p.cat}</span>
                <h3>${p.titulo}</h3>
                <p>${p.desc}</p>
                <button class="btn btn-primary" style="width: 100%">Ver Detalhes</button>
            </div>
        </div>
    `).join(''),

    voluntariado: () => `
        <section class="section-padrao container">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                <h2>Cadastro de Voluntário</h2>
                <p>Preencha seus dados para se juntar a nós.</p>
                
                <form id="form-voluntario" novalidate>
                    <div style="margin-bottom: 15px;">
                        <label>Nome Completo</label>
                        <input type="text" id="nome" class="input-padrao" placeholder="Min. 3 caracteres">
                        <span class="msg-erro" style="color: var(--cor-erro); font-size: 0.8rem; display: none;">Nome muito curto.</span>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <label>E-mail</label>
                        <input type="email" id="email" class="input-padrao" placeholder="exemplo@email.com">
                        <span class="msg-erro" style="color: var(--cor-erro); font-size: 0.8rem; display: none;">E-mail inválido.</span>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <label>Senha</label>
                        <input type="password" id="senha" class="input-padrao" placeholder="Min. 6 caracteres">
                    </div>

                    <div style="margin-bottom: 15px;">
                        <label>Confirmar Senha</label>
                        <input type="password" id="confirmaSenha" class="input-padrao">
                        <span class="msg-erro" style="color: var(--cor-erro); font-size: 0.8rem; display: none;">Senhas não conferem.</span>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width: 100%;">Enviar Cadastro</button>
                </form>
            </div>
        </section>
    `,

    blog: () => `<div class="container section-padrao"><h2>Blog</h2><p>Área de notícias (Em construção)...</p></div>`,
    doacao: () => `<div class="container section-padrao"><h2>Doe Agora</h2><p>Sistema de doação (Em construção)...</p></div>`,
    erro: () => `<div class="container section-padrao"><h2 style="color: red">404 - Página não encontrada</h2></div>`
};

/**
 * 2. ROUTER (SPA)
 * Controla a navegação sem recarregar.
 */
const Router = {
    init: () => {
        window.addEventListener('hashchange', Router.handleLocation);
        window.addEventListener('load', Router.handleLocation);
        Router.handleLocation();
    },

    handleLocation: () => {
        const app = document.getElementById('app');
        // Pega o hash da URL (ex: #projetos) ou define #home como padrão
        const hash = window.location.hash || '#home';
        const routeName = hash.slice(1); // remove o #

        // Procura o template correspondente
        const renderFunction = Templates[routeName] || Templates.erro;
        
        // Injeta o HTML no DOM
        app.innerHTML = renderFunction();

        // Ativa scripts específicos da página (ex: validação de formulário)
        if (routeName === 'voluntariado') {
            Validation.init();
        }

        // Atualiza Menu Ativo
        Router.updateActiveMenu(hash);
    },

    updateActiveMenu: (hash) => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = link.getAttribute('href') === hash ? 'var(--cor-primaria-main)' : 'inherit';
        });
    }
};

/**
 * 3. VALIDAÇÃO DE FORMULÁRIOS & FEEDBACK
 * Verifica consistência dos dados e alerta o usuário.
 */
const Validation = {
    init: () => {
        const form = document.getElementById('form-voluntario');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (Validation.checkForm()) {
                Feedback.show('Cadastro realizado com sucesso!', 'sucesso');
                // Aqui salvaríamos no localStorage
                form.reset();
            } else {
                Feedback.show('Verifique os erros no formulário.', 'erro');
            }
        });

        // Validação em tempo real (Input Event)
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => Validation.validateField(input));
        });
    },

    checkForm: () => {
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const senha = document.getElementById('senha');
        const confirma = document.getElementById('confirmaSenha');

        let isValid = true;

        if (!Validation.validateField(nome)) isValid = false;
        if (!Validation.validateField(email)) isValid = false;
        
        // Validação Cruzada (Consistência)
        if (senha.value !== confirma.value || senha.value.length < 6) {
            Validation.setError(confirma, true);
            isValid = false;
        } else {
            Validation.setError(confirma, false);
        }

        return isValid;
    },

    validateField: (input) => {
        let error = false;

        if (input.id === 'nome' && input.value.trim().length < 3) error = true;
        if (input.id === 'email' && !/\S+@\S+\.\S+/.test(input.value)) error = true;

        Validation.setError(input, error);
        return !error;
    },

    setError: (input, isError) => {
        const span = input.nextElementSibling; // Pega o span.msg-erro
        if (isError) {
            input.style.borderColor = 'var(--cor-erro)';
            if (span) span.style.display = 'block';
        } else {
            input.style.borderColor = '#ccc';
            if (span) span.style.display = 'none';
        }
    }
};

/**
 * 4. COMPONENTE DE FEEDBACK (TOAST)
 */
const Feedback = {
    show: (msg, tipo) => {
        const toast = document.getElementById('toast-box');
        toast.innerText = msg;
        toast.style.backgroundColor = tipo === 'erro' ? 'var(--cor-erro)' : 'var(--cor-sucesso)';
        toast.className = "toast show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    }
};

// Inicializa o Router quando o script carrega
Router.init();

// Menu Mobile (Lógica simples)
const btnMobile = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');
if(btnMobile) {
    btnMobile.addEventListener('click', () => {
        navList.classList.toggle('active'); // Você precisará adicionar o CSS do menu ativo da aula anterior
    });
}