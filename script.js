document.addEventListener("DOMContentLoaded", () => {

  const btnMenu = document.getElementById("btnMenu");
  const menuMobile = document.getElementById("menuMobile");
  const backdrop = document.getElementById("backdrop");
  
  const btnUser = document.getElementById("btnUser");
  const dropdownUser = document.getElementById("dropdownUser");
  
  function closeMenu(){
    menuMobile.classList.remove("open");
    backdrop.classList.remove("show");
    btnMenu.setAttribute("aria-expanded", "false");
  }
  
  function toggleMenu(){
    const open = menuMobile.classList.toggle("open");
    backdrop.classList.toggle("show", open);
    btnMenu.setAttribute("aria-expanded", open ? "true" : "false");
  }
  
  function closeDropdown(){
    dropdownUser.classList.remove("open");
    btnUser.setAttribute("aria-expanded", "false");
  }
  
  function toggleDropdown(e){
    e.stopPropagation();
    const open = dropdownUser.classList.toggle("open");
    btnUser.setAttribute("aria-expanded", open ? "true" : "false");
  }
  
  btnMenu.addEventListener("click", () => {
    closeDropdown();
    toggleMenu();
  });
  
  btnUser.addEventListener("click", (e) => {
    closeMenu();
    toggleDropdown(e);
  });
  
  backdrop.addEventListener("click", () => {
    closeMenu();
    closeDropdown();
  });
  
  document.addEventListener("click", () => {
    closeDropdown();
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeDropdown();
    }
    });

});