(function () {
  "use strict";
  var S = window.SITE || {};
  var P = (window.PROJETOS || []).slice().sort(function (a, b) { return a.ordem - b.ordem; });
  document.documentElement.classList.add("js");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function img(f) { return "assets/img/" + f; }
  function podeMostrar(foto) { return !foto.pessoas || foto.autorizada; }
  function whats(texto) { return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(texto); }

  /* Contatos: os links vêm de dados.js, não ficam escritos no HTML */
  var links = {
    whatsapp: whats(S.whatsappMensagem || ""),
    email: "mailto:" + S.email,
    linkedin: S.linkedin,
    instagram: "https://www.instagram.com/" + S.instagram + "/"
  };
  document.querySelectorAll("[data-link]").forEach(function (a) {
    a.href = links[a.dataset.link];
    if (a.dataset.link !== "email") { a.target = "_blank"; a.rel = "noopener"; }
  });

  /* Menu no celular */
  var botaoMenu = document.querySelector(".menu-botao");
  var menu = document.getElementById("menu");
  if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
      var aberto = botaoMenu.getAttribute("aria-expanded") === "true";
      botaoMenu.setAttribute("aria-expanded", String(!aberto));
      menu.classList.toggle("aberto", !aberto);
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        botaoMenu.setAttribute("aria-expanded", "false");
        menu.classList.remove("aberto");
      }
    });
  }

  function capa(p, carregar) {
    if (!p.capa) {
      return '<div class="capa-livro" aria-hidden="true"><span>' + esc(p.tituloCurto || p.titulo) + "</span></div>";
    }
    var ajuste = p.capaAjuste === "contain" ? ' class="contem" style="background:' + esc(p.capaFundo || "#fff") + '"' : "";
    return '<img src="' + img(p.capa) + '" alt="' + esc(p.capaAlt) + '"' + ajuste + (carregar ? "" : ' loading="lazy"') + ">";
  }

  /* Galeria de projetos (home) */
  var galeria = document.getElementById("galeria");
  if (galeria) {
    galeria.innerHTML = P.map(function (p) {
      return '<li class="cartao-projeto revelar" data-tipo="' + esc(p.tipo) + '">' +
        '<a href="projeto.html?p=' + encodeURIComponent(p.slug) + '">' +
        '<figure class="polaroide">' + capa(p) +
        '<span class="etiqueta">' + esc(p.tipo) + "</span>" +
        (p.status ? '<span class="selo-status">' + esc(p.status) + "</span>" : "") +
        "</figure>" +
        "<h3>" + esc(p.tituloCurto || p.titulo) + "</h3>" +
        "<p>" + esc(p.gancho) + "</p>" +
        '<p class="meta">' + esc(p.ano) + " · " + p.tags.map(esc).join(" · ") + "</p>" +
        "</a></li>";
    }).join("");

    var filtros = document.getElementById("filtros");
    var tipos = ["Todos"];
    P.forEach(function (p) { if (tipos.indexOf(p.tipo) < 0) tipos.push(p.tipo); });
    filtros.innerHTML = tipos.map(function (t, i) {
      return '<button type="button" aria-pressed="' + (i === 0) + '">' + esc(t) + "</button>";
    }).join("");
    filtros.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      filtros.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      galeria.querySelectorAll(".cartao-projeto").forEach(function (li) {
        li.hidden = b.textContent !== "Todos" && li.dataset.tipo !== b.textContent;
      });
    });
  }

  /* Depoimentos: a seção só aparece quando houver algum */
  var dep = document.getElementById("depoimentos");
  var listaDep = window.DEPOIMENTOS || [];
  if (dep && listaDep.length) {
    dep.hidden = false;
    dep.querySelector(".depoimentos__lista").innerHTML = listaDep.map(function (d) {
      return '<figure class="bilhete-dep revelar"><blockquote>“' + esc(d.texto) + '”</blockquote><figcaption>— ' + esc(d.nome) + ", " + esc(d.cargo) + "</figcaption></figure>";
    }).join("");
  }

  /* Página de projeto */
  var alvo = document.getElementById("projeto");
  if (alvo) {
    var slug = new URLSearchParams(location.search).get("p");
    var i = P.findIndex(function (p) { return p.slug === slug; });
    if (i < 0) {
      alvo.innerHTML = '<div class="container vazio"><h1>Projeto não encontrado</h1><p><a class="botao" href="index.html#projetos">Ver todos os projetos</a></p></div>';
    } else {
      montarProjeto(P[i], P[i - 1], P[i + 1]);
    }
  }

  function montarProjeto(p, ant, prox) {
    document.title = (p.tituloCurto || p.titulo) + " | Julia Brasilio";
    var ficha = Object.keys(p.ficha).map(function (k) {
      return "<div><dt>" + esc(k) + "</dt><dd>" + esc(p.ficha[k]) + "</dd></div>";
    }).join("");
    var fotos = (p.galeria || []).filter(podeMostrar);
    var catalogo = (p.catalogo || []).map(function (m) {
      return '<li class="ficha-material"><img src="' + img(m.img) + '" alt="' + esc(m.alt) + '" loading="lazy"><h3>' + esc(m.nome) + "</h3>" + (m.texto ? "<p>" + esc(m.texto) + "</p>" : "") + "</li>";
    }).join("");

    alvo.innerHTML =
      '<header class="projeto-topo quadriculado"><div class="container projeto-topo__grade">' +
        '<div class="projeto-topo__texto">' +
          '<a class="voltar" href="index.html#projetos">← Todos os projetos</a>' +
          '<p class="pilula">' + esc(p.tipo) + " · " + esc(p.ano) + "</p>" +
          (p.status ? '<p class="selo-status selo-status--solto">' + esc(p.status) + "</p>" : "") +
          "<h1>" + esc(p.titulo) + "</h1>" +
          '<p class="gancho">' + esc(p.gancho) + "</p>" +
        "</div>" +
        '<div class="projeto-topo__visual">' +
          '<figure class="polaroide fita">' + capa(p, true) + "</figure>" +
          '<aside class="ficha" aria-label="Ficha do projeto"><p class="ficha__titulo">Ficha do projeto</p><dl>' + ficha + '</dl><span class="ficha__carimbo">' + esc(p.ano) + "</span></aside>" +
        "</div>" +
      "</div></header>" +
      '<div class="container projeto-corpo">' +
        '<section class="bloco revelar"><p class="rotulo">Problema</p><h2>O <em>desafio</em></h2><p>' + esc(p.desafio) + "</p></section>" +
        '<section class="bloco revelar"><p class="rotulo">Ação</p><h2>O que eu <em>fiz</em></h2><ol class="passos">' +
          p.acao.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ol></section>" +
        '<section class="bloco revelar"><p class="rotulo">Resultado</p><h2>O que <em>aconteceu</em></h2><p>' + esc(p.resultado) + "</p></section>" +
        (catalogo ? '<section class="bloco bloco--largo revelar"><h2>Os <em>materiais</em></h2><ul class="catalogo">' + catalogo + "</ul></section>" : "") +
        (p.aprendi ? '<section class="bloco bilhete-aprendi revelar"><h2>O que eu <em>aprendi</em></h2><p>' + esc(p.aprendi) + "</p></section>" : "") +
        (p.citacao ? '<blockquote class="citacao revelar"><p>“' + esc(p.citacao.texto) + '”</p><cite>' + esc(p.citacao.autor) + "</cite></blockquote>" : "") +
        (fotos.length ? '<section class="bloco bloco--largo revelar"><h2><em>Galeria</em></h2><div class="galeria-fotos">' +
          fotos.map(function (f) {
            return '<figure class="polaroide"><img src="' + img(f.src) + '" alt="' + esc(f.alt || f.legenda) + '" loading="lazy"><figcaption>' + esc(f.legenda) + "</figcaption></figure>";
          }).join("") + "</div></section>" : "") +
        '<nav class="projeto-nav" aria-label="Outros projetos">' +
          (ant ? '<a href="projeto.html?p=' + ant.slug + '">← ' + esc(ant.tituloCurto) + "</a>" : "<span></span>") +
          (prox ? '<a href="projeto.html?p=' + prox.slug + '">' + esc(prox.tituloCurto) + " →</a>" : "<span></span>") +
        "</nav>" +
        '<aside class="projeto-cta"><p>Gostou deste projeto?</p><a class="botao" href="index.html#contato">Vamos conversar</a></aside>' +
      "</div>";
  }

  /* Formulário: monta a mensagem e abre o WhatsApp ou o e-mail */
  var form = document.getElementById("formulario");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var via = e.submitter && e.submitter.value === "email" ? "email" : "whatsapp";
      var texto = "Olá, Julia! Meu nome é " + d.get("nome") + " e escrevo em nome de " + d.get("escola") + ".\n" +
        "Assunto: " + d.get("assunto") + "\n\n" + d.get("mensagem") + "\n\nMeu contato: " + d.get("contato");
      if (via === "email") {
        location.href = "mailto:" + S.email + "?subject=" + encodeURIComponent("Portfólio: " + d.get("assunto")) + "&body=" + encodeURIComponent(texto);
      } else {
        window.open(whats(texto), "_blank", "noopener");
      }
      form.classList.add("enviado");
    });
  }

  /* Botão fixo no celular, depois do topo */
  var fixo = document.querySelector(".botao-fixo");
  var hero = document.querySelector(".hero");
  if (fixo && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      fixo.classList.toggle("visivel", !es[0].isIntersecting);
    }).observe(hero);
  }

  /* Elementos que aparecem ao rolar */
  var revelar = document.querySelectorAll(".revelar");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visivel"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    revelar.forEach(function (el) { io.observe(el); });
  } else {
    revelar.forEach(function (el) { el.classList.add("visivel"); });
  }
})();
