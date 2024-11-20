const sectionsContainer = document.getElementById('sections');
const previewContainer = document.getElementById('preview');
const generatedCode = document.getElementById('generated-code');
const addSectionButton = document.getElementById('add-section');

// Lista ikon z nazwami i ścieżkami do miniatur
const iconsList = [
    { name: "check", path: "https://vobis.pl/Shared/Icon/check.png" },
    { name: "bezpieczenstwo", path: "https://vobis.pl/Shared/Icon/bezpieczenstwo.png" },
    { name: "4k", path: "https://vobis.pl/Shared/Icon/4k.png" },
    { name: "5g", path: "https://vobis.pl/Shared/Icon/5g.png" },
    { name: "camera", path: "https://vobis.pl/Shared/Icon/camera.png" },
    { name: "battery", path: "https://vobis.pl/Shared/Icon/battery.png" },
    { name: "bulb", path: "https://vobis.pl/Shared/Icon/bulb.png" },
    { name: "chlodne_powietrze", path: "https://vobis.pl/Shared/Icon/chlodne_powietrze.png" },
    { name: "chromecast", path: "https://vobis.pl/Shared/Icon/chromecast.png" },
    { name: "colors", path: "https://vobis.pl/Shared/Icon/colors.png" },
    { name: "cpu", path: "https://vobis.pl/Shared/Icon/cpu.png" },
    { name: "eye", path: "https://vobis.pl/Shared/Icon/eye.png" },
    { name: "finger", path: "https://vobis.pl/Shared/Icon/finger.png" },
    { name: "eco", path: "https://vobis.pl/Shared/Icon/eco.png" },
    { name: "glosnik", path: "https://vobis.pl/Shared/Icon/glosnik.png" },
    { name: "full_hd", path: "https://vobis.pl/Shared/Icon/full_hd.png" },
    { name: "icon_bluetooth", path: "https://vobis.pl/Shared/Icon/icon_bluetooth.png" },
    { name: "icon_touchpad", path: "https://vobis.pl/Shared/Icon/icon_touchpad.png" },
    { name: "jony", path: "https://vobis.pl/Shared/Icon/jony.png" },
    { name: "kontrast", path: "https://vobis.pl/Shared/Icon/kontrast.png" },
    { name: "like", path: "https://vobis.pl/Shared/Icon/like.png" },
    { name: "phone", path: "https://vobis.pl/Shared/Icon/phone.png" },
    { name: "sd_card", path: "https://vobis.pl/Shared/Icon/sd_card.png" },
    { name: "sen", path: "https://vobis.pl/Shared/Icon/sen.png" },
    { name: "signal", path: "https://vobis.pl/Shared/Icon/signal.png" },
    { name: "size_icon", path: "https://vobis.pl/Shared/Icon/size_icon.png" },
    { name: "smartwatch", path: "https://vobis.pl/Shared/Icon/smartwatch.png" },
    { name: "szeroki_kat", path: "https://vobis.pl/Shared/Icon/szeroki_kat.png" },
    { name: "tv", path: "https://vobis.pl/Shared/Icon/tv.png" },
    { name: "water_icon", path: "https://vobis.pl/Shared/Icon/water_icon.png" },

];

// Dynamiczna zmiana szerokości i wysokości inputów oraz textarea
function resizeInput(input) {
    if (input.tagName === "TEXTAREA") {
        input.style.height = '16px'; // Reset do minimalnej wysokości
        input.style.height = `${input.scrollHeight}px`; // Dopasowanie do treści
    } else {
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

function getIconPath(iconName) {
    const icon = iconsList.find(icon => icon.name === iconName);
    return icon ? icon.path : '';
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
    sections.forEach((section) => {
        const iconName = section.querySelector('.icon-holder').dataset.iconName;
        const iconPath = getIconPath(iconName);
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
        <label>Ikona:</label><br>
        <div class="icon-holder" data-icon-name="${template ? template.iconName : iconsList[0].name}" onclick="openIconPicker(this)">
            <img src="${template ? getIconPath(template.iconName) : iconsList[0].path}" alt="Wybrana ikona" class="icon-preview" style="width: 24px; height: 24px; cursor: pointer;">
        </div><br><br>

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

    sectionsContainer.appendChild(sectionDiv);
    updatePreviewAndCode();
}

//icon picker
let activeIconPicker = null; // Przechowuje aktywny picker

function openIconPicker(iconHolder) {
    // Sprawdź, czy picker już istnieje
    if (activeIconPicker) return;

    const iconPicker = document.createElement('div');
    iconPicker.className = 'icon-picker';
    iconPicker.style.position = 'absolute';
    iconPicker.style.background = '#fff';
    iconPicker.style.border = '1px solid #ccc';
    iconPicker.style.padding = '10px';
    iconPicker.style.display = 'grid';
    iconPicker.style.gridTemplateColumns = 'repeat(5, 1fr)'; // 5 kolumn
    iconPicker.style.gap = '10px';
    iconPicker.style.zIndex = '1000';

    iconsList.forEach(icon => {
        const iconItem = document.createElement('div');
        iconItem.style.cursor = 'pointer';
        iconItem.style.display = 'flex';
        iconItem.style.justifyContent = 'center';
        iconItem.style.alignItems = 'center';
        iconItem.innerHTML = `<img src="${icon.path}" alt="${icon.name}" style="width: 50px; height: 50px;">`; // Większe ikony
        iconItem.onclick = () => {
            iconHolder.dataset.iconName = icon.name;
            iconHolder.querySelector('img').src = icon.path;
            closeIconPicker(); // Zamknij picker po wybraniu ikony
            updatePreviewAndCode();
        };
        iconPicker.appendChild(iconItem);
    });

    document.body.appendChild(iconPicker);
    activeIconPicker = iconPicker; // Ustawiamy aktualny picker

    const rect = iconHolder.getBoundingClientRect();
    iconPicker.style.left = `${rect.left}px`;
    iconPicker.style.top = `${rect.bottom + window.scrollY}px`;
}

function closeIconPicker() {
    if (activeIconPicker) {
        document.body.removeChild(activeIconPicker);
        activeIconPicker = null;
    }
}

// Obsługa kliknięcia
document.addEventListener('click', (event) => {
    const target = event.target;

    // Otwórz picker tylko po kliknięciu w element z klasą .icon-holder
    if (target.closest('.icon-holder')) {
        const iconHolder = target.closest('.icon-holder');
        openIconPicker(iconHolder);
    } else if (activeIconPicker && !target.closest('.icon-picker')) {
        // Zamknij picker, jeśli kliknięto poza nim
        closeIconPicker();
    }
});

//koniec icon pickera


function removeSection(button) {
    button.parentElement.remove();
    updatePreviewAndCode();
}

function duplicateSection(button) {
    const section = button.parentElement;
    const template = {
        iconName: section.querySelector('.icon-holder').dataset.iconName,
        headerText: section.querySelector('.header-text').value,
        sectionText: section.querySelector('.section-text').value,
        imagePath: section.querySelector('.image-path').value,
        imageAlt: section.querySelector('.image-alt').value,
    };
    createSection(template);
}

document.getElementById('product-name').addEventListener('input', function () {
    resizeInput(this);
    updatePreviewAndCode();
});

addSectionButton.addEventListener('click', () => createSection());
sectionsContainer.addEventListener('input', updatePreviewAndCode);
