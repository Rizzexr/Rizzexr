let map = L.map('map', {
    zoomControl: false
}).setView([46.416891, 30.758571], 13);

// Слой для темной карты (по умолчанию)
let darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// Слой для спутниковой карты
let satelliteLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 20
});

// Список точек с новыми полями
const points = [
    { 
        lat: 46.416891, 
        lon: 30.758571, 
        label: "Санаторий - Красные Зори", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/1.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.373684, 
        lon: 30.719805, 
        label: "411 бункер (1)", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/2.jpeg",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.373308, 
        lon: 30.719140, 
        label: "411 бункер (2)", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/3.jpg",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.373034, 
        lon: 30.718619, 
        label: "411 бункер (3)", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/4.jpg",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.3605326, 
        lon: 30.7031552, 
        label: "Дом культуры Черноморки им. Карла Либкнехта", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/5.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.388668, 
        lon: 30.746031, 
        label: "Санаторий", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top1.png",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.399793, 
        lon: 30.749763, 
        label: "Санаторий - Чёрное море", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/6.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.4551904, 
        lon: 30.7171527, 
        label: "Большой паровозный цех", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/7.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.4451444, 
        lon: 30.767106, 
        label: "Аранжерея Маразли", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/8.jpeg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.445259, 
        lon: 30.767850, 
        label: "Корпус", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/25.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.558844, 
        lon: 30.727563, 
        label: "Санаторий - Куяльник", 
        color: "#ff4444", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/9.jpg",
        guarded: "Нет",
        difficulty: "3/3"
    },
    { 
        lat: 46.616210, 
        lon: 30.298141, 
        label: "Усадьба Дубецких", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/10.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.4885018, 
        lon: 30.7398112, 
        label: "Доходный дом Лерхе", 
        color: "#ff4444", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/11.jpg",
        guarded: "Да",
        difficulty: "3/3"
    },
    { 
        lat: 46.4273695, 
        lon: 30.7230242, 
        label: "Швейка", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/12.jpeg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.373105, 
        lon: 30.670442, 
        label: "Недействующий резервуар", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top3.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.375842, 
        lon: 30.729827, 
        label: "Недостройка", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top4.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.370929, 
        lon: 30.729970, 
        label: "Дом Писателей", 
        color: "#FF4444", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top5.png",
        guarded: "Неизвестно",
        difficulty: "3/3"
    },
    { 
        lat: 46.435656, 
        lon: 30.742883, 
        label: "Заброшенная столовая", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top6.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.43867079054658, 
        lon: 30.762995419371922, 
        label: "Заброшенный корпус", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top7.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.4757702, 
        lon: 30.6975442, 
        label: "Заброшенные подземные склады (вход)", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/13.png",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.4388964, 
        lon: 30.7676927, 
        label: "Корпус санатория", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/14.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.46671611216549,  
        lon: 30.741300400244324, 
        label: "Заброшенный подземный переход", 
        color: "#FF4444", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/15.jpg",
        guarded: "Нет",
        difficulty: "3/3"
    },
    { 
        lat: 46.494419, 
        lon: 30.7298685, 
        label: "Судоремонтный завод в Одессе", 
        color: "#FF4444", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/16.jpg",
        guarded: "Неизвестно",
        difficulty: "3/3"
    },
    { 
        lat: 46.5621053, 
        lon: 30.7272265, 
        label: "Заброшенная часть грязелечебницы", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/17.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.539167, 
        lon: 30.716944, 
        label: "Клуб завода Большевик", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/18.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.54386568520374, 
        lon: 30.728901358155287, 
        label: "Заброшенный кирпичный завод", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/19.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.42125236635405,  
        lon: 30.617096549451492, 
        label: "Заброшка", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top8.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.317222, 
        lon: 30.639722, 
        label: "Бывший завод", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top9.png",
        guarded: "Неизвестно",
        difficulty: "2/3"
    },
    { 
        lat: 46.475000, 
        lon: 30.737778, 
        label: "ул. Европейская", 
        color: "#FF4444", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/20.jpg",
        guarded: "Нет",
        difficulty: "3/3"
    },
    { 
        lat: 46.451723, 
        lon: 30.768019, 
        label: "Заброшка на берегу", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top10.png",
        guarded: "Вроде старый дед",
        difficulty: "2/3"
    },
    { 
        lat: 46.451944, 
        lon: 30.756111, 
        label: "Бывшая лаборатория физики алмазов", 
        color: "#FF4444", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top11.png",
        guarded: "Неизвестно",
        difficulty: "3/3"
    },
    { 
        lat: 46.505556, 
        lon: 30.713889, 
        label: "Руины на большой площади (СМУ-12)", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top12.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.430618, 
        lon: 30.596864, 
        label: "Заброшенная ферма", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top13.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.831168, 
        lon: 30.755619, 
        label: "Бомбоубежище", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top14.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.892639, 
        lon: 30.701467, 
        label: "Заброшенная взлетно посадочная полоса", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top15.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 47.002883, 
        lon: 30.754054, 
        label: "Перевалочный элеватор", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top16.png",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.999278, 
        lon: 30.620655, 
        label: "Старые катакомбы", 
        color: "#f3f3f3", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top17.png",
        guarded: "Нет",
        difficulty: "Опасно"    
    },
    { 
        lat: 46.705579, 
        lon: 30.591288, 
        label: "Катакомбы", 
        color: "#f3f3f3", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top18.png",
        guarded: "Нет",
        difficulty: "Опасно"
    },
    { 
        lat: 46.694856, 
        lon: 30.391724, 
        label: "Катакомбы", 
        color: "#f3f3f3", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top19.png",
        guarded: "Нет",
        difficulty: "Опасно"
    },
    { 
        lat: 46.587565, 
        lon: 30.603681, 
        label: "Катакомбы", 
        color: "#f3f3f3", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top20.png",
        guarded: "Нет",
        difficulty: "Опасно"
    },
    { 
        lat: 46.546041, 
        lon: 30.731098, 
        label: "Катакомбы вход №9", 
        color: "#f3f3f3", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top21.png",
        guarded: "Нет",
        difficulty: "Опасно"
    },
    { 
        lat: 46.47838879141698,  
        lon: 30.762923512548507, 
        label: "Вход в дренажно-штольневую систему + бункер", 
        color: "#ffa600", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top22.png",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.39055749235335,   
        lon: 30.713084905871142, 
        label: "Заброшка", 
        color: "#ff4444", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top23.png",
        guarded: "Неизвестно",
        difficulty: "3/3"
    },
    { 
        lat: 46.464387,   
        lon: 30.322346, 
        label: "Недостроенная Атомная Электростанция", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top24.png",
        guarded: "Неизвестно",
        difficulty: "2/3"
    },
    { 
        lat: 46.432226, 
        lon: 30.700139, 
        label: "Заброшенный детский садик", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top25.png",
        guarded: "Да",
        difficulty: "2/3"
    },
    // { 
    //     lat: 46.448284, 
    //     lon: 30.734947, 
    //     label: "Заброшенный завод", 
    //     color: "#FFE500", 
    //     image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/top26.png",
    //     guarded: "Неизвестно",
    //     difficulty: "2/3"
    // },
    { 
        lat: 46.4743614, 
        lon: 30.7555022, 
        label: "Дача Маразли", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/21.jpeg",
        guarded: "Нет",
        difficulty: "2/3"
    },
    { 
        lat: 46.436111, 
        lon: 30.731667, 
        label: "Заброшенный летний кинотеатр", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/22.jpg",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.435076, 
        lon: 30.741687, 
        label: "Заброшенный санаторий", 
        color: "#00FF09", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/23.png",
        guarded: "Нет",
        difficulty: "1/3"
    },
    { 
        lat: 46.440023, 
        lon: 30.758849, 
        label: "Башня разрушенной дачи Бродського", 
        color: "#FFE500", 
        image: "https://rizzexr.github.io/Rizzexr/Zabroshki/images/24.jpg",
        guarded: "Нет",
        difficulty: "2/3"
    },
    // { 
    //     lat: , 
    //     lon: , 
    //     label: "", 
    //     color: "#00FF09", 
    //     image: "",
    //     guarded: "Нет",
    //     difficulty: "1/3"
    // },
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

// Переключение режимов карты
const darkModeBtn = document.getElementById('darkModeBtn');
const satelliteModeBtn = document.getElementById('satelliteModeBtn');

darkModeBtn.addEventListener('click', () => {
    map.removeLayer(satelliteLayer);
    map.addLayer(darkLayer);
    darkModeBtn.classList.add('active');
    satelliteModeBtn.classList.remove('active');
});

satelliteModeBtn.addEventListener('click', () => {
    map.removeLayer(darkLayer);
    map.addLayer(satelliteLayer);
    satelliteModeBtn.classList.add('active');
    darkModeBtn.classList.remove('active');
});
