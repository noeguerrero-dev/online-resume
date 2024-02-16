document.getElementById('logo1').addEventListener('mouseenter', function() {
    this.style.display = 'none';
    document.getElementById('logo2').style.display = 'block';
  });
  
  document.getElementById('logo2').addEventListener('mouseleave', function() {
    this.style.display = 'none';
    document.getElementById('logo1').style.display = 'block';
  });