const prevPageButton = document.getElementById("prev-page");
const nextPageButton = document.getElementById("next-page");
const pageNumberInput = document.getElementById("page-number");
const bookPageImage = document.getElementById("book-page");

// Начальная страница
let currentPage = 2;

// Функция для обновления изображения
function updatePage() {
    const fileIndex = Math.ceil(currentPage / 2); // Номер файла, где содержится текущая страница
    bookPageImage.src = `pages/${fileIndex}.png`;
    bookPageImage.alt = `Страницы ${fileIndex * 2 - 1}-${fileIndex * 2}`;
}

// Переход на предыдущую страницу
prevPageButton.addEventListener("click", () => {
    if (currentPage > 2) {
        currentPage -= 2;
        pageNumberInput.value = currentPage;
        updatePage();
    }
});

// Переход на следующую страницу
nextPageButton.addEventListener("click", () => {
    if (currentPage < 204) {
        currentPage += 2;
        pageNumberInput.value = currentPage;
        updatePage();
    }
});

// Обработчик ввода номера страницы
pageNumberInput.addEventListener("change", () => {
    const inputPage = parseInt(pageNumberInput.value, 10);
    if (!isNaN(inputPage) && inputPage >= 2 && inputPage <= 414) {
        currentPage = inputPage % 2 === 0 ? inputPage : inputPage - 1; // Если нечётное, корректируем
        updatePage();
    } else {
        alert("page number.");
        pageNumberInput.value = currentPage;
    }
});

// Загрузка начальной страницы при старте
document.addEventListener("DOMContentLoaded", () => {
    pageNumberInput.value = currentPage; // Устанавливаем текущий номер страницы в поле
    updatePage();
});
