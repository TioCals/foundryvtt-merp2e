
document.addEventListener("DOMContentLoaded", function() {
  const strengthInput = document.getElementById('strength');
  const agilityInput = document.getElementById('agility');

  strengthInput.addEventListener('change', function() {
    console.log('Nueva Fuerza: ', strengthInput.value);
  });

  agilityInput.addEventListener('change', function() {
    console.log('Nueva Agilidad: ', agilityInput.value);
  });
});
