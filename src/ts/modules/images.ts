export const images = (): void => {
    const imgPopup: HTMLDivElement = document.createElement('div');
    const workSection: Element = document.querySelector('.works');
    const bigImage: HTMLDivElement = document.createElement('img')

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage)

    workSection.addEventListener('click', (e: Event): void => {
        e.preventDefault()

        const target = e.target as HTMLElement;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex'
            const path  =  target.parentElement.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        if((target && target).matches('div.popup')) {
            imgPopup.style.display = 'none'
        }
    })
}

export default images