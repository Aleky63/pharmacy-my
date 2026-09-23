(function () {
  var form = document.getElementById('subForm');
  var success = document.getElementById('subSuccess');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    success.style.display = 'block';
    form.reset();
  });
})();
