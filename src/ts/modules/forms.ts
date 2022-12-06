const form = (): void => {
    const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form');
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');

    const message: MessageType = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что то пошло не так...'
    }

    const postData = async (url: string, data: string): Promise<string> => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    const clearInputs = (): void=> {
        inputs.forEach(input => {
            input.value = '';
        })
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            let statusMessage: Element = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            const formData = new FormData(form);

            postData('assets/server.php', formData);
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch( (): void => statusMessage.textContent = message.failure)
                .finally((): void => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000); 
                })
        })
    })
    
export default form