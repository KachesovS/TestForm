// Функция для вывода ошибок в консоль
function logErrorToConsole(message) {
    console.error(`Ошибка: ${message}`);
}

// Обработчики событий для формы
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('medicalForm');
    const saveButton = document.getElementById('saveButton');
    const snilsInput = document.getElementById('snils');
    const dobInput = document.getElementById('dob');
    const allergiesInput = document.getElementById('allergies');
    const bloodTypeCheckboxes = document.querySelectorAll('input[name="bloodType"]');

    // Сохранение формы
    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Форма успешно сохранена!');
        // Раскомментируйте для очистки формы
        // form.reset();
    });

    // Отправка формы
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Форма успешно отправлена!');
    });

    // Валидация аллергий
    allergiesInput.addEventListener('blur', function() {
        alert('Вы ввели информацию об аллергиях!');
    });

    // Валидация СНИЛС
    snilsInput.addEventListener('blur', function() {
        this.classList.toggle('invalid', this.value.length < 15);
    });

    // Форматирование даты рождения
    dobInput.addEventListener('input', function() {
        const value = this.value;
        
        // Ограничение длины
        if (value.length > 10) {
            this.value = value.slice(0, 10);
            return;
        }
        
        // Автоматическое добавление точек
        if (value.length === 2 || value.length === 5) {
            this.value += '.';
        }
    });

    // Валидация группы крови
    bloodTypeCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const selected = Array.from(bloodTypeCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
                
            if (selected.length > 1) {
                logErrorToConsole('Выбрано более одной группы крови!');
            }
        });
    });
});
