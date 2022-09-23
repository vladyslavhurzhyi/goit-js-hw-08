import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {};

const onFormInput = (event) => {
    const { name, value } = event.target;
    formData[name] = value;

    try {
        const stringifyData = JSON.stringify(formData);

        localStorage.setItem(LOCAL_STORAGE_KEY, stringifyData);
    } catch (error) {
        console.error(error);
    }
};

reedLocalStor();

function reedLocalStor() {
    const saveData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!saveData) {
        return;
    }

    try {
        const parseData = JSON.parse(saveData);

        Object.entries(parseData).forEach(([name, value]) => {
            formRef.elements[name].value = value;
        });
    } catch (error) {
        console.error(error);
    }
}

function resetForm() {
    event.preventDefault();

    console.log(formData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formRef.reset();
}

formRef.addEventListener('submit', resetForm);

formRef.addEventListener('input', throttle(onFormInput, 1000));
