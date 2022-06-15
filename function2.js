window.addEventListener("load", function() {
  const form = document.getElementById('my-form1');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Thank you for submitting your details. We will send you an update shortly!!");
    })
  });
});
