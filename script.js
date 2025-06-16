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


function addSection(sectionData = null) {
    const section = document.createElement("div");
    section.classList.add("section");
    
    // Domyślna ikona (jeśli nie ma zapisanej)
    const defaultIcon = {
        src: iconsList[0].path,
        alt: iconsList[0].name
    };
    
    // Ikona z zapisanych danych lub domyślna
    const icon = sectionData && sectionData.icon ? sectionData.icon : defaultIcon;
    
    section.innerHTML = `
        <div class="section-icon" onclick="openIconPopup(this)">
            <img src="${icon.src}" alt="${icon.alt}">
        </div>
        <div class="section-content">
            <input type="text" class="section-header" placeholder="Tytuł sekcji" oninput="updateCodeAndSave()" value="${sectionData ? sectionData.title || '' : ''}">
            <textarea oninput="adjustHeight(this); updateCodeAndSave()" class="section-text" placeholder="Treść sekcji">${sectionData ? sectionData.text || '' : ''}</textarea>
            <button class="add-image" onclick="openImagePopup(this)" data-url="${sectionData && sectionData.image ? sectionData.image.url || '' : ''}" data-alt="${sectionData && sectionData.image ? sectionData.image.alt || '' : ''}">Dodaj obrazek</button>
        </div>
        <div class="controls">
            <button class="duplicate" onclick="duplicateSection(this)">Duplikuj</button>
            <button class="delete" onclick="removeSection(this)">Usuń</button>
        </div>
    `;

    document.getElementById("sections").appendChild(section);
    
    // Jeśli mamy dane obrazka, ustawiamy tło przycisku
    if (sectionData && sectionData.image && sectionData.image.url) {
        const imageButton = section.querySelector(".add-image");
        const imageUrl = 'https://vobis.pl/Products/Zdj%C4%99cia%20do%20kart/' + sectionData.image.url + '.jpg';
        imageButton.style.backgroundImage = `url("${imageUrl}")`;
        imageButton.classList.add('has-image');
    }
    
    // Dostosuj wysokość textarea
    const textarea = section.querySelector(".section-text");
    adjustHeight(textarea);
    
    updateCode();
}

function adjustHeight(textarea) {
    textarea.style.height = 'auto'; // Ustawiamy wysokość na 'auto', aby zmniejszyć wysokość, jeśli tekst usuniemy
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Dostosowujemy wysokość na podstawie scrollHeight
  }

function removeSection(button) {
    button.closest(".section").remove();
    updateCode();
}

function duplicateSection(button) {
    const section = button.closest(".section").cloneNode(true);
    document.getElementById("sections").appendChild(section);
    updateCode();
}
function openIconPopup(iconElement) {
    const popup = document.getElementById('icon-popup');
    
    // Position the popup at the height of the clicked element
    const rect = iconElement.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    popup.style.top = (rect.top + scrollTop + 80) + 'px';
    popup.style.left = '40px';
    popup.style.display = 'block';

    const iconList = document.getElementById('icon-list');
    const searchInput = document.getElementById('icon-search');
    iconList.innerHTML = '';

    function renderIcons(filter = "") {
        iconList.innerHTML = "";
        const filteredIcons = iconsList.filter(icon => icon.name.toLowerCase().includes(filter.toLowerCase()));

        filteredIcons.forEach(icon => {
            const iconImg = document.createElement('img');
            iconImg.src = icon.path;
            iconImg.alt = icon.name;
            iconImg.style.cursor = 'pointer';
            iconImg.style.width = "50px"; 

            iconImg.addEventListener('click', function () {
                iconElement.innerHTML = `<img src="${icon.path}" alt="${icon.name}">`;
                popup.style.display = 'none';
                updateCodeAndSave();
            });

            iconList.appendChild(iconImg);
        });
    }

    // Initial rendering of the full list
    renderIcons();

    // Handle search
    searchInput.oninput = function () {
        renderIcons(searchInput.value);
    };

    document.getElementById('close-icon-popup').onclick = function () {
        popup.style.display = 'none';
    };
}

function openImagePopup(button) {
    const popup = document.getElementById('image-popup');
    
    // Position the popup at the height of the clicked element
    const rect = button.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    popup.style.top = (rect.top + scrollTop) + 'px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    
    popup.style.display = 'block';

    // Wypełnij pola bieżącymi wartościami, jeśli obrazek już istnieje
    const currentUrl = button.getAttribute('data-url') || '';
    const currentAlt = button.getAttribute('data-alt') || '';
    
    document.getElementById('image-url').value = currentUrl;
    document.getElementById('image-alt').value = currentAlt;

    document.getElementById('save-image').onclick = function () {
        const imageName = document.getElementById('image-url').value;
        const imageAlt = document.getElementById('image-alt').value;

        if (imageName || imageAlt) {
            const imageUrl = 'https://vobis.pl/Products/Zdj%C4%99cia%20do%20kart/' + imageName + '.jpg';
            
            // Ustaw tło przycisku
            button.style.backgroundImage = `url("${imageUrl}")`;
            button.classList.add('has-image');
            
            // Zachowaj dane obrazka jako atrybuty przycisku
            button.setAttribute('data-url', imageName);
            button.setAttribute('data-alt', imageAlt);
        } else {
            // Usuń tło jeśli nie podano nazwy
            button.style.backgroundImage = '';
            button.classList.remove('has-image');
            button.setAttribute('data-url', '');
            button.setAttribute('data-alt', '');
        }

        popup.style.display = 'none';
        updateCodeAndSave();
    };

    document.getElementById('close-image-popup').onclick = function () {
        popup.style.display = 'none';
    };
}

function updateCode() {
    const productName = document.getElementById("product-name").value;
    let code = `<div class="customDescription-column customDescription-editorContent">
<div class="customDescription-clearfix2 customDescription-layer_element customDescription-row">
<div class="customDescription-cells_holder customDescription-clearfix2">
<div class="customDescription-html_widget customDescription-js-widget_holder customDescription-layer_element">
<div class="customDescription-html_editor customDescription-widget">
<h2>${productName}</h2>

<div class="customDescription-wrapper-opisy">\n`;

    document.querySelectorAll(".section").forEach(section => {
        const iconImg = section.querySelector(".section-icon img");
        const iconUrl = iconImg ? iconImg.src : "";
        const title = section.querySelector(".section-header").value;
        const text = section.querySelector(".section-text").value;
        const imageButton = section.querySelector(".add-image");
        const imageName = imageButton.getAttribute('data-url');
        const imageAlt = imageButton.getAttribute('data-alt') || "";

        code += `  <section class="customDescription-clearfix">\n<p>&nbsp;</p>`;
        if (iconUrl) {
            code += `    \n<div class="customDescription-col-1-6">\n<img src="${iconUrl}" alt="Ikona" class="customDescription-icon">\n</div>\n`;
        }
        code += `    <div class="customDescription-col-5-6">\n<h3>${title}</h3>\n<p>${text}</p>\n`;

        if (imageName) {
            code += `    <img src="https://vobis.pl/Products/Zdj%C4%99cia%20do%20kart/${imageName}.jpg" alt="${imageAlt}" class="customDescription-object-fit_c"></div><p>&nbsp;</p>\n`;
        } else {
            code += `</div>\n`;
        }
        code += `</section>\n`;
    });

    code += `</div>\n</div>\n</div>\n</div>\n</div>\n</div>`;
    document.getElementById("code-output").textContent = code;
}


// Funkcja zapisująca dane do localStorage
function saveToLocalStorage() {
    const data = {
        productName: document.getElementById("product-name").value,
        sections: []
    };
    
    document.querySelectorAll(".section").forEach(section => {
        const iconImg = section.querySelector(".section-icon img");
        const sectionData = {
            icon: iconImg ? { src: iconImg.src, alt: iconImg.alt } : null,
            title: section.querySelector(".section-header").value,
            text: section.querySelector(".section-text").value,
            image: {
                url: section.querySelector(".add-image").getAttribute('data-url') || '',
                alt: section.querySelector(".add-image").getAttribute('data-alt') || ''
            }
        };
        data.sections.push(sectionData);
    });
    
    localStorage.setItem('productCardData', JSON.stringify(data));
}

// Funkcja wczytująca dane z localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('productCardData');
    if (!savedData) return;
    
    const data = JSON.parse(savedData);
    
    // Ustaw nazwę produktu
    document.getElementById("product-name").value = data.productName || '';
    
    // Wyczyść istniejące sekcje
    document.getElementById("sections").innerHTML = '';
    
    // Odtwórz sekcje
    if (data.sections && data.sections.length > 0) {
        data.sections.forEach(sectionData => {
            addSection(sectionData);
        });
    }
    
    updateCode();
}

function updateCodeAndSave() {
    updateCode();
    saveToLocalStorage();
}

function removeSection(button) {
    button.closest(".section").remove();
    updateCodeAndSave();
}

function duplicateSection(button) {
    const section = button.closest(".section").cloneNode(true);
    document.getElementById("sections").appendChild(section);
    updateCodeAndSave();
}

document.addEventListener("DOMContentLoaded", function() {
    loadFromLocalStorage();
});
