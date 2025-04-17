/*document.getElementById('imageButton').addEventListener('click', function() {
    alert('Button clicked!');
  });*/
  function applicationForm() {
    window.location.href = "../Loan/ApplicationForm/index.html";
  }
  document.getElementById('imageButton').addEventListener('click', applicationForm);

document.getElementById('fileButton').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
  const files = event.target.files;
  if (files.length > 0) {
    alert(`Selected file: ${files[0].name}`);
  }
});