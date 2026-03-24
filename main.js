// Hamburger menu
function toggleMenu() {
  var menu = document.getElementById('mobile-menu');
  var btn = document.getElementById('hamburger');
  menu.classList.toggle('open');
  btn.classList.toggle('active');
}

function closeMenu() {
  var menu = document.getElementById('mobile-menu');
  var btn = document.getElementById('hamburger');
  menu.classList.remove('open');
  btn.classList.remove('active');
}

// Sluit menu als je buiten klikt
document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobile-menu');
  var btn = document.getElementById('hamburger');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    closeMenu();
  }
});

// Actieve nav link op scroll
window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section[id]');
  var scrollY = window.scrollY + 80;
  sections.forEach(function(section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');
    var link = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.color = '#2a9d6e';
        link.style.fontWeight = '500';
      } else {
        link.style.color = '';
        link.style.fontWeight = '';
      }
    }
  });
});
