let map = L.map('map', {
    zoomControl: false // Убираем стандартный зум для чистоты дизайна
}).setView([46.416891, 30.758571], 13);

// Используем CartoDB.DarkMatter для темной минималистичной карты
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// Список точек (добавляй свои координаты сюда)
const points = [
    { lat: 46.416891, lon: 30.758571, label: "Санаторий - Красные зори", color: "#ff4444" },
    { lat: 46.388741, lon: 30.746057, label: "Санаторий", color: "#ff4444" },
    { lat: 46.373669, lon: 30.719786, label: "411 бункер 1", color: "#ff4444" },
    { lat: 46.373306, lon: 30.719153, label: "411 бункер 2", color: "#ff4444" },
    { lat: 46.372897, lon: 30.718601, label: "411 бункер 3", color: "#ff4444" },
    { lat: 46.3604587, lon: 30.7027994, label: "Дом культуры Черноморки им. Карла Либкнехта", color: "#ff4444" },
    // Добавляй свои точки в формате: { lat: ШИРОТА, lon: ДОЛГОТА, label: "НАЗВАНИЕ", color: "#HEX" }
];

// Функция для масштабирования маркеров в зависимости от зума
function updateMarkerSize() {
    const zoom = map.getZoom();
    const baseRadius = 8; // Базовый размер маркера
    const scaleFactor = zoom / 13; // Масштабируем относительно зума 13
    markers.forEach(marker => {
        marker.setRadius(baseRadius * scaleFactor);
    });
}

let markers = [];

// Добавление точек на карту
points.forEach(point => {
    const marker = L.circleMarker([point.lat, point.lon], {
        color: point.color,
        fillColor: point.color,
        fillOpacity: 0.8,
        radius: 8 // Начальный размер
    }).addTo(map);

    marker.bindPopup(`<b>${point.label}</b><br>Широта: ${point.lat}<br>Долгота: ${point.lon}`);
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
                    color: '#00ffff',
                    fillColor: '#00ffff',
                    fillOpacity: 0.8,
                    radius: 10
                }).addTo(map);

                myMarker.bindPopup(`<b>Вы здесь!</b><br>Широта: ${lat}<br>Долгота: ${lon}`).openPopup();
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