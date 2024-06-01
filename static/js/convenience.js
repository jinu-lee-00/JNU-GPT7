var mapOptions = {
    center: new naver.maps.LatLng(35.1763193, 126.9050000),
    zoom: 15
};

var map = new naver.maps.Map('map', mapOptions);

var markers = []; // 전체 마커를 저장할 배열

var userLocationMarker = null; // 사용자 위치 마커를 저장할 변수

function clearMarkers() {
    markers.forEach(function(marker) {
        marker.setMap(null); // 지도에서 마커 제거
    });
    markers = []; // 마커 배열 초기화
}

function placeMarkers(convenience) {
    clearMarkers(); // 기존 마커 삭제

    var locations = {
        'smoking': [
            {
                lat: 35.1766048, lng: 126.9102167, name: "자연대학 3호관 북서편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/1.jpg"
            },
            {
                lat: 35.1776639, lng: 126.9102210, name: "자연대학 1호관 동편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/2.jpg"
            },
            {
                lat: 35.1778575, lng: 126.9099903, name: "사범대학 과학교육관 동편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/3.jpg"
            },
            {
                lat: 35.1780746, lng: 126.9090244, name: "공과대학 7호관 남서편 흡연부스",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/4.jpg"
            },
            {
                lat: 35.1804590, lng: 126.9115271, name: "생활관 6호관 북동편 흡연부스",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/5.jpg"
            },
            {
                lat: 35.1798799, lng: 126.9084950, name: "공과대학 6호관 북편 흡연부스",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/6.jpg"
            },
            {
                lat: 35.1792333, lng: 126.9086522, name: "공과대학 2호관 북서편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/7.jpg"
            },
            {
                lat: 35.1798039, lng: 126.9063049, name: "AI융합대학 북편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/8.jpg"
            },
            {
                lat: 35.1800833, lng: 126.9062881, name: "예술대학 2호관 남편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/9.jpg"
            },
            {
                lat: 35.1796926, lng: 126.9052017, name: "예술대학 1호관 북서편 흡연부스",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/10.jpg"
            },
            {
                lat: 35.1807853, lng: 126.9049342, name: "생활관 9호관 서편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/11.jpg"
            },
            {
                lat: 35.1810271, lng: 126.9058726, name: "생활관 9호관 동편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/12.jpg"
            },
            {
                lat: 35.1789715, lng: 126.9051998, name: "교육융합관 북서편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/13.jpg"
            },
            {
                lat: 35.1755827, lng: 126.8999371, name: "농업생명과학대학 1호관 남서편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/14.jpg"
            },
            {
                lat: 35.1765421, lng: 126.9019916, name: "농업생명과학대학 2호관 북동편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/15.jpg"
            },
            {
                lat: 35.1738918, lng: 126.9016380, name: "수의과대학 2호관 남편",
                imageUrl: "static/images/smoking.png",
                image: "static/images/smoking/16.jpg"
            },
        ],
        'store': [
            {
                lat: 35.1783778, lng: 126.9097015, name: "팬도로시",
                imageUrl: "static/images/store.png",
                image: "static/images/store/1.jpg"
            },
            {
                lat: 35.1781503, lng: 126.9068118, name: "이마트24 전남대도서관점",
                imageUrl: "static/images/store.png",
                image: "static/images/store/2.jpg"
            },
            {
                lat: 35.1754471, lng: 126.9109480, name: "CU",
                imageUrl: "static/images/store.png",
                image: "static/images/store/3.jpg"
            },
            {
                lat: 35.1750145, lng: 126.9111186, name: "투썸플레이스",
                imageUrl: "static/images/store.png",
                image: "static/images/store/3.jpg"
            },
            {
                lat: 35.1791350, lng: 126.9067667, name: "카페 나인틴52",
                imageUrl: "static/images/store.png",
                image: "static/images/store/4.jpg"
            },

        ],
        'parking': [
            {
                lat: 35.1727872, lng: 126.8983817, name: "친환경농업연구소",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/1.jpg"
            },
            {
                lat: 35.1746596, lng: 126.9008549, name: "농업생명과학대학 5호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/2.jpg"
            },
            {
                lat: 35.1723500, lng: 126.9010745, name: "치의학전문대학원교육연구관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/3.jpg"
            },
            {
                lat: 35.1758588, lng: 126.9013968, name: "농업생명과학대학 4호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/4.jpg"
            },
            {
                lat: 35.1763811, lng: 126.9008610, name: "농업생명과학대학 1호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/5.jpg"
            },
            {
                lat: 35.1763144, lng: 126.9019232, name: "농업생명과학대학 2호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/6.jpg"
            },
            {
                lat: 35.1748779, lng: 126.9034124, name: "사회과학대학 서편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/7.jpg"
            },
            {
                lat: 35.1769555, lng: 126.9033084, name: "진리관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/8.jpg"
            },
            {
                lat: 35.1763790, lng: 126.9038196, name: "경영대학 1호관 남편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/9.jpg"
            },
            {
                lat: 35.1769585, lng: 126.9042745, name: "경영대학 1호관 동편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/10.jpg"
            },
            {
                lat: 35.1767858, lng: 126.9052517, name: "정보마루 북편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/11.jpg"
            },
            {
                lat: 35.1781591, lng: 126.9065428, name: "도서관별관(백도) 서편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/12.jpg"
            },
            {
                lat: 35.1795449, lng: 126.9065467, name: "AI융합대학",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/13.jpg"
            },
            {
                lat: 35.1797134, lng: 126.9058165, name: "예술대학 1호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/14.jpg"
            },
            {
                lat: 35.1806903, lng: 126.9044567, name: "생활관 9호관 북서편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/15.jpg"
            },
            {
                lat: 35.1807727, lng: 126.9061336, name: "생활관 9호관 남편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/16.jpg"
            },
            {
                lat: 35.1805848, lng: 126.9050799, name: "생활관 9호관 서편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/17.jpg"
            },
            {
                lat: 35.1808680, lng: 126.9069843, name: "산학협력 3호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/18.jpg"
            },
            {
                lat: 35.1817939, lng: 126.9096566, name: "G&R HUB 북문 근처",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/19.jpg"
            },
            {
                lat: 35.1809362, lng: 126.9107417, name: "생활관관리동 북편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/20.jpg"
            },
            {
                lat: 35.1794024, lng: 126.9087727, name: "공과대학 2호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/21.jpg"
            },
            {
                lat: 35.1799253, lng: 126.9088984, name: "공과대학 6호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/22.jpg"
            },
            {
                lat: 35.1786232, lng: 126.9093692, name: "공과대학 4호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/23.jpg"
            },
            {
                lat: 35.1783216, lng: 126.9098525, name: "공과대학 7호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/24.jpg"
            },
            {
                lat: 35.1769366, lng: 126.9109546, name: "약학대학 1호관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/25.jpg"
            },
            {
                lat: 35.1748338, lng: 126.9074742, name: "종합운동장",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/26.jpg"
            },
            {
                lat: 35.1740823, lng: 126.9089488, name: "버스차고지 부근",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/27.jpg"
            },
            {
                lat: 35.1752905, lng: 126.9094305, name: "용지관",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/28.jpg"
            },
            {
                lat: 35.1756797, lng: 126.9116531, name: "스포츠센터 북편",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/29.jpg"
            },
            {
                lat: 35.1725039, lng: 126.9047106, name: "전남대 정문",
                imageUrl: "static/images/parking.png",
                image: "static/images/parking/30.jpg"
            },
        ],
    };

    if (locations[convenience]) {
        locations[convenience].forEach(function(location) {
            var marker = new naver.maps.Marker({
                map: map,
                position: new naver.maps.LatLng(location.lat, location.lng),
                icon: {
                    content: `
                        <div style="position: relative; width: 22px; height: 22px; border-radius: 50%; overflow: hidden; border: 2px solid #4285F4;">
                            <img src="${location.imageUrl}" alt="${location.name}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    `,
                    anchor: new naver.maps.Point(10, 10)
                },
                zIndex: 100
            });
            marker.addListener('click', function() {
                showModal(location.name, location.image);
            });
            markers.push(marker);
        });
    }
}

document.querySelectorAll('.tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(function(tab) {
            tab.classList.remove('active');
        });
        this.classList.add('active');

        var convenience = this.getAttribute('data-convenience');
        placeMarkers(convenience);
    });
});

function updateMyLocation(centerMap) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var heading = position.coords.heading || 0;
            updateMap(lat, lng, heading, centerMap);
        }, function(error) {
        }, {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000
        });
    } else {
        alert('이 브라우저는 Geolocation을 지원하지 않습니다.');
    }
}

document.getElementById('myLocationButton').addEventListener('click', function() {
    updateMyLocation(true);
});

function updateMap(lat, lng, heading, centerMap) {
    var newPosition = new naver.maps.LatLng(lat, lng);

    if (!userLocationMarker) {
        userLocationMarker = new naver.maps.Marker({
            map: map,
            position: newPosition,
            icon: {
                content: '<div style="width:18px; height:18px; background-color:#FFC0CB; border-radius:50%; display:flex; align-items:center; justify-content:center;"><div style="width:12px;height:12px;background-color:#FF0000;border-radius:50%;"></div></div>',
                anchor: new naver.maps.Point(12, 12)
            },
            zIndex: 1000
        });
    } else {
        userLocationMarker.setPosition(newPosition);
    }

    if (centerMap) {
        map.setCenter(newPosition);
    }
}

function showModal(name, image) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modalImage');
    var modalName = document.getElementById('modalName');

    modalImage.src = image;
    modalName.textContent = name;

    modal.style.display = "block";
}

document.getElementById('modalCloseButton').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
});

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 5초마다 현재위치 업데이트
setInterval(function() {
    updateMyLocation(false);
}, 5000);

document.querySelector('.tab').click();