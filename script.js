const sectionsContainer = document.getElementById('sections');
const previewContainer = document.getElementById('preview');
const generatedCode = document.getElementById('generated-code');
const addSectionButton = document.getElementById('add-section');

// Lista ikon z nazwami i ścieżkami do miniatur
const iconsList = [
    { name: "check", path: "https://vobis.pl/Shared/Icon/check.png" },
    { name: "4k", path: "https://vobis.pl/Shared/Icon/4k.png" },
    { name: "4khdr01", path: "https://vobis.pl/Shared/Icon/4khdr01.png" },
    { name: "5g", path: "https://vobis.pl/Shared/Icon/5g.png" },
    { name: "allinone", path: "https://vobis.pl/Shared/Icon/allinone.png" },
    { name: "anc", path: "https://vobis.pl/Shared/Icon/anc.png" },
    { name: "androidtv", path: "https://vobis.pl/Shared/Icon/androidtv.png" },
    { name: "battery", path: "https://vobis.pl/Shared/Icon/battery.png" },
    { name: "bezpieczenstwo", path: "https://vobis.pl/Shared/Icon/bezpieczenstwo.png" },
    { name: "broken_phone", path: "https://vobis.pl/Shared/Icon/broken_phone.png" },
    { name: "bulb", path: "https://vobis.pl/Shared/Icon/bulb.png" },
    { name: "camera", path: "https://vobis.pl/Shared/Icon/camera.png" },
    { name: "chlodne_powietrze", path: "https://vobis.pl/Shared/Icon/chlodne_powietrze.png" },
    { name: "chromecast", path: "https://vobis.pl/Shared/Icon/chromecast.png" },
    { name: "colors", path: "https://vobis.pl/Shared/Icon/colors.png" },
    { name: "cpu", path: "https://vobis.pl/Shared/Icon/cpu.png" },
    { name: "dolbyatmos", path: "https://vobis.pl/Shared/Icon/dolbyatmos.png" },
    { name: "dolbyaudio", path: "https://vobis.pl/Shared/Icon/dolbyaudio.png" },
    { name: "dolbycinema", path: "https://vobis.pl/Shared/Icon/dolbycinema.png" },
    { name: "dolby-vision", path: "https://vobis.pl/Shared/Icon/dolby-vision.png" },
    { name: "eco", path: "https://vobis.pl/Shared/Icon/eco.png" },
    { name: "eye", path: "https://vobis.pl/Shared/Icon/eye.png" },
    { name: "finger", path: "https://vobis.pl/Shared/Icon/finger.png" },
    { name: "full_hd", path: "https://vobis.pl/Shared/Icon/full_hd.png" },
    { name: "gaming", path: "https://vobis.pl/Shared/Icon/gaming.png" },
    { name: "glosnik", path: "https://vobis.pl/Shared/Icon/glosnik.png" },
    { name: "hdd", path: "https://vobis.pl/Shared/Icon/hdd.png" },
    { name: "hdr", path: "https://vobis.pl/Shared/Icon/hdr.png" },
    { name: "hifi", path: "https://vobis.pl/Shared/Icon/hifi.png" },
    { name: "homecinema", path: "https://vobis.pl/Shared/Icon/homecinema.png" },
    { name: "homecinema01", path: "https://vobis.pl/Shared/Icon/homecinema01.png" },
    { name: "icon_2w1", path: "https://vobis.pl/Shared/Icon/icon_2w1.png" },
    { name: "icon_4g_lte", path: "https://vobis.pl/Shared/Icon/icon_4g_lte.png" },
    { name: "icon_4k_full_hd", path: "https://vobis.pl/Shared/Icon/icon_4k_full_hd.png" },
    { name: "icon_android", path: "https://vobis.pl/Shared/Icon/icon_android.png" },
    { name: "icon_bluetooth", path: "https://vobis.pl/Shared/Icon/icon_bluetooth.png" },
    { name: "icon_camera", path: "https://vobis.pl/Shared/Icon/icon_camera.png" },
    { name: "icon_card_memory", path: "https://vobis.pl/Shared/Icon/icon_card_memory.png" },
    { name: "icon_ddr3", path: "https://vobis.pl/Shared/Icon/icon_ddr3.png" },
    { name: "icon_ddr4", path: "https://vobis.pl/Shared/Icon/icon_ddr4.png" },
    { name: "icon_display_led", path: "https://vobis.pl/Shared/Icon/icon_display_led.png" },
    { name: "icon_dual_sim", path: "https://vobis.pl/Shared/Icon/icon_dual_sim.png" },
    { name: "icon_gps", path: "https://vobis.pl/Shared/Icon/icon_gps.png" },
    { name: "icon_graphic_card", path: "https://vobis.pl/Shared/Icon/icon_graphic_card.png" },
    { name: "icon_hdd_photo", path: "https://vobis.pl/Shared/Icon/icon_hdd_photo.png" },
    { name: "icon_hdmi", path: "https://vobis.pl/Shared/Icon/icon_hdmi.png" },
    { name: "icon_keyboard", path: "https://vobis.pl/Shared/Icon/icon_keyboard.png" },
    { name: "icon_nfc", path: "https://vobis.pl/Shared/Icon/icon_nfc.png" },
    { name: "icon_notebook", path: "https://vobis.pl/Shared/Icon/icon_notebook.png" },
    { name: "icon_ram", path: "https://vobis.pl/Shared/Icon/icon_ram.png" },
    { name: "icon_touchpad", path: "https://vobis.pl/Shared/Icon/icon_touchpad.png" },
    { name: "icon_usb3", path: "https://vobis.pl/Shared/Icon/icon_usb3.png" },
    { name: "ikony-vobis-fun", path: "https://vobis.pl/Shared/Icon/ikony-vobis-fun.png" },
    { name: "ios", path: "https://vobis.pl/Shared/Icon/ios.png" },
    { name: "jony", path: "https://vobis.pl/Shared/Icon/jony.png" },
    { name: "kontrast", path: "https://vobis.pl/Shared/Icon/kontrast.png" },
    { name: "lcd", path: "https://vobis.pl/Shared/Icon/lcd.png" },
    { name: "led", path: "https://vobis.pl/Shared/Icon/led.png" },
    { name: "like", path: "https://vobis.pl/Shared/Icon/like.png" },
    { name: "maszynka02", path: "https://vobis.pl/Shared/Icon/maszynka02.png" },
    { name: "microwave", path: "https://vobis.pl/Shared/Icon/microwave.png" },
  { name: "mini_pc", path: "https://vobis.pl/Shared/Icon/mini_pc.png" },
  { name: "mouse", path: "https://vobis.pl/Shared/Icon/mouse.png" },
  { name: "mute", path: "https://vobis.pl/Shared/Icon/mute.png" },
  { name: "netflix", path: "https://vobis.pl/Shared/Icon/netflix.png" },
  { name: "niszczarka", path: "https://vobis.pl/Shared/Icon/niszczarka.png" },
  { name: "no-frost", path: "https://vobis.pl/Shared/Icon/no-frost.png" },
  { name: "nosniki", path: "https://vobis.pl/Shared/Icon/nosniki.png" },
  { name: "old_phone", path: "https://vobis.pl/Shared/Icon/old_phone.png" },
  { name: "paper_icon_1", path: "https://vobis.pl/Shared/Icon/paper_icon_1.png" },
  { name: "paper_icon_2", path: "https://vobis.pl/Shared/Icon/paper_icon_2.png" },
  { name: "phone", path: "https://vobis.pl/Shared/Icon/phone.png" },
  { name: "phone_2", path: "https://vobis.pl/Shared/Icon/phone_2.png" },
  { name: "plyta_glowna", path: "https://vobis.pl/Shared/Icon/plyta_glowna.png" },
  { name: "pokretlo", path: "https://vobis.pl/Shared/Icon/pokretlo.png" },
  { name: "poweradapter", path: "https://vobis.pl/Shared/Icon/poweradapter.png" },
  { name: "print_icon", path: "https://vobis.pl/Shared/Icon/print_icon.png" },
  { name: "printer", path: "https://vobis.pl/Shared/Icon/printer.png" },
  { name: "procent_icon", path: "https://vobis.pl/Shared/Icon/procent_icon.png" },
  { name: "remote_control", path: "https://vobis.pl/Shared/Icon/remote_control.png" },
  { name: "router", path: "https://vobis.pl/Shared/Icon/router.png" },
  { name: "router1", path: "https://vobis.pl/Shared/Icon/Router1.png" },
  { name: "router2", path: "https://vobis.pl/Shared/Icon/router2.png" },
  { name: "running", path: "https://vobis.pl/Shared/Icon/running.png" },
  { name: "scan_icon", path: "https://vobis.pl/Shared/Icon/scan_icon.png" },
  { name: "sd_card", path: "https://vobis.pl/Shared/Icon/sd_card.png" },
  { name: "sen", path: "https://vobis.pl/Shared/Icon/sen.png" },
  { name: "shave21", path: "https://vobis.pl/Shared/Icon/shave21.png" },
  { name: "shave31", path: "https://vobis.pl/Shared/Icon/shave31.png" },
  { name: "shave41", path: "https://vobis.pl/Shared/Icon/shave41.png" },
  { name: "signal", path: "https://vobis.pl/Shared/Icon/signal.png" },
  { name: "size_icon", path: "https://vobis.pl/Shared/Icon/size_icon.png" },
  { name: "sluchawki-do-uszne", path: "https://vobis.pl/Shared/Icon/sluchawki-do-uszne.png" },
  { name: "sluchawki-nauszne", path: "https://vobis.pl/Shared/Icon/sluchawki-nauszne.png" },
  { name: "smart_tv", path: "https://vobis.pl/Shared/Icon/smart_tv.png" },
  { name: "smartwatch", path: "https://vobis.pl/Shared/Icon/smartwatch.png" },
  { name: "sound01", path: "https://vobis.pl/Shared/Icon/sound01.png" },
  { name: "sound02", path: "https://vobis.pl/Shared/Icon/sound02.png" },
  { name: "ssd1", path: "https://vobis.pl/Shared/Icon/ssd(1).png" },
  { name: "ssd", path: "https://vobis.pl/Shared/Icon/ssd.png" },
  { name: "sshd", path: "https://vobis.pl/Shared/Icon/sshd.png" },
  { name: "stacjonarny", path: "https://vobis.pl/Shared/Icon/stacjonarny.png" },
  { name: "suszarka", path: "https://vobis.pl/Shared/Icon/suszarka.png" },
  { name: "szeroki_kat", path: "https://vobis.pl/Shared/Icon/szeroki_kat.png" },
  { name: "temperatura", path: "https://vobis.pl/Shared/Icon/temperatura.png" },
  { name: "time_icon", path: "https://vobis.pl/Shared/Icon/time_icon.png" },
  { name: "touchscreen", path: "https://vobis.pl/Shared/Icon/touchscreen.png" },
  { name: "tv", path: "https://vobis.pl/Shared/Icon/tv.png" },
  { name: "usb", path: "https://vobis.pl/Shared/Icon/usb.png" },
  { name: "vacuum", path: "https://vobis.pl/Shared/Icon/vacuum.png" },
  { name: "water_icon", path: "https://vobis.pl/Shared/Icon/water_icon.png" },
  { name: "wifi", path: "https://vobis.pl/Shared/Icon/wifi.png" },
  { name: "wireless", path: "https://vobis.pl/Shared/Icon/wireless.png" },
  { name: "wzornictwo", path: "https://vobis.pl/Shared/Icon/wzornictwo.png" },
  { name: "zlacza", path: "https://vobis.pl/Shared/Icon/zlacza.png" } ,
  { name: "Ikony-AI", path: "https://vobis.pl/Shared/Icon/Ikony_AI.png" } ,
  { name: "airfryer", path: "https://vobis.pl/Shared/Icon/Ikony_airfryer.png" },
  { name: "blender", path: "https://vobis.pl/Shared/Icon/Ikony_blender.png" },
  { name: "blyskawica", path: "https://vobis.pl/Shared/Icon/Ikony_blyskawica.png" },
  { name: "butelka_do_wody", path: "https://vobis.pl/Shared/Icon/Ikony_butelka%20do%20wody.png" },
  { name: "czajnik", path: "https://vobis.pl/Shared/Icon/Ikony_czajnik.png" },
  { name: "dron", path: "https://vobis.pl/Shared/Icon/Ikony_dron.png" },
  { name: "ekspres_do_kawy", path: "https://vobis.pl/Shared/Icon/Ikony_ekspres%20do%20kawy.png" },
  { name: "filtr_do_wody", path: "https://vobis.pl/Shared/Icon/Ikony_filtr%20do%20wody.png" },
  { name: "frytki", path: "https://vobis.pl/Shared/Icon/Ikony_frytki.png" },
  { name: "grill", path: "https://vobis.pl/Shared/Icon/Ikony_grill.png" },
  { name: "hulajnoga", path: "https://vobis.pl/Shared/Icon/Ikony_hulajnoga.png" },
  { name: "jedzenie", path: "https://vobis.pl/Shared/Icon/Ikony_jedzenie.png" },
  { name: "kamerka_go_pro", path: "https://vobis.pl/Shared/Icon/Ikony_kamerka%20go%20pro.png" },
  { name: "kolo_zebate", path: "https://vobis.pl/Shared/Icon/Ikony_kolo%20zebate.png" },
  { name: "konsola_do_gier", path: "https://vobis.pl/Shared/Icon/Ikony_konsola%20do%20gier.png" },
  { name: "ladowarka_indukcyjna", path: "https://vobis.pl/Shared/Icon/Ikony_ladowarka%20indukcyjna.png" },
  { name: "lodowka", path: "https://vobis.pl/Shared/Icon/Ikony_lodowka.png" },
  { name: "toster", path: "https://vobis.pl/Shared/Icon/Ikony_toster.png" },
  { name: "logo_apple", path: "https://vobis.pl/Shared/Icon/Ikony_logo%20apple.png" },
  { name: "usb-c", path: "https://vobis.pl/Shared/Icon/Ikony_usb-c.png" },
  { name: "logo_samsung", path: "https://vobis.pl/Shared/Icon/Ikony_logo%20samsung.png" },
  { name: "waga", path: "https://vobis.pl/Shared/Icon/Ikony_waga.png" },
  { name: "warstwy", path: "https://vobis.pl/Shared/Icon/Ikony_warstwy.png" },
  { name: "lokalizacja", path: "https://vobis.pl/Shared/Icon/Ikony_lokalizacja.png" },
  { name: "lokowka", path: "https://vobis.pl/Shared/Icon/Ikony_lokowka.png" },
  { name: "nutka", path: "https://vobis.pl/Shared/Icon/Ikony_nutka.png" },
  { name: "oczyszczacz_powietrza", path: "https://vobis.pl/Shared/Icon/Ikony_oczyszczacz%20powietrza.png" },
  { name: "pieniadze", path: "https://vobis.pl/Shared/Icon/Ikony_pieniadze.png" },
  { name: "pierscien", path: "https://vobis.pl/Shared/Icon/Ikony_pierscien.png" },
  { name: "pomiar_tetna", path: "https://vobis.pl/Shared/Icon/Ikony_pomiar%20tetna.png" },
  { name: "powerbank", path: "https://vobis.pl/Shared/Icon/Ikony_powerbank.png" },
  { name: "pralka", path: "https://vobis.pl/Shared/Icon/Ikony_pralka.png" },
  { name: "prostownica", path: "https://vobis.pl/Shared/Icon/Ikony_prostownica.png" },
  { name: "rower", path: "https://vobis.pl/Shared/Icon/Ikony_rower.png" },
  { name: "saturator", path: "https://vobis.pl/Shared/Icon/Ikony_saturator.png" },
  { name: "smartwatch2", path: "https://vobis.pl/Shared/Icon/Ikony_smartwatch.png" },
  { name: "SOS", path: "https://vobis.pl/Shared/Icon/Ikony_SOS.png" },
  { name: "telefon", path: "https://vobis.pl/Shared/Icon/Ikony_telefon.png" },
  { name: "odkurzacz_pionowy", path: "https://vobis.pl/Shared/Icon/ikony_odkurzacz_pionowy.png" },
  { name: "chleb", path: "https://vobis.pl/Shared/Icon/ikony_chleb.png" },
  { name: "blender_reczny", path: "https://vobis.pl/Shared/Icon/ikony_blender_reczny.png" },
  { name: "robot_kuchenny", path: "https://vobis.pl/Shared/Icon/ikony_robot_kuchenny.png" },
  { name: "mieso", path: "https://vobis.pl/Shared/Icon/ikony_mieso.png" },
  { name: "szklanka", path: "https://vobis.pl/Shared/Icon/ikony_szklanka.png" },
  { name: "wentylator", path: "https://vobis.pl/Shared/Icon/ikony_wentylator.png" },
  { name: "dom", path: "https://vobis.pl/Shared/Icon/Ikony_dom.png" },
  { name: "mikser", path: "https://vobis.pl/Shared/Icon/Ikony_mikser.png" },
  { name: "mop", path: "https://vobis.pl/Shared/Icon/Ikony_mop.png" },
  { name: "owoce", path: "https://vobis.pl/Shared/Icon/Ikony_owoce.png" },
  { name: "plecak", path: "https://vobis.pl/Shared/Icon/Ikony_plecak.png" },
  { name: "sprzatanie", path: "https://vobis.pl/Shared/Icon/Ikony_sprzatanie.png" },
  { name: "szczoteczka_do_zebow", path: "https://vobis.pl/Shared/Icon/Ikony_szczoteczka_do_zebow.png" },
  { name: "termos", path: "https://vobis.pl/Shared/Icon/Ikony_termos.png" },
  { name: "torba", path: "https://vobis.pl/Shared/Icon/Ikony_torba.png" },
  { name: "warzywa", path: "https://vobis.pl/Shared/Icon/Ikony_warzywa.png" },
  { name: "zelazko", path: "https://vobis.pl/Shared/Icon/Ikony_zelazko.png" },
  { name: "airpods", path: "https://vobis.pl/Shared/Icon/Ikony_airpods.png" },
  { name: "cisnieniomierz", path: "https://vobis.pl/Shared/Icon/Ikony_cinieniomierz.png" },
  { name: "ekspres przelewowy", path: "https://vobis.pl/Shared/Icon/Ikony_ekspres_przelewowy.png" },
  { name: "filtr", path: "https://vobis.pl/Shared/Icon/Ikony_filtr.png" },
  { name: "kostki lodu", path: "https://vobis.pl/Shared/Icon/Ikony_kostki_lodu.png" },
  { name: "lody", path: "https://vobis.pl/Shared/Icon/Ikony_lody.png" },
  { name: "opiekacz", path: "https://vobis.pl/Shared/Icon/Ikony_opiekacz.png" },
  { name: "podmuch", path: "https://vobis.pl/Shared/Icon/Ikony_podmuch.png" },
  { name: "pogoda", path: "https://vobis.pl/Shared/Icon/Ikony_pogoda.png" },
  { name: "pulsometr", path: "https://vobis.pl/Shared/Icon/Ikony_pulsometr.png" },
  { name: "ryba", path: "https://vobis.pl/Shared/Icon/Ikony_ryba.png" },
  { name: "serduszko", path: "https://vobis.pl/Shared/Icon/Ikony_serduszko.png" },
  { name: "torba na laptopa", path: "https://vobis.pl/Shared/Icon/Ikony_torba_na_laptopa.png" },
  { name: "ubranie", path: "https://vobis.pl/Shared/Icon/Ikony_ubranie.png" },
  { name: "ząb", path: "https://vobis.pl/Shared/Icon/Ikony_zab.png" },
  { name: "mikrofon", path: "https://vobis.pl/Shared/Icon/Ikony_mikrofon.png" },
  { name: "glosnik2", path: "https://vobis.pl/Shared/Icon/Ikony_glosnik_2.png" },
  { name: "glosnik bezprzewodowy2", path: "https://vobis.pl/Shared/Icon/Ikony_glosnik_bezprzewodowy_2.png" }
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
        <section class="customDescription-clearfix">
        <p>&nbsp;</p>
        <div class="customDescription-col-1-6"><img alt="ikona" class="customDescription-icon" src="${iconPath}" /></div>

<div class="customDescription-col-5-6">
<h3>${headerText}</h3>

<p>${sectionText}</p>

<p>&nbsp;</p>
<img alt="${imageAlt}" class="customDescription-object-fit_c" src="https://vobis.pl/Products/Zdj%C4%99cia%20do%20kart/${imagePath}.jpg" /></div>
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
    if (activeIconPicker) return; // Jeśli picker jest otwarty, nie otwieraj ponownie.

    const iconPicker = document.createElement('div');
    iconPicker.className = 'icon-picker';
    iconPicker.style.position = 'absolute';
    iconPicker.style.background = '#fff';
    iconPicker.style.border = '1px solid #ccc';
    iconPicker.style.padding = '10px';
    iconPicker.style.zIndex = '1000';
    iconPicker.style.width = '300px'; // Szerokość pickera
    iconPicker.style.maxHeight = '400px'; // Maksymalna wysokość pickera
    iconPicker.style.overflowY = 'scroll'; // Scrollbar dla pickera

    // Pole wyszukiwania
    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Wyszukaj ikonę...';
    searchBar.style.width = 'calc(100% - 20px)';
    searchBar.style.marginBottom = '10px';
    searchBar.style.padding = '5px';
    searchBar.style.border = '1px solid #ccc';
    searchBar.style.borderRadius = '4px';
    searchBar.style.outline = 'none';

    iconPicker.appendChild(searchBar);

    const iconGrid = document.createElement('div');
    iconGrid.style.display = 'grid';
    iconGrid.style.gridTemplateColumns = 'repeat(5, 1fr)';
    iconGrid.style.gap = '10px';
    iconPicker.appendChild(iconGrid);

    // Funkcja do renderowania ikon
    function renderIcons(filter = '') {
        iconGrid.innerHTML = ''; // Czyszczenie ikon
        const filteredIcons = iconsList.filter(icon =>
            icon.name.toLowerCase().includes(filter.toLowerCase())
        );

        filteredIcons.forEach(icon => {
            const iconItem = document.createElement('div');
            iconItem.style.cursor = 'pointer';
            iconItem.style.display = 'flex';
            iconItem.style.justifyContent = 'center';
            iconItem.style.alignItems = 'center';
            iconItem.innerHTML = `<img src="${icon.path}" alt="${icon.name}" style="width: 50px; height: 50px;">`;
            iconItem.onclick = () => {
                iconHolder.dataset.iconName = icon.name;
                iconHolder.querySelector('img').src = icon.path;
                closeIconPicker();
                updatePreviewAndCode();
                saveSessionData();
            };
            iconGrid.appendChild(iconItem);
        });
    }

    renderIcons(); // Renderowanie ikon początkowo bez filtra

    searchBar.addEventListener('input', () => {
        renderIcons(searchBar.value); // Aktualizacja ikon na podstawie wyszukiwania
    });

    document.body.appendChild(iconPicker);
    activeIconPicker = iconPicker;

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

// Klucz do przechowywania danych sesji
const SESSION_STORAGE_KEY = 'editorSessionData';

// Funkcja zapisująca aktualny stan do localStorage
function saveSessionData() {
  const sessionData = {
    productName: document.getElementById('product-name').value,
    sections: []
  };
  
  // Zbierz dane ze wszystkich sekcji
  const sections = sectionsContainer.querySelectorAll('.section');
  sections.forEach(section => {
    sessionData.sections.push({
      iconName: section.querySelector('.icon-holder').dataset.iconName,
      headerText: section.querySelector('.header-text').value,
      sectionText: section.querySelector('.section-text').value,
      imagePath: section.querySelector('.image-path').value,
      imageAlt: section.querySelector('.image-alt').value
    });
  });
  
  // Zapisz dane w localStorage
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
}

// Funkcja wczytująca dane sesji z localStorage
function loadSessionData() {
  const savedData = localStorage.getItem(SESSION_STORAGE_KEY);
  if (!savedData) return;
  
  const sessionData = JSON.parse(savedData);
  
  // Ustaw nazwę produktu
  if (sessionData.productName) {
    document.getElementById('product-name').value = sessionData.productName;
    resizeInput(document.getElementById('product-name'));
  }
  
  // Wczytaj sekcje, jeśli istnieją
  if (sessionData.sections && sessionData.sections.length > 0) {
    // Wyczyść istniejące sekcje
    sectionsContainer.innerHTML = '';
    
    // Dodaj sekcje z zapisanych danych
    sessionData.sections.forEach(sectionData => {
      createSection(sectionData);
    });
  }
  
  // Zaktualizuj podgląd
  updatePreviewAndCode();
}

// Podpięcie funkcji zapisującej do zdarzeń
function setupAutoSave() {
  // Zapisz przy każdej zmianie w sekcji
  sectionsContainer.addEventListener('input', function(e) {
    saveSessionData();
  });
  
  // Zapisz przy zmianie nazwy produktu
  document.getElementById('product-name').addEventListener('input', function() {
    saveSessionData();
  });
  
  // Zapisz po dodaniu, usunięciu lub duplikacji sekcji
  const originalCreateSection = createSection;
  createSection = function(template) {
    originalCreateSection(template);
    saveSessionData();
  };
  
  const originalRemoveSection = removeSection;
  removeSection = function(button) {
    originalRemoveSection(button);
    saveSessionData();
  };
  
  const originalDuplicateSection = duplicateSection;
  duplicateSection = function(button) {
    originalDuplicateSection(button);
    saveSessionData();
  };
}

// Inicjalizacja przy załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
  // Najpierw wczytaj zapisane dane
  loadSessionData();
  
  // Następnie skonfiguruj automatyczne zapisywanie
  setupAutoSave();
});

// Funkcja czyszcząca wszystkie pola
function clearAllData() {
    // Wyczyść nazwę produktu
    document.getElementById('product-name').value = '';
    resizeInput(document.getElementById('product-name'));
    
    // Wyczyść wszystkie sekcje
    sectionsContainer.innerHTML = '';
    
    // Dodaj pustą sekcję, aby interfejs nie był pusty
    createSection();
    
    // Wyczyść dane z localStorage
    localStorage.removeItem(SESSION_STORAGE_KEY);
    
    // Aktualizuj podgląd i wygenerowany kod
    updatePreviewAndCode();
  }
  
  // Dodaj przycisk czyszczenia do interfejsu
  function addClearButton() {
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Wyczyść wszystko';
    clearButton.id = 'clear-button';
    clearButton.onclick = clearAllData;
    clearButton.style.marginLeft = "10px";
    
    // Możesz dodać przycisk w dowolne miejsce w interfejsie
    // Na przykład, obok przycisku "Dodaj sekcję"
    document.getElementById('add-section').insertAdjacentElement('afterend', clearButton);
  }
  
  // Wywołaj tę funkcję podczas inicjalizacji
  document.addEventListener('DOMContentLoaded', function() {
    // Najpierw wczytaj zapisane dane
    loadSessionData();
    
    // Następnie skonfiguruj automatyczne zapisywanie
    setupAutoSave();
    
    // Dodaj przycisk czyszczenia
    addClearButton();
  });
