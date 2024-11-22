 // JavaScript для управления отображением и переходом по проектам
 document.getElementById('project-dropdown').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const selector = document.getElementById('project-selector');
    
    // Переключаем видимость ползунка
    if (selector.style.display === 'none' || selector.style.display === '') {
        selector.style.display = 'block';
    } else {
        selector.style.display = 'none';
    }
});
document.getElementById('projects').addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue) {
        window.location.href = selectedValue; // Переход на выбранный проект
    }
});
 // Закрытие ползунка при клике вне его
 document.addEventListener('click', function(event) {
    const selector = document.getElementById('project-selector');
    const dropdown = document.getElementById('project-dropdown');
    if (!dropdown.contains(event.target) && !selector.contains(event.target)) {
        selector.style.display = 'none'; // Скрыть ползунок, если кликнули вне его
    }
});