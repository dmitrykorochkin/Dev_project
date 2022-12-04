const form = (): void => {
    const forms:NodeListOf<HTMLFormElement> = document.querySelectorAll('form');
    const inputs:NodeListOf<HTMLInputElement> = document.querySelectorAll('input');

    const message:string = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что то пошло не так...'
    }

    const postData = async (url, data): => {
        document.querySelector('.stasus').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        })
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            const formData = new FormData(form);

            postData('assets/server.php', formData);
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch( () => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000); 
                })
        })
    })
}

export default form