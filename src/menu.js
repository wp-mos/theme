document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(
    ".wp-block-navigation__responsive-container"
  );

  const items = document.querySelectorAll(
    ".wp-block-navigation__responsive-container .wp-block-navigation-item.wp-block-navigation-link > a"
  );

  items.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.remove("is-menu-open");
      modal.classList.remove("has-modal-open");
      modal.setAttribute("aria-hidden", "true");
    });
  });
});
