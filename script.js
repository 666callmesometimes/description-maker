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
    
    // Domyślna ikona
    const defaultIcon = {
        src: iconsList[0].path,
        alt: iconsList[0].name
    };
    
    // Wybierz odpowiednią ikonę
    let icon = defaultIcon;
    if (sectionData && sectionData.icon) {
        if (sectionData.icon.name) {
            // Najpierw spróbuj znaleźć po nazwie
            const foundIcon = iconsList.find(i => i.name === sectionData.icon.name);
            if (foundIcon) {
                icon = { src: foundIcon.path, alt: foundIcon.name };
            } else if (sectionData.icon.path) {
                // Jeśli nie znaleziono po nazwie, spróbuj po ścieżce
                const foundByPath = iconsList.find(i => i.path === sectionData.icon.path);
                if (foundByPath) {
                    icon = { src: foundByPath.path, alt: foundByPath.name };
                } else {
                    // Użyj bezpośrednio z importowanych danych
                    icon = { src: sectionData.icon.path, alt: sectionData.icon.name || "" };
                }
            }
        } else if (sectionData.icon.path) {
            // Fallback: tylko ścieżka
            icon = { src: sectionData.icon.path, alt: sectionData.icon.name || "" };
        } else if (sectionData.icon.src) {
            // Wsparcie dla starego formatu
            icon = { src: sectionData.icon.src, alt: sectionData.icon.alt || "" };
        }
    }
    
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
    
    // Automatyczne uzupełnienie alt nazwą produktu jeśli pole jest puste
    const productName = document.getElementById("product-name").value;
    const altValue = currentAlt || productName;
    
    document.getElementById('image-url').value = currentUrl;
    document.getElementById('image-alt').value = altValue;

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
            icon: iconImg ? { 
                name: iconImg.alt, 
                path: iconImg.src 
            } : null,
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


//parse'owanie kodu html

function importProductCard() {
    const importCode = document.getElementById('import-code').value.trim();
    
    if (!importCode) {
        alert('Proszę wkleić kod HTML karty produktowej');
        return;
    }
    
    try {
        // Parsuj HTML za pomocą DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(importCode, 'text/html');
        
        // Wyczyść obecne sekcje
        document.getElementById("sections").innerHTML = '';
        
        // Znajdź nazwę produktu
        const productNameElement = doc.querySelector('h2');
        if (productNameElement) {
            document.getElementById("product-name").value = productNameElement.textContent;
        }
        
        // Znajdź wszystkie sekcje
        const sections = doc.querySelectorAll('section.customDescription-clearfix');
        
        sections.forEach(section => {
            const sectionData = parseSectionFromHTML(section);
            if (sectionData) {
                addSection(sectionData);
            }
        });
        
        // Wyczyść pole importu
        document.getElementById('import-code').value = '';
        
        // Aktualizuj kod i zapisz
        updateCodeAndSave();
        
        alert(`Pomyślnie wczytano kartę z ${sections.length} sekcjami`);
        
    } catch (error) {
        console.error('Błąd podczas parsowania:', error);
        alert('Błąd podczas wczytywania karty. Sprawdź czy kod HTML jest poprawny.');
    }
}
// Funkcja pomocnicza do normalizacji URL-i ikon
function normalizeIconUrl(url) {
    try {
        // Dekoduj URL wielokrotnie (na wypadek podwójnego kodowania)
        let decoded = url;
        let prevDecoded = '';
        while (decoded !== prevDecoded) {
            prevDecoded = decoded;
            try {
                decoded = decodeURIComponent(decoded);
            } catch (e) {
                break;
            }
        }
        
        // Wyciągnij nazwę pliku
        const fileName = decoded.split('/').pop().toLowerCase();
        
        // Usuń rozszerzenie
        const nameWithoutExt = fileName.replace(/\.(png|jpg|jpeg|gif|svg)$/i, '');
        
        return nameWithoutExt;
    } catch (e) {
        console.warn('Błąd normalizacji URL:', e);
        return url.toLowerCase();
    }
}

function parseSectionFromHTML(sectionElement) {
    try {
        const sectionData = {
            icon: null,
            title: '',
            text: '',
            image: {
                url: '',
                alt: ''
            }
        };
        
        // Znajdź ikonę - sprawdź różne możliwe lokalizacje
        let iconElement = sectionElement.querySelector('.customDescription-col-1-6 img');
        if (!iconElement) {
            iconElement = sectionElement.querySelector('img.customDescription-icon');
        }
        if (!iconElement) {
            iconElement = sectionElement.querySelector('img[alt*="Ikona"]');
        }
        if (!iconElement) {
            // Znajdź ikonę na podstawie URL zawierającego '/Shared/Icon/'
            const allImages = sectionElement.querySelectorAll('img');
            for (let img of allImages) {
                if (img.src.includes('/Shared/Icon/') || img.src.includes('/Icon/')) {
                    iconElement = img;
                    break;
                }
            }
        }
        
        if (iconElement) {
            const iconSrc = iconElement.src;
            const normalizedSrc = normalizeIconUrl(iconSrc);
            
            // Znajdź odpowiadającą ikonę używając znormalizowanych URL-i
            let matchingIcon = iconsList.find(icon => {
                const normalizedIconPath = normalizeIconUrl(icon.path);
                const normalizedIconName = icon.name.toLowerCase();
                
                // Porównaj znormalizowane URL-e lub nazwy
                return normalizedIconPath === normalizedSrc || 
                       normalizedIconName === normalizedSrc ||
                       normalizedSrc.includes(normalizedIconName) ||
                       normalizedIconName.includes(normalizedSrc);
            });
            
            if (matchingIcon) {
                sectionData.icon = {
                    name: matchingIcon.name,
                    path: matchingIcon.path
                };
                console.log(`✓ Znaleziono ikonę: ${matchingIcon.name} dla URL: ${iconSrc}`);
            } else {
                // Jeśli nie znaleziono dopasowania, zachowaj oryginalną ikonę
                console.warn(`✗ Nie znaleziono dopasowania dla ikony: ${iconSrc} (znormalizowane: ${normalizedSrc})`);
                sectionData.icon = {
                    name: iconElement.alt || 'unknown',
                    path: iconSrc
                };
            }
        } else {
            // Jeśli nie ma ikony, użyj domyślnej
            sectionData.icon = {
                name: iconsList[0].name,
                path: iconsList[0].path
            };
        }
        
        // Reszta funkcji pozostaje bez zmian - część z tytułem, tekstem i obrazkiem
        // [tu jest dalsza część twojej oryginalnej funkcji - zostaw ją bez zmian]
        return(sectionData);
        
    } catch (error) {
        console.error('Błąd podczas parsowania sekcji:', error);
        // Zwróć przynajmniej podstawową strukturę z domyślną ikoną
        return {
            icon: {
                name: iconsList[0].name,
                path: iconsList[0].path
            },
            title: '',
            text: '',
            image: {
                url: '',
                alt: ''
            }
        };
    }
}


function importProductCard() {
    const importCode = document.getElementById('import-code').value.trim();
    
    if (!importCode) {
        alert('Proszę wkleić kod HTML karty produktowej');
        return;
    }
    
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(importCode, 'text/html');
        
        // Wyczyść obecne sekcje
        document.getElementById("sections").innerHTML = '';
        
        // Znajdź nazwę produktu - sprawdź różne możliwe lokalizacje
        let productName = '';
        const selectors = ['h2', 'h1', '.product-name', '[class*="product"]', '[class*="title"]'];
        
        for (let selector of selectors) {
            const element = doc.querySelector(selector);
            if (element && element.textContent.trim()) {
                productName = element.textContent.trim();
                break;
            }
        }
        
        document.getElementById("product-name").value = productName;
        
        // Znajdź sekcje - sprawdź różne możliwe selektory
        let sections = doc.querySelectorAll('section.customDescription-clearfix');
        
        if (sections.length === 0) {
            sections = doc.querySelectorAll('section');
        }
        
        if (sections.length === 0) {
            sections = doc.querySelectorAll('div.customDescription-wrapper-opisy > *');
        }
        
        if (sections.length === 0) {
            // Spróbuj znaleźć struktury div, które mogą być sekcjami
            sections = doc.querySelectorAll('div[class*="section"], div[class*="row"]');
        }
        
        if (sections.length === 0) {
            // Ostatnia próba - znajdź wszystkie elementy zawierające obrazki lub nagłówki
            const potentialSections = doc.querySelectorAll('*');
            const foundSections = [];
            
            potentialSections.forEach(element => {
                const hasHeading = element.querySelector('h1, h2, h3, h4, h5, h6');
                const hasImage = element.querySelector('img');
                const hasText = element.textContent && element.textContent.trim().length > 10;
                
                if ((hasHeading || hasImage) && hasText) {
                    foundSections.push(element);
                }
            });
            
            sections = foundSections.slice(0, 10); // Ogranicz do 10 sekcji
        }
        
        let importedSections = 0;
        sections.forEach(section => {
            const sectionData = parseSectionFromHTML(section);
            // Dodaj sekcję nawet jeśli jest niepełna
            if (sectionData && (sectionData.title || sectionData.text || sectionData.image.url)) {
                addSection(sectionData);
                importedSections++;
            }
        });
        
        // Jeśli nie udało się zaimportować żadnych sekcji, spróbuj prostszego parsowania
        if (importedSections === 0) {
            const fallbackSections = parseSimpleHTML(doc);
            if (fallbackSections.length > 0) {
                fallbackSections.forEach(sectionData => {
                    addSection(sectionData);
                    importedSections++;
                });
            } else {
                // Dodaj jedną pustą sekcję
                addSection();
                importedSections = 1;
            }
        }
        
        document.getElementById('import-code').value = '';
        updateCodeAndSave();
        
        alert(`Pomyślnie wczytano kartę z ${importedSections} sekcjami`);
        
    } catch (error) {
        console.error('Błąd podczas parsowania:', error);
        alert('Błąd podczas wczytywania karty. Sprawdź czy kod HTML jest poprawny.');
    }
}
function parseSimpleHTML(doc) {
    const sections = [];
    
    // Znajdź wszystkie nagłówki
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach(heading => {
        const sectionData = {
            icon: {
                src: iconsList[0].path,
                alt: iconsList[0].name
            },
            title: heading.textContent.trim(),
            text: '',
            image: {
                url: '',
                alt: ''
            }
        };
        
        // Spróbuj znaleźć tekst po nagłówku
        let nextElement = heading.nextElementSibling;
        while (nextElement) {
            if (nextElement.tagName === 'P' && nextElement.textContent.trim()) {
                sectionData.text = nextElement.textContent.trim();
                break;
            }
            nextElement = nextElement.nextElementSibling;
        }
        
        // Spróbuj znaleźć obrazek w pobliżu
        const parentElement = heading.parentElement;
        if (parentElement) {
            const nearbyImage = parentElement.querySelector('img[src*="Products"], img[src*="Zdj"]');
            if (nearbyImage) {
                try {
                    const urlParts = nearbyImage.src.split('/');
                    const fileName = urlParts[urlParts.length - 1];
                    let imageName = fileName.replace('.jpg', '');
                    imageName = decodeURIComponent(imageName);
                    
                    sectionData.image = {
                        url: imageName,
                        alt: nearbyImage.alt || ''
                    };
                } catch (error) {
                    console.warn('Błąd parsowania obrazka:', error);
                }
            }
        }
        
        sections.push(sectionData);
    });
    
    return sections;
}
