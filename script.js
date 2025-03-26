document.getElementById('saveButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Форма успешно сохранена!');
    // Intentional bug: This should clear the form, but it doesn't.
    //document.getElementById('medicalForm').reset();
});

document.getElementById('medicalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма успешно отправлена!');
});

document.getElementById('allergies').addEventListener('blur', function() {
    alert('Вы ввели информацию об аллергиях!');
});

// Валидация СНИЛС
document.getElementById('snils').addEventListener('blur', function() {
    const snils = this.value;
    if (snils.length < 15) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});

// Валидация даты рождения
//document.getElementById('dob').addEventListener('blur', function() {
  // const dob = this.value;
   //const datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
   // if (!datePattern.test(dob)) {
       // alert('Пожалуйста, введите дату в формате дд.мм.гггг');
   // }
//});

// Ограничение ввода года
document.getElementById('dob').addEventListener('input', function() {
    const dob = this.value;
    if (dob.length > 10) {
        this.value = dob.slice(0, 10);
    }
    if (dob.length === 2 || dob.length === 5) {
        this.value += '.';
    }
});

// Intentional bug: This should validate the blood type, but it doesn't.
document.getElementById('bloodType').addEventListener('blur', function() {
    const bloodType = this.value.toUpperCase();
    if (!['A', 'B', 'AB', 'O'].includes(bloodType)) {
        alert('Неверная группа крови!');
    }
});
