const modals = (): void => {
  const bindModal = (triggerSelector:string, modalSelector:string, closeSelector:string):void => {
    const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);
    const modal: Element = document.querySelector(modalSelector);
    const close: Element = document.querySelector(closeSelector);

    triggers.forEach((trigger: Element): void => {
      trigger.addEventListener("click", (e: Event): void => {
        if (e.target) {
          e.preventDefault();
        }
        (modal as HTMLElement).style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    const closeModal = (): void => {
      (modal as HTMLElement).style.display = "none";
      document.body.style.overflow = "";
    };

    document.addEventListener("keydown", function(e) {
      const key = e.key;
      if (key === "Escape") {
        closeModal();
      }
    });

    close.addEventListener("click", () => {
      closeModal();
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  };

  const showModalByTime = (selector:string, time:number): void => {
    setTimeout(function() {
      let selectorShowModal = document.querySelector(selector) as HTMLElement;
      selectorShowModal.style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  };

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup_close");
  showModalByTime(".popup", 73000);
};

export default modals;
