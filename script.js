const sectionsContainer = document.getElementById('sections');
const previewContainer = document.getElementById('preview');
const generatedCode = document.getElementById('generated-code');
const addSectionButton = document.getElementById('add-section');

let sectionCount = 0;

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
        const iconPath = section.querySelector('.icon-path').value;
        const headerText = section.querySelector('.header-text').value;
        const sectionText = section.querySelector('.section-text').value;
        const imagePath = section.querySelector('.image-path').value;
        const imageAlt = section.querySelector('.image-alt').value;

//         htmlContent += `
// <div class="section">
// <img src="${iconPath}" alt="ikona">
// <h2>${headerText}</h2>
// <p>${sectionText}</p>
// <img src="${imagePath}" alt="${imageAlt}">
// </div>`;
//     });

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

function createSection() {
    sectionCount++;
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
    sectionDiv.innerHTML = `
        <label>Ścieżka do ikonki:</label><br>
        <input type="text" class="icon-path" placeholder="Podaj ścieżkę do ikonki"><br><br>

        <label>Header sekcji:</label><br>
        <input type="text" class="header-text" placeholder="Podaj tekst nagłówka"><br><br>

        <label>Tekst sekcji:</label><br>
        <input type="text" class="section-text" placeholder="Podaj treść sekcji"><br><br>

        <label>Ścieżka do obrazka:</label><br>
        <input type="text" class="image-path" placeholder="Podaj ścieżkę do obrazka"><br><br>

        <label>Tekst alt dla obrazka:</label><br>
        <input type="text" class="image-alt" placeholder="Podaj tekst alternatywny"><br><br>

        <button onclick="removeSection(this)">Usuń sekcję</button>
    `;

    sectionsContainer.appendChild(sectionDiv);
    updatePreviewAndCode();
}

function removeSection(button) {
    button.parentElement.remove();
    updatePreviewAndCode();
}

addSectionButton.addEventListener('click', createSection);
sectionsContainer.addEventListener('input', updatePreviewAndCode);
document.getElementById('product-name').addEventListener('input', updatePreviewAndCode);