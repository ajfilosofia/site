// Botão de voltar ao topo: aparece depois de rolar a página e leva ao início.
(function () {
  var b = document.querySelector('.topo');
  function atualiza() { b.classList.toggle('visivel', window.scrollY > 500); }
  window.addEventListener('scroll', atualiza, { passive: true });
  b.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  atualiza();
})();

// Botão "Mostrar e-mail": o endereço (guardado ao contrário no HTML) só é montado quando a pessoa clica.
(function () {
  var btn = document.getElementById('mostrar-email');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var email = btn.getAttribute('data-e').split('').reverse().join('');
    var link = document.createElement('a');
    link.href = 'mailto:' + email;
    link.textContent = email;
    var alvo = document.getElementById('email-resultado');
    alvo.textContent = '';
    alvo.appendChild(link);
    btn.hidden = true;
    link.focus();
  });
})();
