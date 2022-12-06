export const tabs = (arg: {
    headerSelector: string,
    tabSelector: string,
    contentSelector: string,
    activeClass: string
  }): void => {
    const header: Element = document.querySelector(arg.headerSelector);
    const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(arg.tabSelector);
    const contents: NodeListOf<HTMLElement> = document.querySelectorAll(arg.contentSelector);

    const hideTabContent = (): void => {
        contents.forEach(content => {
            content.style.display = 'none';
        });
        tabs.forEach(tab => {
            tab.classList.remove(arg.activeClass)
        })
    }
    const showTabContent = (i: number): void => {
        contents[i].style.display = 'block'
        tabs[i].classList.add(arg.activeClass);
    }
    hideTabContent();
    showTabContent(0);

    header.addEventListener('click', (e: Event): void => {
        const target: Element = e.target as HTMLElement;
        if (target.classList.contains(arg.tabSelector.replace(/\./, ""))
            || target.parentElement.classList.contains(arg.tabSelector.replace(/\./, ""))) {
            tabs.forEach((tab, i): void => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });
};

