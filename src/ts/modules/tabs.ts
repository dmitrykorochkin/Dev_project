export const tabs =
    ({ 
        headerSelector,
        tabSelector, 
        contentSelector, 
        activeClass 
    }: 
    {
        headerSelector: string,
        tabSelector: string,
        contentSelector: string,
        activeClass: string
    }): void => {

        const header: Element = document.querySelector(headerSelector)
        const tabs: NodeListOf<HTMLElement> = document.querySelectorAll(tabSelector);
        const contents: NodeListOf<HTMLElement> = document.querySelectorAll(contentSelector);

        const hideTabContent = (): void => {
            contents.forEach(content => {
                content.style.display = 'none';
            });
            tabs.forEach(tab => {
                tab.classList.remove(activeClass)
            })
        }
        const showTabContent = (i: number): void => {
            contents[i].style.display = 'block'
            tabs[i].classList.add(activeClass);
        }
        hideTabContent();
        showTabContent(0);

        header.addEventListener('click', (e: Event): void => {
            const target: Element = e.target as HTMLElement;
            if (target.classList.contains(tabSelector.replace(/\./, ""))
                || target.parentElement.classList.contains(tabSelector.replace(/\./, ""))) {
                tabs.forEach((tab, i): void => {
                    if (target == tab || target.parentNode == tab) {
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        });
    };

