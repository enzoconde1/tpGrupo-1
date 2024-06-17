document.addEventListener('DOMContentLoaded', () => {
    let burgers = document.getElementById('burger-icon');
    let menus = document.getElementById('menu');
  
  
        burgers.addEventListener('click', () => {
            burgers.classList.toggle('rotate');
            menus.classList.toggle('active');
        });
    }
  );