const sectionsContainer = document.getElementById('sections');
const previewContainer = document.getElementById('preview');
const generatedCode = document.getElementById('generated-code');
const addSectionButton = document.getElementById('add-section');

// Dynamiczna zmiana szerokości i wysokości inputów oraz textarea
function resizeInput(input) {
    if (input.tagName === "TEXTAREA") {
        // Dynamiczna zmiana wysokości dla textarea
        input.style.height = '16px'; // Reset do minimalnej wysokości
        input.style.height = `${input.scrollHeight}px`; // Dopasowanie do treści
    } else {
        // Dynamiczna zmiana szerokości dla input
        const style = window.getComputedStyle(input);
        const paddingLeft = parseInt(style.paddingLeft, 10);
        const paddingRight = parseInt(style.paddingRight, 10);
        const maxWidth = 300; // Maksymalna szerokość, po której input przechodzi do textarea
        const textWidth = input.scrollWidth - paddingLeft - paddingRight;

        if (textWidth > maxWidth) {
            input.style.width = `${maxWidth}px`;
            input.style.height = "auto"; // Przełączamy na dynamiczne dopasowanie wysokości
            input.style.overflowWrap = "break-word";
        } else {
            input.style.width = `${Math.max(50, textWidth)}px`;
            input.style.height = "initial";
        }
    }
}

function updatePreviewAndCode() {
    const productName = document.getElementById('product-name').value || "Produkt bez nazwy";
    let htmlContent = `
<div class="customDescription-column customDescription-editorContent">
<div class="customDescription-clearfix2 customDescription-layer_element customDescription-row">
<div class="customDescription-cells_holder customDescription-clearfix2">
<div class="customDescription-html_widget customDescription-js-widget_holder customDescription-layer_element">
<div class="customDescription-html_editor customDescription-widget">
<h2>${productName}</h2>\n
<div class="customDescription-wrapper-opisy">`;

    const sections = sectionsContainer.querySelectorAll('.section');
    sections.forEach((section, index) => {
        const iconName = section.querySelector('.icon-path').value;
        const iconPath = `https://vobis.pl/Shared/Icon/${iconName}.png`;
        const headerText = section.querySelector('.header-text').value;
        const sectionText = section.querySelector('.section-text').value;
        const imagePath = section.querySelector('.image-path').value;
        const imageAlt = section.querySelector('.image-alt').value;

        htmlContent += `
        <section>
        <div class="customDescription-col-1-6"><img alt="ikona" class="customDescription-icon" src="${iconPath}" /></div>

<div class="customDescription-col-5-6">
<h3>${headerText}</h3>

<p>${sectionText}</p>

<p>&nbsp;</p>
<img alt="${imageAlt}" class="customDescription-object-fit_c" src="${imagePath}" /></div>
</section>`;
            });

    // Dodanie zamykających tagów </div>
    htmlContent += `
</div>
</div>
</div>
</div>
</div>
</div>`;

    previewContainer.innerHTML = htmlContent;
    generatedCode.value = htmlContent;
}

function createSection(template = null) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
    sectionDiv.innerHTML = `
        <label>Nazwa ikonki (ścieżka zostanie automatycznie wygenerowana):</label><br>
        <input type="text" class="icon-path" placeholder="Podaj nazwę ikonki" oninput="resizeInput(this)" value="${template ? template.iconName : ''}"><br><br>

        <label>Header sekcji:</label><br>
        <textarea class="header-text" placeholder="Podaj tekst nagłówka" oninput="resizeInput(this)">${template ? template.headerText : ''}</textarea><br><br>

        <label>Tekst sekcji:</label><br>
        <textarea class="section-text" placeholder="Podaj treść sekcji" oninput="resizeInput(this)">${template ? template.sectionText : ''}</textarea><br><br>

        <label>Ścieżka do obrazka:</label><br>
        <textarea class="image-path" placeholder="Podaj ścieżkę do obrazka" oninput="resizeInput(this)">${template ? template.imagePath : ''}</textarea><br><br>

        <label>Tekst alt dla obrazka:</label><br>
        <textarea class="image-alt" placeholder="Podaj tekst alternatywny" oninput="resizeInput(this)">${template ? template.imageAlt : ''}</textarea><br><br>

        <button onclick="removeSection(this)">Usuń sekcję</button>
        <button onclick="duplicateSection(this)">Duplikuj sekcję</button>
    `;

    const textareas = sectionDiv.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.style.height = '16px'; // Ustawiamy minimalną wysokość
        textarea.addEventListener('input', () => resizeInput(textarea)); // Dodajemy obsługę dynamicznej zmiany
    });

    sectionsContainer.appendChild(sectionDiv);
    updatePreviewAndCode();
}

function removeSection(button) {
    button.parentElement.remove();
    updatePreviewAndCode();
}

function duplicateSection(button) {
    const section = button.parentElement;
    const template = {
        iconName: section.querySelector('.icon-path').value,
        headerText: section.querySelector('.header-text').value,
        sectionText: section.querySelector('.section-text').value,
        imagePath: section.querySelector('.image-path').value,
        imageAlt: section.querySelector('.image-alt').value,
    };
    createSection(template);
}

// Aktualizacja nazwy produktu na bieżąco
document.getElementById('product-name').addEventListener('input', function () {
    resizeInput(this);
    updatePreviewAndCode(); // Wywołanie na bieżąco
});

addSectionButton.addEventListener('click', () => createSection());
sectionsContainer.addEventListener('input', updatePreviewAndCode);
