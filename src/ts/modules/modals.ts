export const modals = (): void => {
  const bindModal = (triggerSelector:string, modalSelector:string, closeSelector:string, closeClickOverlay = true):void => {
    const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);
    const modal: Element = document.querySelector(modalSelector);
    const close: Element = document.querySelector(closeSelector);
    const windows: NodeListOf<Element> = document.querySelectorAll('[data-modal]');

    triggers.forEach((trigger: Element): void => {
      trigger.addEventListener("click", (e: Event): void => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(window => {
          (window as HTMLElement).style.display = "none"
        });

        (modal as HTMLElement).style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    const windowModal = (): void => {
      windows.forEach(window => {
        (window as HTMLElement).style.display = "none"
      })
    }

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
      windowModal();
      closeModal();
    });
    modal.addEventListener("click", (e) => {
      
      if (e.target === modal && closeClickOverlay) {
        windowModal();
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
    ".popup_engineer .popup_close",
  );
  bindModal(
    ".phone_link", 
    ".popup", 
    ".popup_close"
  );

  bindModal(
    ".popup_calc_btn",
    ".popup_calc",
    ".popup_calc_close"
  );
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  ),
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
    )
  showModalByTime(".popup", 73000);
};


