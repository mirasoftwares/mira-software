// Channel tabs in the Mirwe section
document.querySelectorAll('.tab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', String(t === tab)); });
    var channel = tab.dataset.c;
    document.querySelectorAll('#orders div').forEach(function (row) {
      row.hidden = !(channel === 'all' || row.dataset.c === channel);
    });
  });
});

// Contact form
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var btn = document.getElementById('submit-btn');
  var errorEl = document.getElementById('form-error');
  var successEl = document.getElementById('form-success');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    errorEl.hidden = true;

    var valid = true;
    form.querySelectorAll('[required]').forEach(function (field) {
      var ok = field.type === 'checkbox' ? field.checked : field.value.trim() !== '' && field.checkValidity();
      field.classList.toggle('bad', !ok);
      if (!ok) valid = false;
    });
    if (!valid) { errorEl.hidden = false; return; }
    if (form.botcheck.checked) return;

    btn.textContent = 'Sending';
    btn.disabled = true;
    try {
      var response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '0a6f6fa8-dd44-4f62-9b7e-4f93dc972edf',
          subject: 'New enquiry from mirasoftware.co.za',
          from_name: form.firstName.value + ' ' + form.lastName.value,
          email: form.email.value,
          topic: form.topic.value,
          message: form.message.value
        })
      });
      var result = await response.json();
      if (!result.success) throw new Error('not sent');
      form.hidden = true;
      successEl.hidden = false;
    } catch (err) {
      errorEl.hidden = false;
      btn.textContent = 'Send message';
      btn.disabled = false;
    }
  });
})();
