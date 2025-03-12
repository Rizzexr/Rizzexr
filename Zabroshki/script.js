let map = L.map('map', {
    zoomControl: false
}).setView([46.416891, 30.758571], 13);

// Используем CartoDB.DarkMatter для темной минималистичной карты
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// Список точек с новыми полями
const points = [
    { 
        lat: 46.416891, 
        lon: 30.758571, 
        label: "Санаторий - Красные Зори", 
        color: "#00FF09", 
        image: "https://odessa-life.od.ua/wp-content/uploads/2019/12/Odin-iz-korpusov-sanatorija-3.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.373684, 
        lon: 30.719805, 
        label: "411 бункер (1)", 
        color: "#FFE500", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bYKmvtceNS7MMk0_T9JCn5Fqj8qazWXy5w&s",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.373308, 
        lon: 30.719140, 
        label: "411 бункер (2)", 
        color: "#FFE500", 
        image: "https://dumskaya.net/pics1/a0-1444251504.jpg",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.373034, 
        lon: 30.718619, 
        label: "411 бункер (3)", 
        color: "#FFE500", 
        image: "https://www.vladmuz.ru/travel_photos/odessa/411-battery/50.jpg",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.3605326, 
        lon: 30.7031552, 
        label: "Дом культуры Черноморки им. Карла Либкнехта", 
        color: "#00FF09", 
        image: "https://odessa.online/wp-content/uploads/2021/05/photo_2021-05-17_10-07-06-5-1024x683.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.388668, 
        lon: 30.746031, 
        label: "Санаторий", 
        color: "#FFE500", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSzG4EPVAS5G6xaMtN2eV_ibAfupqa8INAA&s",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.399793, 
        lon: 30.749763, 
        label: "Санаторий - Чёрное море", 
        color: "#00FF09", 
        image: "https://odessamedia.net/images/2020/01/22/fotorep/glav.apaqi.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.4551904, 
        lon: 30.7171527, 
        label: "Большой паровозный цех", 
        color: "#00FF09", 
        image: "https://lh6.googleusercontent.com/42cTp30Av0bYEtb1Z2MPWEyKUL86DsQ6Ne6Of0EuJlt9g4d0uGftw2SLGKyATxE0yfxAUQawym69mhqCh_bVVm1taHVK7PE2d1AcK4SM5Deqv9sS-KVBNcgbLTgiqoy8kk3V0p8Y",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.445259, 
        lon: 30.767850, 
        label: "Аранжерея Маразли", 
        color: "#00FF09", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHtVjZ3fwwJpze8UrMHsZyAEC6P7KkaepPY-na-kxZuZiYrw_r0Ce5j19OQUDVIcpB7Fw&usqp=CAU",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.558844, 
        lon: 30.727563, 
        label: "Санаторий - Куяльник", 
        color: "#ff4444", 
        image: "https://odessa.online/wp-content/uploads/2023/08/910673_original.jpg",
        guarded: "Нет",
        difficulty: "3/3"
    },
    { 
        lat: 46.616210, 
        lon: 30.298141, 
        label: "Усадьба Дубецких", 
        color: "#00FF09", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/%D0%9F%D0%B0%D0%BB%D0%B0%D1%86-%D0%A1%D0%B0%D0%B4%D0%B8%D0%B1%D0%B0_%D0%94%D1%83%D0%B1%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D1%85_01.jpg/640px-%D0%9F%D0%B0%D0%BB%D0%B0%D1%86-%D0%A1%D0%B0%D0%B4%D0%B8%D0%B1%D0%B0_%D0%94%D1%83%D0%B1%D0%B5%D1%86%D1%8C%D0%BA%D0%B8%D1%85_01.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.4885018, 
        lon: 30.7398112, 
        label: "Доходный дом Лерхе", 
        color: "#ff4444", 
        image: "https://zabytki.in.ua/images/3911.jpg",
        guarded: "Да",
        difficulty: "3/3"
    },
    { 
        lat: 46.4273695, 
        lon: 30.7230242, 
        label: "Швейка", 
        color: "#00FF09", 
        image: "https://usionline.com/wp-content/uploads/2019/05/E9DA74EB-5C2F-46D3-BACD-70BFEDD6CE97-1510x848.jpeg",
        guarded: "Нет",
        difficulty: "1/3"
    }
];

// Функция для масштабирования маркеров в зависимости от зума
function updateMarkerSize() {
    const zoom = map.getZoom();
    const baseRadius = 8;
    const scaleFactor = zoom / 13;
    markers.forEach(marker => {
        marker.setRadius(baseRadius * scaleFactor);
    });
}

let markers = [];

// Добавление точек на карту с изображением в попапе
points.forEach(point => {
    const marker = L.circleMarker([point.lat, point.lon], {
        color: point.color,
        fillColor: point.color,
        fillOpacity: 0.8,
        radius: 8
    }).addTo(map);

    // Формируем HTML для попапа с новыми полями и кнопкой маршрута
    const popupContent = `
        <div class="leaflet-popup-content">
            <img src="${point.image}" alt="${point.label}" class="popup-image">
            <div class="popup-content">
                <b>${point.label}</b><br>
                Охраняется: ${point.guarded}<br>
                Труднодоступность: ${point.difficulty}<br>
                <a href="https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lon}" 
                   target="_blank" 
                   style="display: inline-block; margin-top: 10px; padding: 5px 10px; background: #ff4444; color: white; text-decoration: none; border-radius: 5px;">
                   Построить маршрут
                </a>
            </div>
        </div>
    `;
    marker.bindPopup(popupContent);
    markers.push(marker);
});

// Обновляем размер маркеров при зуме
map.on('zoomend', updateMarkerSize);

// Инициализируем размер маркеров при загрузке
updateMarkerSize();

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                map.setView([lat, lon], 13);
                const myMarker = L.circleMarker([lat, lon], {
                    color: '#7B00FF',
                    fillColor: '#7B00FF',
                    fillOpacity: 0.8,
                    radius: 10
                }).addTo(map);

                const popupContent = `
                    <div class="leaflet-popup-content">
                        <div class="popup-content">
                            <b>Ты здесь</b>
                        </div>
                    </div>
                `;
                myMarker.bindPopup(popupContent).openPopup();
                markers.push(myMarker);
                updateMarkerSize();
            },
            () => {
                alert('Не удалось определить местоположение.');
            }
        );
    } else {
        alert('Геолокация не поддерживается вашим устройством.');
    }
}