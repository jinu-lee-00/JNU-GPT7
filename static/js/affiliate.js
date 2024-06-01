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

function placeMarkers(college) {
    clearMarkers(); // 기존 마커 삭제

    var locations = {
        'engineering': [
            {
                lat: 35.1772636, lng: 126.9145247, name: "혼불",
                address: "광주 북구 호동로15번길 48 1층",
                details: "4인이상 방문시,<br>공대생 한정 특별메뉴판 제공",
                instaLink: "https://www.instagram.com/p/C5JAaRPSoNc/?igsh=b3RwZHB3cnd2YXFo&img_index=3",
                naverLink: "https://naver.me/FBQnG2nd", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1748378, lng: 126.9128566, name: "화미주아티클헤어",
                address: "광주 북구 우치로 82 2층",
                details: "<b>◈ 네이버페이 사용 시</b><br>할인상품 - 추가 5% 할인<br>미할인상품 - 10% 할인<br><br><b>◈ 네이버페이 미사용 시</b><br>미할인상품 10% 할인",
                instaLink: "https://www.instagram.com/p/C5JAVveSp6T/?igsh=cDNtYTE4eXE4ZG9m",
                naverLink: "https://naver.me/5zvRmisz", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1750641, lng: 126.9134800, name: "라멘키노리",
                address: "광주 북구 호동로 9-1 1층",
                details: "<b>◈ 테이블당</b><br><b>수제가라아게</b> 또는 <b>미니차슈덮밥</b><br>中 택 1<br><br>* 단, <b>2인 이상</b> 방문하여<br><b>1인 1라멘</b> 주문 시 적용",
                instaLink: "https://www.instagram.com/p/C5I_tmEydxD/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xYTqpzNQ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1747849, lng: 126.9145537, name: "전대곳간",
                address: "광주 북구 서방로9번길 30-4 1층",
                details: "<b>전 메뉴 10% 할인</b>",
                instaLink: "https://www.instagram.com/p/C5I_G5qSMqs/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xGiNjnYF", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1723059, lng: 126.9078723, name: "수네일",
                address: "광주 북구 용봉로 102-1",
                details: "- 젤 시술 5천원 할인<br>- 컬러 무제한, 글리터 무료",
                instaLink: "https://www.instagram.com/p/C5I-XUuS5E4/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xScGthOG", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1770342, lng: 126.9142838, name: "생생호프",
                address: "광주 북구 호동로63번길 64 1, 2층",
                details: "<b>◈ 4인 이상 방문 시,</b><br>테이블 당 서비스 안주 1개<br>(공대 학생증 2명이상 제시)<br><br><b>◈ 10인 이상 방문 시,</b><br>위 내용과 다른 서비스 안주<br>(공대 학생증 5명이상 제시)",
                instaLink: "https://www.instagram.com/p/C5I93aHygDl/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FARjd8HZ", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1768415, lng: 126.9146499, name: "수작",
                address: "광주 북구 호동로15번길 38",
                details: "<b>◈ 4인 이상 방문 시,</b><br>테이블 당 서비스 안주 1개<br>(공대 학생증 2명이상 제시)<br><br><b>◈ 10인 이상 방문 시,</b><br>위 내용과 다른 서비스 안주<br>(공대 학생증 5명이상 제시)",
                instaLink: "https://www.instagram.com/p/C5I93aHygDl/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xEqOCAhh", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1785970, lng: 126.9127618, name: "언컷",
                address: "광주 북구 우치로126번길 12 1층",
                details: "<b>◈ 첫 방문 시,</b><br>다운펌 3000원, 시술20%할인<br>+2000원 할인<br><br><b>◈ 이번 년도 까지,</b><br>다운펌 2000원 할인<br>시술 10% 할인",
                instaLink: "https://www.instagram.com/p/C4z_pa4LFOZ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/Fynadk8r", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1765922, lng: 126.9137724, name: "올리브",
                address: "광주 북구 우치로100번길 23 1-2층",
                details: "<b>◈ 2인  이상 이용시</b><br>서비스 안주 제공<br><br><b>◈ 단체(10인 이상) 이용시</b><br>5% 할인<br>* 단, 현금 또는 계좌이체시 적용",
                instaLink: "https://www.instagram.com/p/C4s7rn9S3eh/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5B103Tbj", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1773443, lng: 126.9142636, name: "오늘김해뒷고기",
                address: "광주 북구 호동로15번길 49",
                details: "<b>◈ 테이블당</b><br>된장찌개 or 계란찜<br><b>中 택 1</b>",
                instaLink: "https://www.instagram.com/p/C4s7epnyZfJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5WcBxqri", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775466, lng: 126.9140887, name: "석구고기",
                address: "광주 북구 우치로110번길 31",
                details: "<b>◈ 테이블당</b><br>라면 or 간장계란밥<br><b>中 택 1</b><br>* 2인 이상 인원에맞는 주문필요",
                instaLink: "https://www.instagram.com/p/C4s7aMeSAwO/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5uxcYo3s", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1766555, lng: 126.9141974, name: "더맥소",
                address: "광주 북구 우치로100번길 31 1층",
                details: "<b>◈ 2인  이상 이용시</b><br>- 서비스 안주 제공<br><br><b>◈ 단체(8인 이상) 이용시</b><br>- 주류 3+1 제공<br><b>◈ 단체(10인 이상) 이용시</b><br>- 매출에 따른 추가 서비스안주 제공",
                instaLink: "https://www.instagram.com/p/C4s7Te5yp0i/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5Lo6ntlG", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1770693, lng: 126.9145639, name: "김삼철",
                address: "광주 북구 호동로63번길 62 1층",
                details: "<b>◈ 테이블당</b><br>볶음밥 or 우동면<br><b>中 택 1</b><br>* 2인 이상 인원에맞는 주문필요",
                instaLink: "https://www.instagram.com/p/C4s7Mj4Siyd/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/54JGahO9", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1748721, lng: 126.9152024, name: "감성사진관",
                address: "광주 북구 호동로 26 2층",
                details: "<b>◈ 증명사진 10% 할인</b><br><b>◈ 각종사진 10% 할인</b><br>- 이미지사진, 커플사진, 프로필사진 등<br><b>◈ 전남대 아늑뷰티 5000원 할인</b>",
                instaLink: "https://www.instagram.com/p/C4s7HWzSRQV/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xZDO7tLv", imageUrl: "static/images/camera.png"
            },
            {
                lat: 35.1746390, lng: 126.9128979, name: "셀디 스터디카페 후문점",
                address: "광주 북구 우치로 80 6, 7층",
                details: "<b>◈ 정액권 결제후 카톡하면 시간추가</b><br>- 50시간 → 70시간<br>- 100시간 → 150시간<br>- 150시간 → 230시간<br>- 210시간 → 310시간<br><br><b>◈ 정액권 이용 가능기간 연장</b><br>- 90일 → 120일<br><br><b>◈ 정액권결제후 소개받은 친구도 결제시</b><br>- 서로10% 추가",
                instaLink: "https://www.instagram.com/p/C3W5TZnLW51/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GBfuxQME", imageUrl: "static/images/study.png"
            },
            {
                lat: 35.1714635, lng: 126.9042241, name: "셀디 스터디카페 정문점",
                address: "광주 북구 자미로 61",
                details: "<b>◈ 정액권 결제후 카톡하면 시간추가</b><br>- 50시간 → 70시간<br>- 100시간 → 150시간<br>- 150시간 → 230시간<br>- 210시간 → 310시간<br><br><b>◈ 정액권 이용 가능기간 연장</b><br>- 90일 → 120일<br><br><b>◈ 정액권결제후 소개받은 친구도 결제시</b><br>- 서로10% 추가",
                instaLink: "https://www.instagram.com/p/C3W5TZnLW51/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xXrtWV4u", imageUrl: "static/images/study.png"
            },
            {
                lat: 35.1779292, lng: 126.9021663, name: "셀디 스터디카페 상대점",
                address: "광주 북구 설죽로214번길 81 2층",
                details: "<b>◈ 정액권 결제후 카톡하면 시간추가</b><br>- 50시간 → 70시간<br>- 100시간 → 150시간<br>- 150시간 → 230시간<br>- 210시간 → 310시간<br><br><b>◈ 정액권 이용 가능기간 연장</b><br>- 90일 → 120일<br><br><b>◈ 정액권결제후 소개받은 친구도 결제시</b><br>- 서로10% 추가",
                instaLink: "https://www.instagram.com/p/C3W5TZnLW51/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5bRLhrvv", imageUrl: "static/images/study.png"
            },
        ],
        'humanities': [
            {
                lat: 35.1746390, lng: 126.9128979, name: "셀디 스터디카페 후문점",
                address: "광주 북구 우치로 80 6, 7층",
                details: "<b>◈ 정액권 결제후 카톡하면 시간추가</b><br>- 50시간 → 70시간<br>- 100시간 → 150시간<br>- 150시간 → 230시간<br>- 210시간 → 310시간<br><br><b>◈ 정액권 이용 가능기간 연장</b><br>- 90일 → 120일<br><br><b>◈ 정액권결제후 소개받은 친구도 결제시</b><br>- 서로10% 추가",
                instaLink: "https://www.instagram.com/p/C5antrXS3jF/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GBfuxQME", imageUrl: "static/images/study.png"
            },
            {
                lat: 35.1714635, lng: 126.9042241, name: "셀디 스터디카페 정문점",
                address: "광주 북구 자미로 61",
                details: "<b>◈ 정액권 결제후 카톡하면 시간추가</b><br>- 50시간 → 70시간<br>- 100시간 → 150시간<br>- 150시간 → 230시간<br>- 210시간 → 310시간<br><br><b>◈ 정액권 이용 가능기간 연장</b><br>- 90일 → 120일<br><br><b>◈ 정액권결제후 소개받은 친구도 결제시</b><br>- 서로10% 추가",
                instaLink: "https://www.instagram.com/p/C5antrXS3jF/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xXrtWV4u", imageUrl: "static/images/study.png"
            },
            {
                lat: 35.1779292, lng: 126.9021663, name: "셀디 스터디카페 상대점",
                address: "광주 북구 설죽로214번길 81 2층",
                details: "<b>◈ 정액권 결제후 카톡하면 시간추가</b><br>- 50시간 → 70시간<br>- 100시간 → 150시간<br>- 150시간 → 230시간<br>- 210시간 → 310시간<br><br><b>◈ 정액권 이용 가능기간 연장</b><br>- 90일 → 120일<br><br><b>◈ 정액권결제후 소개받은 친구도 결제시</b><br>- 서로10% 추가",
                instaLink: "https://www.instagram.com/p/C5antrXS3jF/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5bRLhrvv", imageUrl: "static/images/study.png"
            },
            {
                lat: 35.1808780, lng: 126.9040242, name: "연꽃빌라",
                address: "광주 북구 용주로30번길 67 1층",
                details: "<b>◈ 음료가격 10% 할인</b><br><b>◈ 디저트 10,000원 이상 구매시</b><br>- 아메리카노 증정",
                instaLink: "https://www.instagram.com/p/C6saYE3ruio/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FKOc01bR", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1809180, lng: 126.9040642, name: "야작",
                address: "광주 북구 용주로30번길 67",
                details: "<b>◈ 나베포함 3만원이상 주문시</b><br>- 칼국수 면 추가<br><b>◈ 총 주문금액 6만원 이상 시</b><br>- 감자튀김, 샤베트 중 택1<br><b>◈ 10만원 이상 결제시</b><br>- 추가금액 10%할인<br>- * (현금or계좌이체)",
                instaLink: "https://www.instagram.com/p/C6X1KZbrpPJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xGODFmCv", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1779180, lng: 126.9043686, name: "케주베이커리 상대점",
                address: "광주 북구 설죽로214번길 123 1층",
                details: "<b>◈ 8,000원 이상 구매 시,</b><br>- 아메리카노, 아이스티, 얼그레이아이스티 중 1잔 무료증정<br><b>◈ 10,000원 이상 구매 시,</b><br>- 프레첼 머랭 쿠키 증정<br>",
                instaLink: "https://www.instagram.com/p/C5w2Dmrh8Gy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F1MwJmzi", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1757980, lng: 126.9127170, name: "홈즈앤루팡",
                address: "광주 북구 우치로 94 3층",
                details: "<b>◈ 시간제 요금제</b><br>- 시간당 1,000원 할인<br><b>◈ 4인 이상 동반시,</b><br>- 나쵸 증정<br><b>◈ 제휴대상 1인당,</b><br>- 동반 1인 적용<br>",
                instaLink: "https://www.instagram.com/p/C5w157DhUO7/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xt5si6jb", imageUrl: "static/images/game.png"
            },
            {
                lat: 35.1721281, lng: 126.9049638, name: "네일손다음",
                address: "광주 북구 자미로 68 2층",
                details: "<b>◈ 타샵제거 무료</b><br><b>◈ 시술금액 10% 할인</b><br>* (단, 제거만하면 타샵제거비발생)",
                instaLink: "https://www.instagram.com/p/C5NI6VjLbes/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FzQevt1U", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1782932, lng: 126.9123366, name: "샐러디",
                address: "광주 북구 우치로 122",
                details: "<b>◈ 주문후 학생증제시하면 음료수제공</b><br>*(단, 제로콜라, 스프라이트, 웰치스, 스파클링워터 중 택1)",
                instaLink: "https://www.instagram.com/p/C5NI1IbL8kD/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/I54ZWaEA", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765968, lng: 126.9140586, name: "한라맥주",
                address: "광주 북구 우치로100번길 27",
                details: "<b>◈ 8인 이하 시</b><br>- 어묵채튀김 or 튀김쥐포 제공",
                instaLink: "https://www.instagram.com/p/C47FpJZrHOn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G3J8fABp", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1710495, lng: 126.9034766, name: "초망래쉬",
                address: "광주 북구 서양로 17 1층",
                details: "<b>◈ 최초 1회</b><br>- 5000원 할인<br>- 케라틴 클리닉<br><b>◈ 이후 상시 5000원 할인</b>",
                instaLink: "https://www.instagram.com/p/C47FgaXrgFG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/51ajyjwf", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1778699, lng: 126.8996322, name: "대주당가",
                address: "광주 북구 반룡로18번길 29",
                details: "<b>◈ 음료 1개 서비스제공</b><br><b>◈ 춘부집 영수증들고 대주당가 방문시,</b><br>- 전체금액 10% 할인",
                instaLink: "https://www.instagram.com/p/C4ueR3SrOuJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F9p9gQI3", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1800528, lng: 126.9015632, name: "춘부집",
                address: "광주 북구 반룡로27번길 24",
                details: "<b>◈ 음료수 서비스 제공</b><br><b>◈ 포인트 10% 적립</b>",
                instaLink: "https://www.instagram.com/p/C4ueKtJL6ay/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xKQzKGwJ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765941, lng: 126.9139314, name: "희희술집",
                address: "광주 북구 우치로100번길 25",
                details: "<b>◈ 아이스크림, 고로케, 황도, 감튀</b><br>- 중에서 1개 서비스 제공",
                instaLink: "https://www.instagram.com/p/C4rh2gJreuc/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xOvw9Rb2", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1772482, lng: 126.9022109, name: "테이스티",
                address: "광주 북구 설죽로202번길 88",
                details: "<b>◈ 핫도그 2개 이상 구매시</b><br>- 190ml 음료 1개 제공<br><b>◈ 타코야끼 구매 시,</b><br>- 2알 서비스 제공<br><b>◈ 감튀가 포함된 세트구매시,</b><br>- 감자튀김 치즈 추가",
                instaLink: "https://www.instagram.com/p/C4rhwiWLpBs/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5YwjmzpK", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1789850, lng: 126.9024472, name: "고향회관",
                address: "광주 북구 반룡로41번길 3",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 4인 이상 & 현금결제시,</b><br>- 삼겹살 1인분당 천원할인<br>- OR 오리탕 리필 1회",
                instaLink: "https://www.instagram.com/p/C4pTsgLr2ua/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F36TLPzW", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775670, lng: 126.8954554, name: "술링",
                address: "광주 북구 저불로 36 1층",
                details: "<b>◈ 4인기준 테이블 당,</b><br>- 메인안주 1개 제공",
                instaLink: "https://www.instagram.com/p/C4pTmKbrky_/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G6DyB1cX", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1777404, lng: 126.8950567, name: "꽃다운주점",
                address: "광주 북구 저불로 37 1층",
                details: "<b>◈ 전체 금액의 10% 할인</b>",
                instaLink: "https://www.instagram.com/p/C4pTbs3rtoj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5xnUZ2iU", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1714511, lng: 126.9036737, name: "골목",
                address: "광주 북구 용봉로 62-6 1층",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 3인 이상 시,</b><br>- 타꼬야끼(사이드) 1개 서비스",
                instaLink: "https://www.instagram.com/p/C4cGaWNLvku/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FLBKf4EQ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1723885, lng: 126.9062724, name: "술돼지",
                address: "광주 북구 용봉로 88",
                details: "<b>◈ 2인 이상 시</b><br>- 껍데기 서비스<br><b>◈ 4인 이상 시,</b><br>- 열무국수 서비스<br>- 또는 10%할인",
                instaLink: "https://www.instagram.com/p/C4Zmn-pLKKy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5Ndem0Zn", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775318, lng: 126.9005725, name: "통발",
                address: "광주 북구 반룡로28번길 32-1",
                details: "<b>◈ 주먹밥 OR 음료수 제공</b>",
                instaLink: "https://www.instagram.com/p/C4Xuo2lhbV2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FgivZzyx", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1783497, lng: 126.9039905, name: "동흥루",
                address: "광주 북구 반룡로 56",
                details: "<b>◈ 인원수에 맞게</b><br>- 군만두 or 음료수 서비스<br><b>◈ 현금 결제 시,</b><br>- 인당 500원 할인",
                instaLink: "https://www.instagram.com/p/C4HeOLsyyJY/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/IxDT4we4", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1792078, lng: 126.8963027, name: "츠츠허허",
                address: "광주 북구 설죽로217번길 12",
                details: "<b>◈ 소주&맥주 3+1</b><br><b>◈ 생일자 테이블에,</b><br>- 깐쇼or칠리or크림새우 서비스",
                instaLink: "https://www.instagram.com/p/C4HeBM6SdPG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F6mbGJJZ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1724089, lng: 126.8978331, name: "Cafe imt",
                address: "광주 북구 용봉로 7 명작빌딩 1층",
                details: "<b>◈ 14:00~22:00 동안</b><br>- 음료 10% 할인",
                instaLink: "https://www.instagram.com/p/C4Hd2lFyjKn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xjej5RRt", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1773409, lng: 126.9027231, name: "카페 OCOC",
                address: "광주 북구 설죽로202번길 94",
                details: "<b>◈ 샌드위치 & 머핀류</b><br>- 1000원 할인",
                instaLink: "https://www.instagram.com/p/C4HdXrFy3Xx/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GJvZNOBH", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1772282, lng: 126.9021909, name: "승룡헬스",
                address: "광주 북구 설죽로202번길 88 4층",
                details: "<b>◈ 회원권 10일 연장</b><br><b>◈ 또는 PT 1회 추가제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdLKAyR1N/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GazhrO0C", imageUrl: "static/images/health.png"
            },
            {
                lat: 35.1772682, lng: 126.9022309, name: "2층치킨",
                address: "광주 북구 설죽로202번길 88 1층",
                details: "<b>◈ 병맥주 & 생맥주 3+1</b><br>또는<br><b>◈ 원하는 사이드메뉴 1개제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdCM-S6fj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1772505, lng: 126.9024111, name: "아이센스PC방 상대점",
                address: "광주 북구 설죽로202번길 90 3층",
                details: "<b>◈ 이용시간 1시간 추가</b><br>또는<br><b>◈ 아이스아메리카노 제공</b><br>- *(단, PC방계정당 1회에 한함)",
                instaLink: "https://www.instagram.com/p/C4Hc3nCSjl2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/game.png"
            }
        ],
        'agriculture': [
            {
                lat: 35.1808780, lng: 126.9040242, name: "연꽃빌라",
                address: "광주 북구 용주로30번길 67 1층",
                details: "<b>◈ 음료가격 10% 할인</b><br><b>◈ 디저트 10,000원 이상 구매시</b><br>- 아메리카노 증정",
                instaLink: "https://www.instagram.com/p/C6saYE3ruio/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FKOc01bR", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1809180, lng: 126.9040642, name: "야작",
                address: "광주 북구 용주로30번길 67",
                details: "<b>◈ 나베포함 3만원이상 주문시</b><br>- 칼국수 면 추가<br><b>◈ 총 주문금액 6만원 이상 시</b><br>- 감자튀김, 샤베트 중 택1<br><b>◈ 10만원 이상 결제시</b><br>- 추가금액 10%할인<br>- * (현금or계좌이체)",
                instaLink: "https://www.instagram.com/p/C6X1KZbrpPJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xGODFmCv", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1779180, lng: 126.9043686, name: "케주베이커리 상대점",
                address: "광주 북구 설죽로214번길 123 1층",
                details: "<b>◈ 8,000원 이상 구매 시,</b><br>- 아메리카노, 아이스티, 얼그레이아이스티 중 1잔 무료증정<br><b>◈ 10,000원 이상 구매 시,</b><br>- 프레첼 머랭 쿠키 증정<br>",
                instaLink: "https://www.instagram.com/p/C5w2Dmrh8Gy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F1MwJmzi", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1757980, lng: 126.9127170, name: "홈즈앤루팡",
                address: "광주 북구 우치로 94 3층",
                details: "<b>◈ 시간제 요금제</b><br>- 시간당 1,000원 할인<br><b>◈ 4인 이상 동반시,</b><br>- 나쵸 증정<br><b>◈ 제휴대상 1인당,</b><br>- 동반 1인 적용<br>",
                instaLink: "https://www.instagram.com/p/C5w157DhUO7/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xt5si6jb", imageUrl: "static/images/game.png"
            },
            {
                lat: 35.1721281, lng: 126.9049638, name: "네일손다음",
                address: "광주 북구 자미로 68 2층",
                details: "<b>◈ 타샵제거 무료</b><br><b>◈ 시술금액 10% 할인</b><br>* (단, 제거만하면 타샵제거비발생)",
                instaLink: "https://www.instagram.com/p/C5NI6VjLbes/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FzQevt1U", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1782932, lng: 126.9123366, name: "샐러디",
                address: "광주 북구 우치로 122",
                details: "<b>◈ 주문후 학생증제시하면 음료수제공</b><br>*(단, 제로콜라, 스프라이트, 웰치스, 스파클링워터 중 택1)",
                instaLink: "https://www.instagram.com/p/C5NI1IbL8kD/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/I54ZWaEA", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765968, lng: 126.9140586, name: "한라맥주",
                address: "광주 북구 우치로100번길 27",
                details: "<b>◈ 8인 이하 시</b><br>- 어묵채튀김 or 튀김쥐포 제공",
                instaLink: "https://www.instagram.com/p/C47FpJZrHOn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G3J8fABp", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1710495, lng: 126.9034766, name: "초망래쉬",
                address: "광주 북구 서양로 17 1층",
                details: "<b>◈ 최초 1회</b><br>- 5000원 할인<br>- 케라틴 클리닉<br><b>◈ 이후 상시 5000원 할인</b>",
                instaLink: "https://www.instagram.com/p/C47FgaXrgFG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/51ajyjwf", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1778699, lng: 126.8996322, name: "대주당가",
                address: "광주 북구 반룡로18번길 29",
                details: "<b>◈ 음료 1개 서비스제공</b><br><b>◈ 춘부집 영수증들고 대주당가 방문시,</b><br>- 전체금액 10% 할인",
                instaLink: "https://www.instagram.com/p/C4ueR3SrOuJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F9p9gQI3", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1800528, lng: 126.9015632, name: "춘부집",
                address: "광주 북구 반룡로27번길 24",
                details: "<b>◈ 음료수 서비스 제공</b><br><b>◈ 포인트 10% 적립</b>",
                instaLink: "https://www.instagram.com/p/C4ueKtJL6ay/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xKQzKGwJ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765941, lng: 126.9139314, name: "희희술집",
                address: "광주 북구 우치로100번길 25",
                details: "<b>◈ 아이스크림, 고로케, 황도, 감튀</b><br>- 중에서 1개 서비스 제공",
                instaLink: "https://www.instagram.com/p/C4rh2gJreuc/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xOvw9Rb2", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1772482, lng: 126.9022109, name: "테이스티",
                address: "광주 북구 설죽로202번길 88",
                details: "<b>◈ 핫도그 2개 이상 구매시</b><br>- 190ml 음료 1개 제공<br><b>◈ 타코야끼 구매 시,</b><br>- 2알 서비스 제공<br><b>◈ 감튀가 포함된 세트구매시,</b><br>- 감자튀김 치즈 추가",
                instaLink: "https://www.instagram.com/p/C4rhwiWLpBs/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5YwjmzpK", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1789850, lng: 126.9024472, name: "고향회관",
                address: "광주 북구 반룡로41번길 3",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 4인 이상 & 현금결제시,</b><br>- 삼겹살 1인분당 천원할인<br>- OR 오리탕 리필 1회",
                instaLink: "https://www.instagram.com/p/C4pTsgLr2ua/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F36TLPzW", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775670, lng: 126.8954554, name: "술링",
                address: "광주 북구 저불로 36 1층",
                details: "<b>◈ 4인기준 테이블 당,</b><br>- 메인안주 1개 제공",
                instaLink: "https://www.instagram.com/p/C4pTmKbrky_/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G6DyB1cX", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1777404, lng: 126.8950567, name: "꽃다운주점",
                address: "광주 북구 저불로 37 1층",
                details: "<b>◈ 전체 금액의 10% 할인</b>",
                instaLink: "https://www.instagram.com/p/C4pTbs3rtoj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5xnUZ2iU", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1714511, lng: 126.9036737, name: "골목",
                address: "광주 북구 용봉로 62-6 1층",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 3인 이상 시,</b><br>- 타꼬야끼(사이드) 1개 서비스",
                instaLink: "https://www.instagram.com/p/C4cGaWNLvku/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FLBKf4EQ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1723885, lng: 126.9062724, name: "술돼지",
                address: "광주 북구 용봉로 88",
                details: "<b>◈ 2인 이상 시</b><br>- 껍데기 서비스<br><b>◈ 4인 이상 시,</b><br>- 열무국수 서비스<br>- 또는 10%할인",
                instaLink: "https://www.instagram.com/p/C4Zmn-pLKKy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5Ndem0Zn", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775318, lng: 126.9005725, name: "통발",
                address: "광주 북구 반룡로28번길 32-1",
                details: "<b>◈ 주먹밥 OR 음료수 제공</b>",
                instaLink: "https://www.instagram.com/p/C4Xuo2lhbV2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FgivZzyx", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1783497, lng: 126.9039905, name: "동흥루",
                address: "광주 북구 반룡로 56",
                details: "<b>◈ 인원수에 맞게</b><br>- 군만두 or 음료수 서비스<br><b>◈ 현금 결제 시,</b><br>- 인당 500원 할인",
                instaLink: "https://www.instagram.com/p/C4HeOLsyyJY/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/IxDT4we4", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1792078, lng: 126.8963027, name: "츠츠허허",
                address: "광주 북구 설죽로217번길 12",
                details: "<b>◈ 소주&맥주 3+1</b><br><b>◈ 생일자 테이블에,</b><br>- 깐쇼or칠리or크림새우 서비스",
                instaLink: "https://www.instagram.com/p/C4HeBM6SdPG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F6mbGJJZ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1724089, lng: 126.8978331, name: "Cafe imt",
                address: "광주 북구 용봉로 7 명작빌딩 1층",
                details: "<b>◈ 14:00~22:00 동안</b><br>- 음료 10% 할인",
                instaLink: "https://www.instagram.com/p/C4Hd2lFyjKn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xjej5RRt", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1773409, lng: 126.9027231, name: "카페 OCOC",
                address: "광주 북구 설죽로202번길 94",
                details: "<b>◈ 샌드위치 & 머핀류</b><br>- 1000원 할인",
                instaLink: "https://www.instagram.com/p/C4HdXrFy3Xx/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GJvZNOBH", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1772282, lng: 126.9021909, name: "승룡헬스",
                address: "광주 북구 설죽로202번길 88 4층",
                details: "<b>◈ 회원권 10일 연장</b><br><b>◈ 또는 PT 1회 추가제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdLKAyR1N/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GazhrO0C", imageUrl: "static/images/health.png"
            },
            {
                lat: 35.1772682, lng: 126.9022309, name: "2층치킨",
                address: "광주 북구 설죽로202번길 88 1층",
                details: "<b>◈ 병맥주 & 생맥주 3+1</b><br>또는<br><b>◈ 원하는 사이드메뉴 1개제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdCM-S6fj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1772505, lng: 126.9024111, name: "아이센스PC방 상대점",
                address: "광주 북구 설죽로202번길 90 3층",
                details: "<b>◈ 이용시간 1시간 추가</b><br>또는<br><b>◈ 아이스아메리카노 제공</b><br>- *(단, PC방계정당 1회에 한함)",
                instaLink: "https://www.instagram.com/p/C4Hc3nCSjl2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/game.png"
            }
        ],
        'social': [
            {
                lat: 35.1808780, lng: 126.9040242, name: "연꽃빌라",
                address: "광주 북구 용주로30번길 67 1층",
                details: "<b>◈ 음료가격 10% 할인</b><br><b>◈ 디저트 10,000원 이상 구매시</b><br>- 아메리카노 증정",
                instaLink: "https://www.instagram.com/p/C6saYE3ruio/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FKOc01bR", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1809180, lng: 126.9040642, name: "야작",
                address: "광주 북구 용주로30번길 67",
                details: "<b>◈ 나베포함 3만원이상 주문시</b><br>- 칼국수 면 추가<br><b>◈ 총 주문금액 6만원 이상 시</b><br>- 감자튀김, 샤베트 중 택1<br><b>◈ 10만원 이상 결제시</b><br>- 추가금액 10%할인<br>- * (현금or계좌이체)",
                instaLink: "https://www.instagram.com/p/C6X1KZbrpPJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xGODFmCv", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1779180, lng: 126.9043686, name: "케주베이커리 상대점",
                address: "광주 북구 설죽로214번길 123 1층",
                details: "<b>◈ 8,000원 이상 구매 시,</b><br>- 아메리카노, 아이스티, 얼그레이아이스티 중 1잔 무료증정<br><b>◈ 10,000원 이상 구매 시,</b><br>- 프레첼 머랭 쿠키 증정<br>",
                instaLink: "https://www.instagram.com/p/C5w2Dmrh8Gy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F1MwJmzi", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1757980, lng: 126.9127170, name: "홈즈앤루팡",
                address: "광주 북구 우치로 94 3층",
                details: "<b>◈ 시간제 요금제</b><br>- 시간당 1,000원 할인<br><b>◈ 4인 이상 동반시,</b><br>- 나쵸 증정<br><b>◈ 제휴대상 1인당,</b><br>- 동반 1인 적용<br>",
                instaLink: "https://www.instagram.com/p/C5w157DhUO7/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xt5si6jb", imageUrl: "static/images/game.png"
            },
            {
                lat: 35.1721281, lng: 126.9049638, name: "네일손다음",
                address: "광주 북구 자미로 68 2층",
                details: "<b>◈ 타샵제거 무료</b><br><b>◈ 시술금액 10% 할인</b><br>* (단, 제거만하면 타샵제거비발생)",
                instaLink: "https://www.instagram.com/p/C5NI6VjLbes/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FzQevt1U", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1782932, lng: 126.9123366, name: "샐러디",
                address: "광주 북구 우치로 122",
                details: "<b>◈ 주문후 학생증제시하면 음료수제공</b><br>*(단, 제로콜라, 스프라이트, 웰치스, 스파클링워터 중 택1)",
                instaLink: "https://www.instagram.com/p/C5NI1IbL8kD/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/I54ZWaEA", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765968, lng: 126.9140586, name: "한라맥주",
                address: "광주 북구 우치로100번길 27",
                details: "<b>◈ 8인 이하 시</b><br>- 어묵채튀김 or 튀김쥐포 제공",
                instaLink: "https://www.instagram.com/p/C47FpJZrHOn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G3J8fABp", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1710495, lng: 126.9034766, name: "초망래쉬",
                address: "광주 북구 서양로 17 1층",
                details: "<b>◈ 최초 1회</b><br>- 5000원 할인<br>- 케라틴 클리닉<br><b>◈ 이후 상시 5000원 할인</b>",
                instaLink: "https://www.instagram.com/p/C47FgaXrgFG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/51ajyjwf", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1778699, lng: 126.8996322, name: "대주당가",
                address: "광주 북구 반룡로18번길 29",
                details: "<b>◈ 음료 1개 서비스제공</b><br><b>◈ 춘부집 영수증들고 대주당가 방문시,</b><br>- 전체금액 10% 할인",
                instaLink: "https://www.instagram.com/p/C4ueR3SrOuJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F9p9gQI3", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1800528, lng: 126.9015632, name: "춘부집",
                address: "광주 북구 반룡로27번길 24",
                details: "<b>◈ 음료수 서비스 제공</b><br><b>◈ 포인트 10% 적립</b>",
                instaLink: "https://www.instagram.com/p/C4ueKtJL6ay/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xKQzKGwJ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765941, lng: 126.9139314, name: "희희술집",
                address: "광주 북구 우치로100번길 25",
                details: "<b>◈ 아이스크림, 고로케, 황도, 감튀</b><br>- 중에서 1개 서비스 제공",
                instaLink: "https://www.instagram.com/p/C4rh2gJreuc/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xOvw9Rb2", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1772482, lng: 126.9022109, name: "테이스티",
                address: "광주 북구 설죽로202번길 88",
                details: "<b>◈ 핫도그 2개 이상 구매시</b><br>- 190ml 음료 1개 제공<br><b>◈ 타코야끼 구매 시,</b><br>- 2알 서비스 제공<br><b>◈ 감튀가 포함된 세트구매시,</b><br>- 감자튀김 치즈 추가",
                instaLink: "https://www.instagram.com/p/C4rhwiWLpBs/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5YwjmzpK", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1789850, lng: 126.9024472, name: "고향회관",
                address: "광주 북구 반룡로41번길 3",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 4인 이상 & 현금결제시,</b><br>- 삼겹살 1인분당 천원할인<br>- OR 오리탕 리필 1회",
                instaLink: "https://www.instagram.com/p/C4pTsgLr2ua/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F36TLPzW", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775670, lng: 126.8954554, name: "술링",
                address: "광주 북구 저불로 36 1층",
                details: "<b>◈ 4인기준 테이블 당,</b><br>- 메인안주 1개 제공",
                instaLink: "https://www.instagram.com/p/C4pTmKbrky_/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G6DyB1cX", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1777404, lng: 126.8950567, name: "꽃다운주점",
                address: "광주 북구 저불로 37 1층",
                details: "<b>◈ 전체 금액의 10% 할인</b>",
                instaLink: "https://www.instagram.com/p/C4pTbs3rtoj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5xnUZ2iU", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1714511, lng: 126.9036737, name: "골목",
                address: "광주 북구 용봉로 62-6 1층",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 3인 이상 시,</b><br>- 타꼬야끼(사이드) 1개 서비스",
                instaLink: "https://www.instagram.com/p/C4cGaWNLvku/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FLBKf4EQ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1723885, lng: 126.9062724, name: "술돼지",
                address: "광주 북구 용봉로 88",
                details: "<b>◈ 2인 이상 시</b><br>- 껍데기 서비스<br><b>◈ 4인 이상 시,</b><br>- 열무국수 서비스<br>- 또는 10%할인",
                instaLink: "https://www.instagram.com/p/C4Zmn-pLKKy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5Ndem0Zn", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775318, lng: 126.9005725, name: "통발",
                address: "광주 북구 반룡로28번길 32-1",
                details: "<b>◈ 주먹밥 OR 음료수 제공</b>",
                instaLink: "https://www.instagram.com/p/C4Xuo2lhbV2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FgivZzyx", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1783497, lng: 126.9039905, name: "동흥루",
                address: "광주 북구 반룡로 56",
                details: "<b>◈ 인원수에 맞게</b><br>- 군만두 or 음료수 서비스<br><b>◈ 현금 결제 시,</b><br>- 인당 500원 할인",
                instaLink: "https://www.instagram.com/p/C4HeOLsyyJY/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/IxDT4we4", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1792078, lng: 126.8963027, name: "츠츠허허",
                address: "광주 북구 설죽로217번길 12",
                details: "<b>◈ 소주&맥주 3+1</b><br><b>◈ 생일자 테이블에,</b><br>- 깐쇼or칠리or크림새우 서비스",
                instaLink: "https://www.instagram.com/p/C4HeBM6SdPG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F6mbGJJZ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1724089, lng: 126.8978331, name: "Cafe imt",
                address: "광주 북구 용봉로 7 명작빌딩 1층",
                details: "<b>◈ 14:00~22:00 동안</b><br>- 음료 10% 할인",
                instaLink: "https://www.instagram.com/p/C4Hd2lFyjKn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xjej5RRt", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1773409, lng: 126.9027231, name: "카페 OCOC",
                address: "광주 북구 설죽로202번길 94",
                details: "<b>◈ 샌드위치 & 머핀류</b><br>- 1000원 할인",
                instaLink: "https://www.instagram.com/p/C4HdXrFy3Xx/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GJvZNOBH", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1772282, lng: 126.9021909, name: "승룡헬스",
                address: "광주 북구 설죽로202번길 88 4층",
                details: "<b>◈ 회원권 10일 연장</b><br><b>◈ 또는 PT 1회 추가제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdLKAyR1N/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GazhrO0C", imageUrl: "static/images/health.png"
            },
            {
                lat: 35.1772682, lng: 126.9022309, name: "2층치킨",
                address: "광주 북구 설죽로202번길 88 1층",
                details: "<b>◈ 병맥주 & 생맥주 3+1</b><br>또는<br><b>◈ 원하는 사이드메뉴 1개제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdCM-S6fj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1772505, lng: 126.9024111, name: "아이센스PC방 상대점",
                address: "광주 북구 설죽로202번길 90 3층",
                details: "<b>◈ 이용시간 1시간 추가</b><br>또는<br><b>◈ 아이스아메리카노 제공</b><br>- *(단, PC방계정당 1회에 한함)",
                instaLink: "https://www.instagram.com/p/C4Hc3nCSjl2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/game.png"
            }
        ],
        'veterinary': [
            {
                lat: 35.1808780, lng: 126.9040242, name: "연꽃빌라",
                address: "광주 북구 용주로30번길 67 1층",
                details: "<b>◈ 음료가격 10% 할인</b><br><b>◈ 디저트 10,000원 이상 구매시</b><br>- 아메리카노 증정",
                instaLink: "https://www.instagram.com/p/C6saYE3ruio/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FKOc01bR", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1809180, lng: 126.9040642, name: "야작",
                address: "광주 북구 용주로30번길 67",
                details: "<b>◈ 나베포함 3만원이상 주문시</b><br>- 칼국수 면 추가<br><b>◈ 총 주문금액 6만원 이상 시</b><br>- 감자튀김, 샤베트 중 택1<br><b>◈ 10만원 이상 결제시</b><br>- 추가금액 10%할인<br>- * (현금or계좌이체)",
                instaLink: "https://www.instagram.com/p/C6X1KZbrpPJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xGODFmCv", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1779180, lng: 126.9043686, name: "케주베이커리 상대점",
                address: "광주 북구 설죽로214번길 123 1층",
                details: "<b>◈ 8,000원 이상 구매 시,</b><br>- 아메리카노, 아이스티, 얼그레이아이스티 중 1잔 무료증정<br><b>◈ 10,000원 이상 구매 시,</b><br>- 프레첼 머랭 쿠키 증정<br>",
                instaLink: "https://www.instagram.com/p/C5w2Dmrh8Gy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F1MwJmzi", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1757980, lng: 126.9127170, name: "홈즈앤루팡",
                address: "광주 북구 우치로 94 3층",
                details: "<b>◈ 시간제 요금제</b><br>- 시간당 1,000원 할인<br><b>◈ 4인 이상 동반시,</b><br>- 나쵸 증정<br><b>◈ 제휴대상 1인당,</b><br>- 동반 1인 적용<br>",
                instaLink: "https://www.instagram.com/p/C5w157DhUO7/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xt5si6jb", imageUrl: "static/images/game.png"
            },
            {
                lat: 35.1721281, lng: 126.9049638, name: "네일손다음",
                address: "광주 북구 자미로 68 2층",
                details: "<b>◈ 타샵제거 무료</b><br><b>◈ 시술금액 10% 할인</b><br>* (단, 제거만하면 타샵제거비발생)",
                instaLink: "https://www.instagram.com/p/C5NI6VjLbes/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FzQevt1U", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1782932, lng: 126.9123366, name: "샐러디",
                address: "광주 북구 우치로 122",
                details: "<b>◈ 주문후 학생증제시하면 음료수제공</b><br>*(단, 제로콜라, 스프라이트, 웰치스, 스파클링워터 중 택1)",
                instaLink: "https://www.instagram.com/p/C5NI1IbL8kD/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/I54ZWaEA", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765968, lng: 126.9140586, name: "한라맥주",
                address: "광주 북구 우치로100번길 27",
                details: "<b>◈ 8인 이하 시</b><br>- 어묵채튀김 or 튀김쥐포 제공",
                instaLink: "https://www.instagram.com/p/C47FpJZrHOn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G3J8fABp", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1710495, lng: 126.9034766, name: "초망래쉬",
                address: "광주 북구 서양로 17 1층",
                details: "<b>◈ 최초 1회</b><br>- 5000원 할인<br>- 케라틴 클리닉<br><b>◈ 이후 상시 5000원 할인</b>",
                instaLink: "https://www.instagram.com/p/C47FgaXrgFG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/51ajyjwf", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1778699, lng: 126.8996322, name: "대주당가",
                address: "광주 북구 반룡로18번길 29",
                details: "<b>◈ 음료 1개 서비스제공</b><br><b>◈ 춘부집 영수증들고 대주당가 방문시,</b><br>- 전체금액 10% 할인",
                instaLink: "https://www.instagram.com/p/C4ueR3SrOuJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F9p9gQI3", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1800528, lng: 126.9015632, name: "춘부집",
                address: "광주 북구 반룡로27번길 24",
                details: "<b>◈ 음료수 서비스 제공</b><br><b>◈ 포인트 10% 적립</b>",
                instaLink: "https://www.instagram.com/p/C4ueKtJL6ay/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xKQzKGwJ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765941, lng: 126.9139314, name: "희희술집",
                address: "광주 북구 우치로100번길 25",
                details: "<b>◈ 아이스크림, 고로케, 황도, 감튀</b><br>- 중에서 1개 서비스 제공",
                instaLink: "https://www.instagram.com/p/C4rh2gJreuc/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xOvw9Rb2", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1772482, lng: 126.9022109, name: "테이스티",
                address: "광주 북구 설죽로202번길 88",
                details: "<b>◈ 핫도그 2개 이상 구매시</b><br>- 190ml 음료 1개 제공<br><b>◈ 타코야끼 구매 시,</b><br>- 2알 서비스 제공<br><b>◈ 감튀가 포함된 세트구매시,</b><br>- 감자튀김 치즈 추가",
                instaLink: "https://www.instagram.com/p/C4rhwiWLpBs/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5YwjmzpK", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1789850, lng: 126.9024472, name: "고향회관",
                address: "광주 북구 반룡로41번길 3",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 4인 이상 & 현금결제시,</b><br>- 삼겹살 1인분당 천원할인<br>- OR 오리탕 리필 1회",
                instaLink: "https://www.instagram.com/p/C4pTsgLr2ua/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F36TLPzW", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775670, lng: 126.8954554, name: "술링",
                address: "광주 북구 저불로 36 1층",
                details: "<b>◈ 4인기준 테이블 당,</b><br>- 메인안주 1개 제공",
                instaLink: "https://www.instagram.com/p/C4pTmKbrky_/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G6DyB1cX", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1777404, lng: 126.8950567, name: "꽃다운주점",
                address: "광주 북구 저불로 37 1층",
                details: "<b>◈ 전체 금액의 10% 할인</b>",
                instaLink: "https://www.instagram.com/p/C4pTbs3rtoj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5xnUZ2iU", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1714511, lng: 126.9036737, name: "골목",
                address: "광주 북구 용봉로 62-6 1층",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 3인 이상 시,</b><br>- 타꼬야끼(사이드) 1개 서비스",
                instaLink: "https://www.instagram.com/p/C4cGaWNLvku/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FLBKf4EQ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1723885, lng: 126.9062724, name: "술돼지",
                address: "광주 북구 용봉로 88",
                details: "<b>◈ 2인 이상 시</b><br>- 껍데기 서비스<br><b>◈ 4인 이상 시,</b><br>- 열무국수 서비스<br>- 또는 10%할인",
                instaLink: "https://www.instagram.com/p/C4Zmn-pLKKy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5Ndem0Zn", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775318, lng: 126.9005725, name: "통발",
                address: "광주 북구 반룡로28번길 32-1",
                details: "<b>◈ 주먹밥 OR 음료수 제공</b>",
                instaLink: "https://www.instagram.com/p/C4Xuo2lhbV2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FgivZzyx", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1783497, lng: 126.9039905, name: "동흥루",
                address: "광주 북구 반룡로 56",
                details: "<b>◈ 인원수에 맞게</b><br>- 군만두 or 음료수 서비스<br><b>◈ 현금 결제 시,</b><br>- 인당 500원 할인",
                instaLink: "https://www.instagram.com/p/C4HeOLsyyJY/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/IxDT4we4", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1792078, lng: 126.8963027, name: "츠츠허허",
                address: "광주 북구 설죽로217번길 12",
                details: "<b>◈ 소주&맥주 3+1</b><br><b>◈ 생일자 테이블에,</b><br>- 깐쇼or칠리or크림새우 서비스",
                instaLink: "https://www.instagram.com/p/C4HeBM6SdPG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F6mbGJJZ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1724089, lng: 126.8978331, name: "Cafe imt",
                address: "광주 북구 용봉로 7 명작빌딩 1층",
                details: "<b>◈ 14:00~22:00 동안</b><br>- 음료 10% 할인",
                instaLink: "https://www.instagram.com/p/C4Hd2lFyjKn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xjej5RRt", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1773409, lng: 126.9027231, name: "카페 OCOC",
                address: "광주 북구 설죽로202번길 94",
                details: "<b>◈ 샌드위치 & 머핀류</b><br>- 1000원 할인",
                instaLink: "https://www.instagram.com/p/C4HdXrFy3Xx/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GJvZNOBH", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1772282, lng: 126.9021909, name: "승룡헬스",
                address: "광주 북구 설죽로202번길 88 4층",
                details: "<b>◈ 회원권 10일 연장</b><br><b>◈ 또는 PT 1회 추가제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdLKAyR1N/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GazhrO0C", imageUrl: "static/images/health.png"
            },
            {
                lat: 35.1772682, lng: 126.9022309, name: "2층치킨",
                address: "광주 북구 설죽로202번길 88 1층",
                details: "<b>◈ 병맥주 & 생맥주 3+1</b><br>또는<br><b>◈ 원하는 사이드메뉴 1개제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdCM-S6fj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1772505, lng: 126.9024111, name: "아이센스PC방 상대점",
                address: "광주 북구 설죽로202번길 90 3층",
                details: "<b>◈ 이용시간 1시간 추가</b><br>또는<br><b>◈ 아이스아메리카노 제공</b><br>- *(단, PC방계정당 1회에 한함)",
                instaLink: "https://www.instagram.com/p/C4Hc3nCSjl2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/game.png"
            }
        ],
        'business': [
            {
                lat: 35.1808780, lng: 126.9040242, name: "연꽃빌라",
                address: "광주 북구 용주로30번길 67 1층",
                details: "<b>◈ 음료가격 10% 할인</b><br><b>◈ 디저트 10,000원 이상 구매시</b><br>- 아메리카노 증정",
                instaLink: "https://www.instagram.com/p/C6saYE3ruio/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FKOc01bR", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1809180, lng: 126.9040642, name: "야작",
                address: "광주 북구 용주로30번길 67",
                details: "<b>◈ 나베포함 3만원이상 주문시</b><br>- 칼국수 면 추가<br><b>◈ 총 주문금액 6만원 이상 시</b><br>- 감자튀김, 샤베트 중 택1<br><b>◈ 10만원 이상 결제시</b><br>- 추가금액 10%할인<br>- * (현금or계좌이체)",
                instaLink: "https://www.instagram.com/p/C6X1KZbrpPJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xGODFmCv", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1779180, lng: 126.9043686, name: "케주베이커리 상대점",
                address: "광주 북구 설죽로214번길 123 1층",
                details: "<b>◈ 8,000원 이상 구매 시,</b><br>- 아메리카노, 아이스티, 얼그레이아이스티 중 1잔 무료증정<br><b>◈ 10,000원 이상 구매 시,</b><br>- 프레첼 머랭 쿠키 증정<br>",
                instaLink: "https://www.instagram.com/p/C5w2Dmrh8Gy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F1MwJmzi", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1757980, lng: 126.9127170, name: "홈즈앤루팡",
                address: "광주 북구 우치로 94 3층",
                details: "<b>◈ 시간제 요금제</b><br>- 시간당 1,000원 할인<br><b>◈ 4인 이상 동반시,</b><br>- 나쵸 증정<br><b>◈ 제휴대상 1인당,</b><br>- 동반 1인 적용<br>",
                instaLink: "https://www.instagram.com/p/C5w157DhUO7/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xt5si6jb", imageUrl: "static/images/game.png"
            },
            {
                lat: 35.1721281, lng: 126.9049638, name: "네일손다음",
                address: "광주 북구 자미로 68 2층",
                details: "<b>◈ 타샵제거 무료</b><br><b>◈ 시술금액 10% 할인</b><br>* (단, 제거만하면 타샵제거비발생)",
                instaLink: "https://www.instagram.com/p/C5NI6VjLbes/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FzQevt1U", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1782932, lng: 126.9123366, name: "샐러디",
                address: "광주 북구 우치로 122",
                details: "<b>◈ 주문후 학생증제시하면 음료수제공</b><br>*(단, 제로콜라, 스프라이트, 웰치스, 스파클링워터 중 택1)",
                instaLink: "https://www.instagram.com/p/C5NI1IbL8kD/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/I54ZWaEA", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765968, lng: 126.9140586, name: "한라맥주",
                address: "광주 북구 우치로100번길 27",
                details: "<b>◈ 8인 이하 시</b><br>- 어묵채튀김 or 튀김쥐포 제공",
                instaLink: "https://www.instagram.com/p/C47FpJZrHOn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G3J8fABp", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1710495, lng: 126.9034766, name: "초망래쉬",
                address: "광주 북구 서양로 17 1층",
                details: "<b>◈ 최초 1회</b><br>- 5000원 할인<br>- 케라틴 클리닉<br><b>◈ 이후 상시 5000원 할인</b>",
                instaLink: "https://www.instagram.com/p/C47FgaXrgFG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/51ajyjwf", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1778699, lng: 126.8996322, name: "대주당가",
                address: "광주 북구 반룡로18번길 29",
                details: "<b>◈ 음료 1개 서비스제공</b><br><b>◈ 춘부집 영수증들고 대주당가 방문시,</b><br>- 전체금액 10% 할인",
                instaLink: "https://www.instagram.com/p/C4ueR3SrOuJ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F9p9gQI3", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1800528, lng: 126.9015632, name: "춘부집",
                address: "광주 북구 반룡로27번길 24",
                details: "<b>◈ 음료수 서비스 제공</b><br><b>◈ 포인트 10% 적립</b>",
                instaLink: "https://www.instagram.com/p/C4ueKtJL6ay/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xKQzKGwJ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1765941, lng: 126.9139314, name: "희희술집",
                address: "광주 북구 우치로100번길 25",
                details: "<b>◈ 아이스크림, 고로케, 황도, 감튀</b><br>- 중에서 1개 서비스 제공",
                instaLink: "https://www.instagram.com/p/C4rh2gJreuc/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xOvw9Rb2", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1772482, lng: 126.9022109, name: "테이스티",
                address: "광주 북구 설죽로202번길 88",
                details: "<b>◈ 핫도그 2개 이상 구매시</b><br>- 190ml 음료 1개 제공<br><b>◈ 타코야끼 구매 시,</b><br>- 2알 서비스 제공<br><b>◈ 감튀가 포함된 세트구매시,</b><br>- 감자튀김 치즈 추가",
                instaLink: "https://www.instagram.com/p/C4rhwiWLpBs/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5YwjmzpK", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1789850, lng: 126.9024472, name: "고향회관",
                address: "광주 북구 반룡로41번길 3",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 4인 이상 & 현금결제시,</b><br>- 삼겹살 1인분당 천원할인<br>- OR 오리탕 리필 1회",
                instaLink: "https://www.instagram.com/p/C4pTsgLr2ua/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F36TLPzW", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775670, lng: 126.8954554, name: "술링",
                address: "광주 북구 저불로 36 1층",
                details: "<b>◈ 4인기준 테이블 당,</b><br>- 메인안주 1개 제공",
                instaLink: "https://www.instagram.com/p/C4pTmKbrky_/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G6DyB1cX", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1777404, lng: 126.8950567, name: "꽃다운주점",
                address: "광주 북구 저불로 37 1층",
                details: "<b>◈ 전체 금액의 10% 할인</b>",
                instaLink: "https://www.instagram.com/p/C4pTbs3rtoj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5xnUZ2iU", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1714511, lng: 126.9036737, name: "골목",
                address: "광주 북구 용봉로 62-6 1층",
                details: "<b>◈ 2인 이상 시</b><br>- 음료 1개 서비스<br><b>◈ 3인 이상 시,</b><br>- 타꼬야끼(사이드) 1개 서비스",
                instaLink: "https://www.instagram.com/p/C4cGaWNLvku/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FLBKf4EQ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1723885, lng: 126.9062724, name: "술돼지",
                address: "광주 북구 용봉로 88",
                details: "<b>◈ 2인 이상 시</b><br>- 껍데기 서비스<br><b>◈ 4인 이상 시,</b><br>- 열무국수 서비스<br>- 또는 10%할인",
                instaLink: "https://www.instagram.com/p/C4Zmn-pLKKy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5Ndem0Zn", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1775318, lng: 126.9005725, name: "통발",
                address: "광주 북구 반룡로28번길 32-1",
                details: "<b>◈ 주먹밥 OR 음료수 제공</b>",
                instaLink: "https://www.instagram.com/p/C4Xuo2lhbV2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FgivZzyx", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1783497, lng: 126.9039905, name: "동흥루",
                address: "광주 북구 반룡로 56",
                details: "<b>◈ 인원수에 맞게</b><br>- 군만두 or 음료수 서비스<br><b>◈ 현금 결제 시,</b><br>- 인당 500원 할인",
                instaLink: "https://www.instagram.com/p/C4HeOLsyyJY/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/IxDT4we4", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1792078, lng: 126.8963027, name: "츠츠허허",
                address: "광주 북구 설죽로217번길 12",
                details: "<b>◈ 소주&맥주 3+1</b><br><b>◈ 생일자 테이블에,</b><br>- 깐쇼or칠리or크림새우 서비스",
                instaLink: "https://www.instagram.com/p/C4HeBM6SdPG/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F6mbGJJZ", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1724089, lng: 126.8978331, name: "Cafe imt",
                address: "광주 북구 용봉로 7 명작빌딩 1층",
                details: "<b>◈ 14:00~22:00 동안</b><br>- 음료 10% 할인",
                instaLink: "https://www.instagram.com/p/C4Hd2lFyjKn/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xjej5RRt", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1773409, lng: 126.9027231, name: "카페 OCOC",
                address: "광주 북구 설죽로202번길 94",
                details: "<b>◈ 샌드위치 & 머핀류</b><br>- 1000원 할인",
                instaLink: "https://www.instagram.com/p/C4HdXrFy3Xx/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GJvZNOBH", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1772282, lng: 126.9021909, name: "승룡헬스",
                address: "광주 북구 설죽로202번길 88 4층",
                details: "<b>◈ 회원권 10일 연장</b><br><b>◈ 또는 PT 1회 추가제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdLKAyR1N/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GazhrO0C", imageUrl: "static/images/health.png"
            },
            {
                lat: 35.1772682, lng: 126.9022309, name: "2층치킨",
                address: "광주 북구 설죽로202번길 88 1층",
                details: "<b>◈ 병맥주 & 생맥주 3+1</b><br>또는<br><b>◈ 원하는 사이드메뉴 1개제공</b>",
                instaLink: "https://www.instagram.com/p/C4HdCM-S6fj/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1772505, lng: 126.9024111, name: "아이센스PC방 상대점",
                address: "광주 북구 설죽로202번길 90 3층",
                details: "<b>◈ 이용시간 1시간 추가</b><br>또는<br><b>◈ 아이스아메리카노 제공</b><br>- *(단, PC방계정당 1회에 한함)",
                instaLink: "https://www.instagram.com/p/C4Hc3nCSjl2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5dy2Tl8e", imageUrl: "static/images/game.png"
            }
        ],
        'ai': [
            {
                lat: 35.1765922, lng: 126.9137724, name: "올리브",
                address: "광주 북구 우치로100번길 23 1-2층",
                details: "<b>◈ 2인  이상 이용시</b><br>서비스 안주 제공<br><br><b>◈ 단체(10인 이상) 이용시</b><br>5% 할인<br>* 단, 현금 또는 계좌이체시 적용",
                instaLink: "https://www.instagram.com/p/C6s8tayL2Er/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                naverLink: "https://naver.me/5B103Tbj", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1765968, lng: 126.9140586, name: "한라맥주",
                address: "광주 북구 우치로100번길 27",
                details: "<b>◈ 8인 이하 시</b><br>- 어묵채튀김 or 튀김쥐포 제공",
                instaLink: "https://www.instagram.com/p/C6szhqlrFei/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G3J8fABp", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1773443, lng: 126.9142636, name: "오늘김해뒷고기",
                address: "광주 북구 호동로15번길 49",
                details: "<b>◈ 테이블당</b><br>된장찌개 or 계란찜<br><b>中 택 1</b>",
                instaLink: "https://www.instagram.com/p/C6bKuizSqFd/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5WcBxqri", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1770404, lng: 126.9137868, name: "먹새통",
                address: "광주 북구 호동로63번길 74 1층",
                details: "<b>◈ 2인이상 : 튀김제공</b><br>- 감튀, 팝콘치킨, 튀김만두, 콜팝감자 택1<br><b>◈ 3-5명 : 탕제공</b><br>- 오뎅탕, 김치오뎅탕, 두부찌개, 물만두계란탕 택1<br><b>◈ 6-8명 : 샤벳제공</b><br>- 딸기, 초코 택1<br><b>◈ 9명이상 단체 : 주류 3+1</b>",
                instaLink: "https://www.instagram.com/p/C6bKn6MyfkB/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/IMnaLXHj", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1766555, lng: 126.9141974, name: "더맥소",
                address: "광주 북구 우치로100번길 31 1층",
                details: "<b>◈ 2인  이상 이용시</b><br>- 서비스 안주 제공<br><br><b>◈ 단체(8인 이상) 이용시</b><br>- 주류 3+1 제공<br><b>◈ 단체(10인 이상) 이용시</b><br>- 매출에 따른 추가 서비스안주 제공",
                instaLink: "https://www.instagram.com/p/C5vlzyzyAmv/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5Lo6ntlG", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1772636, lng: 126.9145247, name: "혼불",
                address: "광주 북구 호동로15번길 48 1층",
                details: "4인이상 방문시,<br>공대생 한정 특별메뉴판 제공",
                instaLink: "https://www.instagram.com/p/C5vcjx-SR12/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/FBQnG2nd", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1785970, lng: 126.9127618, name: "언컷",
                address: "광주 북구 우치로126번길 12 1층",
                details: "<b>◈ 첫 방문 시,</b><br>다운펌 3000원, 시술20%할인<br>+2000원 할인<br><br><b>◈ 이번 년도 까지,</b><br>다운펌 2000원 할인<br>시술 10% 할인",
                instaLink: "https://www.instagram.com/p/C4ugy0pr3pa/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/Fynadk8r", imageUrl: "static/images/beauty.png"
            }
        ],
        'arts': [
            {
                lat: 35.1770404, lng: 126.9137868, name: "먹새통",
                address: "광주 북구 호동로63번길 74 1층",
                details: "<b>◈ 2인이상 : 튀김제공</b><br>- 감튀, 팝콘치킨, 튀김만두, 콜팝감자 택1<br><b>◈ 3-5명 : 탕제공</b><br>- 오뎅탕, 김치오뎅탕, 두부찌개, 물만두계란탕 택1<br><b>◈ 6-8명 : 샤벳제공</b><br>- 딸기, 초코 택1<br><b>◈ 9명이상 단체 : 주류 3+1</b>",
                instaLink: "https://www.instagram.com/p/C5xxxLmSTWy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/IMnaLXHj", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1809180, lng: 126.9040642, name: "야작",
                address: "광주 북구 용주로30번길 67",
                details: "<b>◈ 나베포함 3만원이상 주문시</b><br>- 칼국수 면 추가<br><b>◈ 총 주문금액 6만원 이상 시</b><br>- 감자튀김, 샤베트 중 택1<br><b>◈ 인스타 스토리에 @yaaaaa_zak 태그후</b><br>- 업로드 시 아이스크림 서비스",
                instaLink: "https://www.instagram.com/p/C45Uiz3yAFq/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xGODFmCv", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1806806, lng: 126.9043230, name: "알리바바 커피",
                address: "광주 북구 용주로30번길 64-1",
                details: "<b>◈ 미술대학(디자인학과, 미술학과)</b><br>- 야작리카노(아이스아메리카노 리터사이즈,3샷)<br>- 2900원 -> 2600원<br><b>◈ 음악대학(국악학과, 음악학과)</b><br>- 피아코샷추(아이스티에 코코넛젤리+1샷)<br>- 3500원 -> 3300원",
                instaLink: "https://www.instagram.com/p/C6L5f10S53c/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5y48mcrb", imageUrl: "static/images/dessert.png"
            },
        ],
        'natural': [
            {
                lat: 35.1765922, lng: 126.9137724, name: "올리브",
                address: "광주 북구 우치로100번길 23 1-2층",
                details: "<b>◈ 서비스 메뉴 제공</b><br> 자연대학 학생 화채/튀김 등<br> 추가 서비스 제공<br><br><b>◈ 단체(10인 이상) 이용시</b><br>5% 할인<br>* 단, 현금 또는 계좌이체시 적용",
                instaLink: "https://www.instagram.com/p/C7RfyWZvEt_/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5B103Tbj", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1809180, lng: 126.9040642, name: "야작",
                address: "광주 북구 용주로30번길 67",
                details: "<b>◈ 나베포함 3만원이상 주문시</b><br>- 칼국수 면 추가<br><b>◈ 총 주문금액 6만원 이상 시</b><br>- 토마토바질, 바나나브륄레 중 택1<br><b>◈ 10만원 이상 결제시</b><br>- 추가금액 10%할인<br>- * (현금or계좌이체)",
                instaLink: "https://www.instagram.com/p/C7jF-rYvMAK/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xGODFmCv", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1760549, lng: 126.9133103, name: "피크닉스",
                address: "광주 북구 호동로43번길 64 2층",
                details: "<b>◈ 5,000원 이상 결제시</b><br>- 전체 금액의 10% 할인<br><br><b>◈ 매장내 이용고객 네이버리뷰 작성시</b><br>- 휘낭시에 or 쿠키 중 택 1",
                instaLink: "https://www.instagram.com/p/C7RMTs3vKAH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                naverLink: "https://naver.me/GABdZlrS", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1772918, lng: 126.9139464, name: "토키도키",
                address: "광주 북구 우치로110번길 28 1층",
                details: "<b>◈ 메인메뉴 주문 시</b><br>- 감자튀김 or 츄러스아이스크림 중 택 1<br><br><b>◈ 단체(6인이상) 할인</b><br>- 계좌이체 시 전체금액 5% 할인",
                instaLink: "https://www.instagram.com/p/C7RNpoYPVJH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                naverLink: "https://naver.me/FTk288Ej", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1751050, lng: 126.9130677, name: "안전가옥커피",
                address: "광주 북구 우치로90번길 8-8 1층 안전가옥",
                details: "<b>◈ 음료 테이크아웃 시 500원할인</b><br>(13시 이후부터)<br><br><b>◈ 10,000원 이상 결제 시</b><br>- 브라우니 or 휘낭시에 택 1(매장이용시)",
                instaLink: "https://www.instagram.com/p/C7W2hnivkpN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                naverLink: "https://naver.me/xqf8Zjjd", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1808733, lng: 126.9033323, name: "도토리 베이커리",
                address: "광주 북구 용주로30번길 47-3",
                details: "<b>◈ 빵과 함께 음료 구매 시</b><br>- 1,000원 할인<br><br><b>◈ 15,000원 이상 결제시 1,000원 할인</b><br><b>◈ 30,000원 이상 결제시 3,000원 할인</b>",
                instaLink: "https://www.instagram.com/p/C7fqEvQvXVu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                naverLink: "https://naver.me/5Udqd8P5", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1779366, lng: 126.9009564, name: "리피피",
                address: "광주 북구 설죽로214번길 60 2층",
                details: "<b>◈ 테이크아웃 시 음료 500원 할인</b><br><br><b> ◈매장이용고객 전용 혜택</b><br>- 네이버리뷰작성시 쿠키or버터바 서비스<br>- 10,000원 이상 결제시 디저트메뉴 1,000원 할인",
                instaLink: "https://www.instagram.com/p/C7f2aroPFmr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                naverLink: "https://naver.me/FLK9Bk4r", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1755030, lng: 126.9144365, name: "깡우동",
                address: "광주 북구 호동로15번길 8 1층 깡우동 전남대점",
                details: "<b>◈ 전 메뉴 1,000원 할인(음료및 주류제외)</b><br><b>◈ 총 주문 5만원 이상시 샤베트 서비스</b>",
                instaLink: "https://www.instagram.com/p/C7iltMLP7P7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                naverLink: "https://naver.me/GxNU1eg7", imageUrl: "static/images/hof.png"
            },
        ],
        'education': [
            {
                lat: 35.1765922, lng: 126.9137724, name: "올리브",
                address: "광주 북구 우치로100번길 23 1-2층",
                details: "<b>◈ 2인  이상 이용시</b><br>서비스 안주 제공<br><br><b>◈ 단체(10인 이상) 이용시</b><br>5% 할인<br>* 단, 현금 또는 계좌이체시 적용",
                instaLink: "https://www.instagram.com/p/C50D4_VLNv4/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5B103Tbj", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1772282, lng: 126.9021909, name: "승룡헬스",
                address: "광주 북구 설죽로202번길 88 4층",
                details: "<b>◈ 회원권 10일 연장</b><br><b>◈ 또는 PT 1회 추가제공</b>",
                instaLink: "https://www.instagram.com/p/C5xe2vCrvu1/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/GazhrO0C", imageUrl: "static/images/health.png"
            },
            {
                lat: 35.1765941, lng: 126.9139314, name: "희희술집",
                address: "광주 북구 우치로100번길 25",
                details: "<b>◈ 아이스크림, 고로케, 황도, 감튀</b><br>- 중에서 1개 서비스 제공",
                instaLink: "https://www.instagram.com/p/C5xd9brrec9/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xOvw9Rb2", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1765968, lng: 126.9140586, name: "한라맥주",
                address: "광주 북구 우치로100번길 27",
                details: "<b>◈ 8인 이하 시</b><br>- 어묵채튀김 or 튀김쥐포 제공",
                instaLink: "https://www.instagram.com/p/C5xd5ehLpg2/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/G3J8fABp", imageUrl: "static/images/hof.png"
            },
            {
                lat: 35.1757980, lng: 126.9127170, name: "홈즈앤루팡",
                address: "광주 북구 우치로 94 3층",
                details: "<b>◈ 시간제 요금제</b><br>- 시간당 1,000원 할인<br><b>◈ 4인 이상 동반시,</b><br>- 나쵸 증정<br><b>◈ 제휴대상 1인당,</b><br>- 동반 1인 적용<br>",
                instaLink: "https://www.instagram.com/p/C5fN92pSfM_/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/xt5si6jb", imageUrl: "static/images/game.png"
            },
            {
                lat: 35.1773443, lng: 126.9142636, name: "오늘김해뒷고기",
                address: "광주 북구 호동로15번길 49",
                details: "<b>◈ 테이블당</b><br>된장찌개 or 계란찜<br><b>中 택 1</b>",
                instaLink: "https://www.instagram.com/p/C5fBRSWSecK/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5WcBxqri", imageUrl: "static/images/meal.png"
            },
            {
                lat: 35.1779180, lng: 126.9043686, name: "케주베이커리 상대점",
                address: "광주 북구 설죽로214번길 123 1층",
                details: "<b>◈ 8,000원 이상 구매 시,</b><br>- 아메리카노, 아이스티, 얼그레이아이스티 중 1잔 무료증정<br><b>◈ 10,000원 이상 구매 시,</b><br>- 프레첼 머랭 쿠키 증정<br>",
                instaLink: "https://www.instagram.com/p/C5PXVjayAmQ/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/F1MwJmzi", imageUrl: "static/images/dessert.png"
            },
            {
                lat: 35.1785970, lng: 126.9127618, name: "언컷",
                address: "광주 북구 우치로126번길 12 1층",
                details: "<b>◈ 첫 방문 시,</b><br>다운펌 3000원, 시술20%할인<br>+2000원 할인<br><br><b>◈ 이번 년도 까지,</b><br>다운펌 2000원 할인<br>시술 10% 할인",
                instaLink: "https://www.instagram.com/p/C4ubktnSb3k/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/Fynadk8r", imageUrl: "static/images/beauty.png"
            },
            {
                lat: 35.1806806, lng: 126.9043230, name: "알리바바 커피",
                address: "광주 북구 용주로30번길 64-1",
                details: "<b>◈ 사범대학 크로플 세트</b><br>- 크로플 + 아메리카노 벤티<br>- 5000원 -> 4600원<br><b>◈ 사범대학 베이글 세트</b><br>- 베이글 + 아메리카노 벤티<br>- 3700원 -> 3500원<br><b>◈ 사범대학 커플 세트</b><br>- 아메리카노 벤티 + 바닐라라떼<br>- 5600원 -> 5300원",
                instaLink: "https://www.instagram.com/p/C4-LIfargLy/?utm_source=ig_web_copy_link",
                naverLink: "https://naver.me/5y48mcrb", imageUrl: "static/images/dessert.png"
            }
        ]
    };

    if (locations[college]) {
        locations[college].forEach(function(location) {
            var marker = new naver.maps.Marker({
                map: map,
                position: new naver.maps.LatLng(location.lat, location.lng),
                icon: {
                    content: `
                        <div style="position: relative; width: 20px; height: 20px; border-radius: 50%; overflow: hidden; border: 2px solid #4285F4;">
                            <img src="${location.imageUrl}" alt="${location.name}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    `,
                    anchor: new naver.maps.Point(10, 10) // anchor 위치도 크기에 맞게 수정
                },
                zIndex: 100
            });
            marker.addListener('click', function() {
                showInfoPanel(location.name, location.address, location.details, location.instaLink, location.naverLink, location.imageUrl);
            });
            markers.push(marker); // 새 마커를 배열에 추가
        });
    }
}

document.querySelectorAll('.tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(function(tab) {
            tab.classList.remove('active'); // 모든 탭에서 active 클래스 제거
        });
        this.classList.add('active'); // 클릭된 탭에 active 클래스 추가

        var college = this.getAttribute('data-college');
        placeMarkers(college); // 클릭된 탭에 해당하는 마커 표시
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
    updateMyLocation(true); // 버튼을 눌렀을 때만 지도를 중심으로 이동
});

function updateMap(lat, lng, heading, centerMap) {
    var newPosition = new naver.maps.LatLng(lat, lng);

    if (!userLocationMarker) {
        // 사용자 위치 마커가 아직 생성되지 않았다면 생성
        userLocationMarker = new naver.maps.Marker({
            map: map,
            position: newPosition,
            icon: {
                content: '<div style="width:18px; height:18px; background-color:#FFC0CB; border-radius:50%; display:flex; align-items:center; justify-content:center;"><div style="width:12px;height:12px;background-color:#FF0000;border-radius:50%;"></div></div>',
                anchor: new naver.maps.Point(12, 12) // 수정하여 마커의 중심을 정확히 위치하도록 함
            },
            zIndex: 1000
        });
    } else {
        // 마커가 이미 있다면 위치 업데이트
        userLocationMarker.setPosition(newPosition);
    }

    if (centerMap) {
        map.setCenter(newPosition); // 사용자가 버튼을 눌렀을 때만 지도의 중심을 사용자의 위치로 이동
    }
}

function showInfoPanel(name, address, details, instaLink, naverLink, imageUrl) {
    document.getElementById('storeName').textContent = name;
    document.getElementById('storeAddress').textContent = address;
    document.getElementById('storeDetails').innerHTML = details; // innerHTML 사용
    document.getElementById('instaLink').href = instaLink;
    document.getElementById('naverLink').href = naverLink;
    document.getElementById('storeImage').src = imageUrl;
    document.getElementById('infoPanel').style.bottom = '0';
}

 document.getElementById('closeInfoPanel').addEventListener('click', function() {
    document.getElementById('infoPanel').style.bottom = '-100%';
 }); 



// 5초마다 현재위치 업데이트
setInterval(function() {
    updateMyLocation(false);
}, 5000);

document.querySelector('.tab').click();