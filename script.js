let toggle = document.getElementsByClassName("toggle");
let drop = document.getElementsByClassName("dropdownContent");

for(let i = 0; i < toggle.length; i++){
    toggle[i].addEventListener("click", toggleDropdown.bind(null, i))
}


function toggleDropdown(index) {
    if (drop[index].style.display === 'none') {
      closeAllDropdowns();
      drop[index].style.display = 'block';
    } else {
      drop[index].style.display = 'none';
    }
  }
  
  function closeAllDropdowns() {
    for (var i = 0; i < toggle.length; i++) {
      drop[i].style.display = 'none';
    }
  }