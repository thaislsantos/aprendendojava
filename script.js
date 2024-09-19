// Criando os elementos
const docType = document.implementation.createDocumentType('html', '', '');
document.appendChild(docType);

const html = document.createElement('html');
html.setAttribute('lang', 'pt-br');
document.appendChild(html);

const head = document.createElement('head');
html.appendChild(head);

const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);

const title = document.createElement('title');
title.textContent = 'Portfólio Thais L Santos';
head.appendChild(title);

const linkCSS = document.createElement('link');
linkCSS.setAttribute('rel', 'stylesheet');
linkCSS.setAttribute('href', './styles/style.css');
head.appendChild(linkCSS);

const body = document.createElement('body');
html.appendChild(body);

// Cabeçalho
const header = document.createElement('header');
header.classList.add('cabecalho');
body.appendChild(header);

const nav = document.createElement('nav');
nav.classList.add('cabecalho__menu');
header.appendChild(nav);

const homeLink = document.createElement('a');
homeLink.classList.add('cabecalho__menu__links');
homeLink.setAttribute('href', 'index.html');
homeLink.textContent = 'Home';
nav.appendChild(homeLink);

const aboutLink = document.createElement('a');
aboutLink.classList.add('cabecalho__menu__links');
aboutLink.setAttribute('href', 'about.html');
aboutLink.textContent = 'Sobre mim';
nav.appendChild(aboutLink);

// Conteúdo Principal
const main = document.createElement('main');
main.classList.add('apresentacao');
body.appendChild(main);

const section = document.createElement('section');
section.classList.add('apresentacao__conteudo');
main.appendChild(section);

const h1 = document.createElement('h1');
h1.classList.add('apresentacao__conteudo__titulo');
h1.innerHTML = 'Bem-vinde ao <br>meu portfólio!';
section.appendChild(h1);

const p = document.createElement('p');
p.classList.add('apresentacao__conteudo__texto');
p.textContent = 'Olá, sou Thais Santos, uma designer gráfica apaixonada por criatividade e inovação. Recentemente, decidi expandir meus horizontes entrando no mundo da programação. Seja bem-vinde ao meu portfólio, onde design e tecnologia se encontram para criar experiências únicas!';
section.appendChild(p);

// Links de redes sociais
const divLinks = document.createElement('div');
divLinks.classList.add('apresentacao__links');
section.appendChild(divLinks);

const h2 = document.createElement('h2');
h2.classList.add('apresentacao__links__subtitulo');
h2.textContent = 'Acesse minhas redes:';
divLinks.appendChild(h2);

const createSocialLink = (href, imgSrc, text) => {
    const link = document.createElement('a');
    link.classList.add('apresentacao__links__link');
    link.setAttribute('href', href);
    
    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    link.appendChild(img);

    link.appendChild(document.createTextNode(text));
    return link;
};

divLinks.appendChild(createSocialLink('https://github.com', './assets/github.png', 'Github'));
divLinks.appendChild(createSocialLink('https://www.linkedin.com/in/thaislsantos', './assets/linkedin.png', 'LinkedIn'));
divLinks.appendChild(createSocialLink('https://instagram.com/_thaislsantos', './assets/instagram.png', 'Instagram'));

// Imagem de apresentação
const img = document.createElement('img');
img.setAttribute('src', './assets/foto_thais.png');
img.setAttribute('alt', 'foto Thais');
main.appendChild(img);

// Rodapé
const footer = document.createElement('footer');
footer.classList.add('rodape');
body.appendChild(footer);

const footerText = document.createElement('p');
footerText.textContent = 'Desenvolvido por Thais Santos.';
footer.appendChild(footerText);