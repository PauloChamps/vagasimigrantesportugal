const selectCidade = document.getElementById('filtroCidade');
const selectArea = document.getElementById('filtroArea');
const jobs = Array.from(document.querySelectorAll('.job'));
const emptyState = document.getElementById('semResultados');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function filtrarVagas() {
  const cidade = selectCidade.value;
  const area = selectArea.value;

  let visiveis = 0;

  jobs.forEach((job) => {
    const bateCidade = !cidade || job.dataset.cidade === cidade;
    const bateArea = !area || job.dataset.area === area;
    const mostrar = bateCidade && bateArea;

    job.classList.toggle('hidden', !mostrar);
    if (mostrar) visiveis += 1;
  });

  emptyState.classList.toggle('hidden', visiveis > 0);
}

selectCidade?.addEventListener('change', filtrarVagas);
selectArea?.addEventListener('change', filtrarVagas);

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menu?.classList.toggle('open');
});
