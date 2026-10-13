// Botão de voltar ao topo: aparece depois de rolar a página e leva ao início.
(function () {
  var b = document.querySelector('.topo');
  function atualiza() { b.classList.toggle('visivel', window.scrollY > 500); }
  window.addEventListener('scroll', atualiza, { passive: true });
  b.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  atualiza();
})();
