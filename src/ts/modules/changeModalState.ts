import checkNumberInputs from './checkNumberInputs'

const changeModalState = (state: any): void => {
    const windowForms: NodeListOf<HTMLElement> = document.querySelectorAll('.balcon_icons_img');
    const windowWidth: NodeListOf<HTMLElement> = document.querySelectorAll('#width');
    const windowHeight: NodeListOf<HTMLElement> = document.querySelectorAll('#heigth');
    const windowType: NodeListOf<HTMLElement> = document.querySelectorAll('#view_type');
    const windowProfile: NodeListOf<HTMLElement> = document.querySelectorAll('.checkbox');

    checkNumberInputs('#width')
    checkNumberInputs('#heigth')


    const bindActionToElems = (e, elem, prop): void => {
        elem.forEach((item, i): void => {
            item.addEventListener(e, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i
                        break
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = i === 0 ? 'Холодное' : 'Теплое';
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        state[prop] = item.value;
                        break
                    case 'SELECT':
                        state[prop] = item.value;
                        break
                }
            });
        });
    }
    bindActionToElems('click', windowForms, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');


}

export default changeModalState