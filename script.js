
document.addEventListener('DOMContentLoaded', function() {
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const productDetails = document.querySelector(`#${checkbox.id.replace('toggle','details')}`)
  
        
        if (checkbox.checked) {
          productDetails.classList.remove('info')
        } else {
          productDetails.classList.add('info')
        }

      });

    });

  });