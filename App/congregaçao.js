// Dados de exemplo para as igrejas
const igrejasData = [
    {
        "nome": "Sede Central - Ribeirão preto, SP",
        "endereco": "R. André Rebouças, 1119 - Ipiranga ",
        "telefone": "12-996125450",
        "Dirigente": "Presidente Pr Rodrigo S. Muniz",
        "bairro": "Ipiranga",
        "local": "https://www.google.com/maps/place/R.+Andr%C3%A9+Rebou%C3%A7as,+1119+-+Ipiranga,+Ribeir%C3%A3o+Preto+-+SP,+14055-650/@-21.1530202,-47.8242869,17z/data=!3m1!4b1!4m6!3m5!1s0x94b9be3fb604a391:0x57a0214f33a3801d!8m2!3d-21.1530202!4d-47.821712!16s%2Fg%2F11cpb8z03b?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Cristo Redentor - Ribeirão preto, SP",
        "endereco": "Av. Pedro Abrahao Alem Neto, 2030 - Ribeirão Preto",
        "telefone": "(11) 1234-5679",
        "Dirigente": "Pb Bruno Mota",
        "bairro": "Jardim Cristo Redentor",
        "local": "https://www.google.com/maps/place/Av.+Pedro+Abrahao+Alem+Neto,+2030+-+Ribeir%C3%A3o+Preto,+SP,+14063-271/@-21.1020126,-47.8285206,20.75z/data=!4m6!3m5!1s0x94b995cc7943c6e9:0x9c1ec818f967d0e5!8m2!3d-21.1020802!4d-47.8282515!16s%2Fg%2F11tf9n9pfz?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Heitor Rigon - Ribeirão preto, SP",
        "endereco": "R. José Roberto Arantes de Almeida, 123 - Jardim Heitor Rigon",
        "telefone": "(11) 1234-5680",
        "Dirigente": "Pr Flavio Rodrigues da Silva",
        "bairro": "Jardim Heitor Rigon",
        "local": "https://www.google.com/maps/place/R.+Jos%C3%A9+Roberto+Arantes+de+Almeida,+123+-+Jardim+Heitor+Rigon,+Ribeir%C3%A3o+Preto+-+SP,+14062-026/@-21.1168253,-47.8176669,17z/data=!3m1!4b1!4m6!3m5!1s0x94b99597a8581d85:0xcdc401c6a5e9e9a3!8m2!3d-21.1168253!4d-47.815092!16s%2Fg%2F11l_fdp9y9?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Orestes Lopes - Ribeirão preto, SP",
        "endereco": "Av. Ernesto Guevara Lã Serna, 921 - Jardim Heitor Rigon",
        "telefone": "(11) 1234-5681",
        "Dirigente": "Pr Adriano de Souza",
        "bairro": "Orestes Lopes",
        "local": "https://www.google.com/maps/place/Av.+Ernesto+Guevara+Lã+Serna,+921+-+Jardim+Heitor+Rigon,+Ribeirão+Preto+-+SP,+14062-019/@-21.1199921,-47.8254384,19z/data=!3m1!4b1!4m6!3m5!1s0x94b995eb1d37c4e1:0x3a842f363d53c4ce!8m2!3d-21.1199934!4d-47.8247933!16s%2Fg%2F11fy9qw62x?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Paulo Gomes - Ribeirão preto, SP",
        "endereco": "Rua José Antônio Alves - Jardim Doutor Paulo Gomes Romeo",
        "telefone": "(11) 1234-5682",
        "Dirigente": "Pb. Samuel",
        "bairro": "Paulo Gomes",
        "local": "https://www.google.com/maps/place/IGREJA+EVANGELICA+ASSEMBLEIA+DE+DEUS+MINIST%C3%89RIO+BEL%C3%89M/@-21.1509121,-47.8448469,19z/data=!3m1!4b1!4m6!3m5!1s0x94b9bdfd144c9bc3:0xa5a985fae0e199bd!8m2!3d-21.1509134!4d-47.8442032!16s%2Fg%2F11y679xw11?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Parque dos Servidores - Ribeirão preto, SP",
        "endereco": "Av. Jose Antonio Ferrazi, 2329 - Parque dos Servidores",
        "telefone": "(11) 1234-5684",
        "Dirigente": "Pb. Josias Vitor Lara Celestino",
        "bairro": "Pq dos Servidores",
        "local": "https://www.google.com/maps/place/Av.+Jos%C3%A9+Ant%C3%B4nio+Ferrarezi,+2329+-+Ch%C3%A1caras+Hipica,+Ribeir%C3%A3o+Preto+-+SP,+14094-222/@-21.1941256,-47.7360405,17z/data=!3m1!4b1!4m6!3m5!1s0x94b9c72fc31a174d:0xfd5480032a6a5f52!8m2!3d-21.1941256!4d-47.7334656!16s%2Fg%2F11sfr1ylpw?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Parque Ribeirão - Ribeirão preto, SP",
        "endereco": "Av. Cásper Líbero, 126 - Parque Ribeirao Preto",
        "telefone": "(11) 1234-5685",
        "Dirigente": "Ev. Daniel",
        "bairro": "Parque Ribeirão",
        "local": "https://www.google.com/maps/place/AD+Belém+Parque+Ribeirão+Preto/@-21.1994979,-47.8405477,19z/data=!4m15!1m8!3m7!1s0x94b9bea1d3acabc7:0xa6d3f710c81abf6a!2sAv.+Cásper+Líbero,+126+-+Parque+Ribeirao+Preto,+Ribeirão+Preto+-+SP,+14031-190!3b1!8m2!3d-21.1996172!4d-47.8401311!16s%2Fg%2F11csc4h1dx!3m5!1s0x94b9bfe4514f1f71:0x45cdbcc974def953!8m2!3d-21.1997221!4d-47.8399721!16s%2Fg%2F11p3cbr3xs?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Ribeirão Verde - Ribeirão preto, SP",
        "endereco": "R. José Adriano Miranda Júnior, 3995 - Jardim Prof. Antonio Palocci",
        "telefone": "(11) 1234-5686",
        "Dirigente": "Pb. Roberto",
        "bairro": "Ribeirão Verde",
        "local": "https://www.google.com/maps/place/R.+Jos%C3%A9+Adriano+Miranda+J%C3%BAnior,+3995+-+Jardim+Prof.+Antonio+Palocci,+Ribeir%C3%A3o+Preto+-+SP,+14079-380/@-21.1255091,-47.7409625,17z/data=!3m1!4b1!4m6!3m5!1s0x94b9c0394542c503:0xddb2c03d5b5f546!8m2!3d-21.1255091!4d-47.7383876!16s%2Fg%2F11h6505yqt?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Vila Guiomar - Ribeirão preto, SP",
        "endereco": "Av. dos Andradas, 1570 - Parque Ribeirao Preto",
        "telefone": "(11) 1234-5687",
        "Dirigente": "Ev. Osvaldo Herculano da Silva",
        "bairro": "Vila Guiomar",
        "local": "https://www.google.com/maps/place/Av.+dos+Andradas,+1570+-+Parque+Ribeirao+Preto,+Ribeir%C3%A3o+Preto+-+SP,+14031-050/@-21.2009147,-47.8291176,21z/data=!4m6!3m5!1s0x94b9bebbf37b7341:0x64ddb192b4b5b25e!8m2!3d-21.2009793!4d-47.8290155!16s%2Fg%2F11c2hdpmg5?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Vila Marchesi - Ribeirão preto, SP",
        "endereco": "R. Aristides Bernardes Barreto, 860 - Parque Ribeirao Preto",
        "telefone": "(11) 2345-6789",
        "Dirigente": "Pb. Otoniel Ferreira da Silva",
        "bairro": "Vila Marchesi",
        "local": "https://www.google.com/maps/place/R.+Aristides+Bernardes+Barreto,+860+-+Parque+Ribeirao+Preto,+Ribeir%C3%A3o+Preto+-+SP,+14031-284/@-21.204718,-47.8356251,14z/data=!4m6!3m5!1s0x94b9bea43f849735:0x543dfc2c112d3464!8m2!3d-21.2042942!4d-47.8365883!16s%2Fg%2F11f3vrz0nx?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Vila Virgínia - Ribeirão preto, SP",
        "endereco": "R. Barão de Mauá, 990 - Vila Virginia",
        "telefone": "(11) 2345-6790",
        "Dirigente": "Pr. Iromar da Silva de Souza",
        "bairro": "Vila Virgínia",
        "local": "https://www.google.com/maps/place/R.+Bar%C3%A3o+de+Mau%C3%A1,+990+-+Vila+Virginia,+Ribeir%C3%A3o+Preto+-+SP,+14030-190/@-21.1827074,-47.8329555,17z/data=!3m1!4b1!4m6!3m5!1s0x94b9be8f27503209:0x89c2805b82bae86c!8m2!3d-21.1827074!4d-47.8303806!16s%2Fg%2F11crwhnfdj?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Anselmo testa - Batatais, SP",
        "endereco": "Av. dos Pupins, 321 - Anselmo testa",
        "telefone": "(11) 2345-6791",
        "Dirigente": "Ev. Nestor",
        "bairro": "Batatais Jardim Anselmo Testa",
        "local": "https://www.google.com/maps/place/Av.+dos+Pupins,+321+-+Batatais,+SP,+14300-000/@-20.9019546,-47.5772257,19z/data=!3m1!4b1!4m6!3m5!1s0x94b9fad1fd37a531:0x456c3927e48dd949!8m2!3d-20.9019559!4d-47.576582!16s%2Fg%2F11hbgpc914?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Vila Maria - Batatais, SP",
        "endereco": "R. Thomaz Alberto Watley, 1031 - Vila Maria",
        "telefone": "(11) 2345-6792",
        "Dirigente": "Ev. Claudio Donizete Barcelos",
        "bairro": "Batatais Vila Maria",
        "local": "https://www.google.com/maps/place/Rua+Tomaz+Alberto+Watley,+1031+-+Vila+Maria,+Batatais+-+SP,+14300-000/@-20.8952013,-47.602503,17z/data=!3m1!4b1!4m6!3m5!1s0x94b9fa989fdc5617:0xe46fc0c30f6ab70f!8m2!3d-20.8952063!4d-47.5999281!16s%2Fg%2F11v0_47ml1?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "João Luiz - Brodowski, SP",
        "endereco": "R. Mario de Melo, 12, Vereador Joao Luis de Vicente",
        "telefone": "(11) 2345-6793",
        "Dirigente": "Pb. Muricio",
        "bairro": "Brodowski: Vereador Joao Luis de Vicente",
        "local": "https://www.google.com/maps/place/R.+Mario+de+Melo,+12,+Brodowski+-+SP,+14340-000/@-20.9859391,-47.6441657,16.25z/data=!4m6!3m5!1s0x94b9ef1ff11eb3b3:0x84992f8a8136a045!8m2!3d-20.9853061!4d-47.6447435!16s%2Fg%2F11csj6g0pt?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Igreja Cravinhos - Cravinhos, SP",
        "endereco": "Av. Pedro Duarte Amoroso, 1610 - Nova Cravinhos",
        "telefone": "(11) 2345-6794",
        "Dirigente": "Ev. Claudimar Mamud",
        "bairro": "Cravinhos: Nova Cravinhos",
        "local": "https://www.google.com/maps/place/Av.+Pedro+Duarte+Amoroso,+1610+-+Nova+Cravinhos,+Cravinhos+-+SP,+14140-000/@-21.3298595,-47.7708342,15.25z/data=!4m6!3m5!1s0x94b9c9eff6421ff9:0x21fba3df053ffc17!8m2!3d-21.3356365!4d-47.7537493!16s%2Fg%2F11ggnd0_2h?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Igreja Morro Agudo - Morro Agudo, SP",
        "endereco": "R. Inácio Franco, 2006, Morro Agudo",
        "telefone": "(11) 2345-6795",
        "Dirigente": "Ev. Alecsandro Gomes Ferreira",
        "bairro": "Morro Agudo",
        "local": "https://www.google.com/maps/place/R.+In%C3%A1cio+Franco,+2006,+Morro+Agudo+-+SP,+14640-000/@-20.7271727,-48.0569253,17z/data=!3m1!4b1!4m6!3m5!1s0x94ba329397c12f73:0x911ef706386426a7!8m2!3d-20.7271777!4d-48.0543504!16s%2Fg%2F11f6dm6p0w?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    },
    {
        "nome": "Igreja Serrana - Serrana, SP",
        "endereco": "R. Vicente de Paula Lima, 1886, Serrana",
        "telefone": "(11) 2345-6796",
        "Dirigente": "Pr. Vaildemir do Vale",
        "bairro": "Serrana",
        "local": "https://www.google.com/maps/place/R.+Vicente+de+Paula+Lima,+1886,+Serrana+-+SP,+14150-000/@-21.1994205,-47.5999981,17z/data=!3m1!4b1!4m6!3m5!1s0x94b9dac860345b6b:0x30cf4d3e4a58adf0!8m2!3d-21.1994255!4d-47.5974232!16s%2Fg%2F11lmp95_jq?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
        "imagem": "https://ad.org.br/wp-content/uploads/2024/03/Logo-AD-Belem-2024-Chapado.png"
    }
]

// Variáveis de paginação
let paginaAtual = 1;
const igrejasPorPagina = 5;  // Aumentei para 5 igrejas por página

// Função para filtrar igrejas com base no bairro e nome
function filtrarIgrejas() {
    const filtroBairro = document.getElementById("filtroBairro").value;
    const busca = document.getElementById("busca").value.toLowerCase();

    let igrejasFiltradas = igrejasData;

    if (filtroBairro !== "todos") {
        igrejasFiltradas = igrejasFiltradas.filter(igreja => igreja.bairro === filtroBairro);
    }

    if (busca) {
        igrejasFiltradas = igrejasFiltradas.filter(igreja => igreja.nome.toLowerCase().includes(busca));
    }

    exibirIgrejas(igrejasFiltradas);
}

// Função para exibir as igrejas com base na paginação
function exibirIgrejas(igrejasFiltradas) {
    const container = document.getElementById("containerIgrejas");
    container.innerHTML = "";

    const inicio = (paginaAtual - 1) * igrejasPorPagina;
    const fim = inicio + igrejasPorPagina;
    const igrejasPagina = igrejasFiltradas.slice(inicio, fim);

    igrejasPagina.forEach(igreja => {
        const divIgreja = document.createElement("div");
        divIgreja.classList.add("cartao-localizacao");

        divIgreja.innerHTML = `
            <img src="${igreja.imagem}" alt="${igreja.nome}">
            <div class="conteudo">
                <h2>${igreja.nome}</h2>
                <p><strong>Endereço:</strong> ${igreja.endereco}</p>
                <p><strong>Dirigente:</strong> ${igreja.Dirigente}</p>                
                   <div class="responcivobotãoLocal"> <a target="_blank" href="${igreja.local}" class="botao-ver-local">Ver Local </a></div>
            </div>
        `;

        container.appendChild(divIgreja);
    });

    atualizarPaginacao(igrejasFiltradas);
}

// Função para atualizar os botões de paginação
function atualizarPaginacao(igrejasFiltradas) {
    const totalDeIgrejas = igrejasFiltradas.length;
    const totalDePaginas = Math.ceil(totalDeIgrejas / igrejasPorPagina);

    // Atualizar o texto da página atual
    document.getElementById("paginaAtual").textContent = `Página ${paginaAtual}`;

    // Desabilitar os botões de navegação se necessário
    document.getElementById("anterior").disabled = paginaAtual === 1;
    document.getElementById("proximo").disabled = paginaAtual === totalDePaginas;
}

// Função para mudar de página
function mudarPagina(direcao) {
    paginaAtual += direcao;

    // Garantir que a página atual fique dentro dos limites
    if (paginaAtual < 1) {
        paginaAtual = 1;
    }

    const filtroBairro = document.getElementById("filtroBairro").value;
    const busca = document.getElementById("busca").value.toLowerCase();

    let igrejasFiltradas = igrejasData;

    if (filtroBairro !== "todos") {
        igrejasFiltradas = igrejasFiltradas.filter(igreja => igreja.bairro === filtroBairro);
    }

    if (busca) {
        igrejasFiltradas = igrejasFiltradas.filter(igreja => igreja.nome.toLowerCase().includes(busca));
    }

    exibirIgrejas(igrejasFiltradas);
}

// Inicializar a página com todas as igrejas
window.onload = function () {
    filtrarIgrejas();
};
