import checkNumberInputs from './checkNumberInputs'

const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#heigth');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');

    checkNumberInputs('#width')
    checkNumberInputs('#heigth')


    const bindActionToElems = (e, elem, prop) => {
        elem.forEach((item, i) => {
            item.addEventListener(e, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        console.log('span');
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            console.log('checkbox');
                        } else {
                            console.log('input');
                        }
                        break
                    case 'SELECT' :
                        console.log('select');
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