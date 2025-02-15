
        // Variável que armazena o índice da imagem atual
        let currentIndex = 0;
    
        // Seleciona todas as imagens com a classe 'slideshow'
        const images = document.querySelectorAll('.slideshow');
    
        // Função para mostrar a imagem com o índice especificado
        function showImage(index) {
            // Itera sobre as imagens e exibe a imagem correspondente ao índice
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none'; // Exibe ou esconde a imagem
            });
        }
    
        // Função para alternar para a próxima imagem
        function nextImage() {
            // Reseta a animação da imagem atual
            images[currentIndex].style.animation = '';
            
            // Atualiza o índice para a próxima imagem (circular)
            currentIndex = (currentIndex + 1) % images.length;
    
            // Verifica a largura da tela e aplica animação diferente dependendo do tamanho
            let animation = 'zoomEffect 3s ease-in-out'; // Animação padrão
            if (window.innerWidth < 400) {
                // Animação ainda mais reduzida para telas menores que 400px
                animation = 'zoomEffectTiny 3s ease-in-out';
            } else if (window.innerWidth < 800) {
                // Animação reduzida para telas menores que 800px
                animation = 'zoomEffectSmall 3s ease-in-out';
            }
    
            // Aplica a animação à imagem atual
            images[currentIndex].style.animation = animation;
    
            // Exibe a imagem atual
            showImage(currentIndex);
        }
    
        // Exibe a primeira imagem ao carregar a página
        showImage(currentIndex);
    
        // Configura o intervalo para trocar de imagem a cada 3 segundos
        setInterval(nextImage, 3000);

    
// ---------------------------------------- MENU HAMBURGUER INICIO ---------------------------------------------------

        // Função para alternar a visibilidade do menu ao clicar no botão de menu
        document.getElementById("menu-toggle").addEventListener("click", function() {
            var menu = document.getElementById("menu");
            // Adiciona ou remove a classe 'show' para mostrar ou esconder o menu
            menu.classList.toggle("show");

        });

// ---------------------------------------- MENU HAMBURGUER FIM ------------------------------------------------------

// ---------------------------------------- INICIO SCRIPT WHATSAPP HEADER ---------------------------------------------------
// Certifique-se de que o código seja executado após a página ser carregada
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o link do WhatsApp pelo ID
    const whatsappLink = document.querySelector('#whatsapp-link-header');

    // Verifica se o link foi encontrado
    if (whatsappLink) {
        // Adiciona um evento de clique ao link
        whatsappLink.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link (abrir #)

            // Verifica a hora atual
            const currentHour = new Date().getHours(); // Pega a hora atual (0-23)
            let message;

            // Define a mensagem com base no horário
            if (currentHour >= 6 && currentHour < 12) {
                message = "Olá, seja bem-vindo à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto! Você é muito importante para nós. Gostaríamos de saber: em que podemos ajudá-lo?";
            } else if (currentHour >= 12 && currentHour < 18) {
                message = "Boa tarde, a Paz do Senhor Jesus! Estamos felizes por sua visita à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto. Como podemos ajudá-lo?";
            } else {
                message = "Boa noite, a Paz do Senhor Jesus! Seja bem-vindo à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto. É uma honra tê-lo conosco. Em que podemos auxiliá-lo?";
            }

            // Número de telefone do WhatsApp (substitua pelo número correto)
            const numeroWhatsApp = '5516981811523'; // Número no formato internacional

            // URL para redirecionar ao WhatsApp com a mensagem personalizada
            const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(message)}`;

            // Abre o WhatsApp com a mensagem
            window.open(url, '_blank');
        });
    } else {
        console.error("Link do WhatsApp não encontrado!");
    }
});
// ---------------------------------------- INICIO SCRIPT WHATSAPP DO HEADER ---------------------------------------------------


// ------------------------------------------ INICIO PARA TRAVAR O HEADER NO TOPO --------------------------------------------------
// Seleciona o elemento do header
var header = document.querySelector("header");

// Pega a posição inicial do cabeçalho
var sticky = header.offsetTop;

// Função que verifica o scroll da página
window.onscroll = function() {
    // Quando o usuário rolar para baixo e ultrapassar a posição inicial do header
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");  // Adiciona a classe "fixed"
    } else {
        header.classList.remove("fixed");  // Remove a classe "fixed"
    }
};
// ------------------------------------------ FIM PARA TRAVAR O HEADER NO TOPO--------------------------------------------------


// ---------------------------------------- INICIO SCRIPT WHATSAPP BODY DESKTOP ---------------------------------------------------
// Certifique-se de que o código só execute após o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o link do WhatsApp pelo ID
    const whatsappLink = document.querySelector('#whatsapp-link');

    // Verifica se o link foi encontrado
    if (whatsappLink) {
        // Adiciona um evento de clique ao link
        whatsappLink.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link (não segue o href)

            // Verifica a hora atual
            const currentHour = new Date().getHours(); // Pega a hora atual (0-23)
            let message;

            // Define a mensagem com base no horário
            if (currentHour >= 6 && currentHour < 12) {
                message = "Olá, seja bem-vindo à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto! Você é muito importante para nós. Gostaríamos de saber: em que podemos ajudá-lo?";
            } else if (currentHour >= 12 && currentHour < 18) {
                message = "Boa tarde, a Paz do Senhor Jesus! Estamos felizes por sua visita à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto. Como podemos ajudá-lo?";
            } else {
                message = "Boa noite, a Paz do Senhor Jesus! Seja bem-vindo à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto. É uma honra tê-lo conosco. Em que podemos auxiliá-lo?";
            }

            // Número de telefone do WhatsApp (substitua pelo número correto)
            const numeroWhatsApp = '5516981811523'; // Número no formato internacional

            // URL para redirecionar ao WhatsApp com a mensagem personalizada
            const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(message)}`;

            // Abre o WhatsApp com a mensagem
            window.open(url, '_blank');
        });
    } else {
        console.error("Link do WhatsApp não encontrado!");
    }
});
// ---------------------------------------- FIM SCRIPT WHATSAPP BODY DESKTOP ---------------------------------------------------


// ---------------------------------------- INICIO SCRIPT WHATSAPP MOBILE ---------------------------------------------------
// Certifique-se de que o código só execute após o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o link do WhatsApp pelo ID
    const whatsappLink = document.querySelector('#whatsapp-link-mobile');

    // Verifica se o link foi encontrado
    if (whatsappLink) {
        // Adiciona um evento de clique ao link
        whatsappLink.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link (não segue o href)

            // Verifica a hora atual
            const currentHour = new Date().getHours(); // Pega a hora atual (0-23)
            let message;

            // Define a mensagem com base no horário
            if (currentHour >= 6 && currentHour < 12) {
                message = "Olá, seja bem-vindo à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto! Você é muito importante para nós." + "\n\n" + "Gostaríamos de saber: em que podemos ajudá-lo?";
            } else if (currentHour >= 12 && currentHour < 18) {
                message = "Boa tarde, a Paz do Senhor Jesus! Estamos felizes por sua visita à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto." + "\n\n" + "Como podemos ajudá-lo?";
            } else {
                message = "Boa noite, a Paz do Senhor Jesus! Seja bem-vindo à Igreja Assembleia de Deus, Ministério do Belém, em Ribeirão Preto. É uma honra tê-lo conosco." + "\n\n" + "Em que podemos auxiliá-lo?";
            }

            // Número de telefone do WhatsApp (substitua pelo número correto)
            const numeroWhatsApp = '5516981811523'; // Número no formato internacional

            // URL para redirecionar ao WhatsApp com a mensagem personalizada
            const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(message)}`;

            // Abre o WhatsApp com a mensagem
            window.open(url, '_blank');
        });
    } else {
        console.error("Link do WhatsApp não encontrado!");
    }
});
// ---------------------------------------- FIM SCRIPT WHATSAPP BODY MOBILE ---------------------------------------------------