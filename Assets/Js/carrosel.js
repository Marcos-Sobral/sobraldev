function loadHeader() {
    fetch('carrosel.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('carrosel').innerHTML = data;
      });
  }
  
  document.addEventListener('DOMContentLoaded', loadHeader);