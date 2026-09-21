document.querySelectorAll('[data-wa], [data-topic]').forEach(link => {
  const topic = link.dataset.topic;
  const message = topic
    ? `Olá, Dra. Laura! Vim pelo site trabalhista e gostaria de atendimento sobre ${topic}.`
    : 'Olá, Dra. Laura! Vim pelo site trabalhista e gostaria de conversar sobre meu caso.';
  link.href = 'https://wa.me/5511934370907?text=' + encodeURIComponent(message);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.getElementById('year').textContent = new Date().getFullYear();
