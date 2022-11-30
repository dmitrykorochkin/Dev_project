const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    triggers.forEach(trigger => {
      trigger.addEventListener("click", e => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      };

    close.addEventListener("click", () => {
        closeModal();
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function() {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup_close");
  showModalByTime(".popup", 73000);
  
};

export default modals;