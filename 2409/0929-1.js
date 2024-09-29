import { randomInt } from "mendix/random";

// 랜덤한 요소를 배열에서 선택하는 함수
function getRandomElement(array) {
    return array[randomInt(0, array.length - 1)];
}

// 랜덤 전화번호 생성 함수 (010-xxxx-xxxx 형식)
function generatePhoneNumber() {
    const secondPart = randomInt(1000, 9999);
    const thirdPart = randomInt(1000, 9999);
    return `010-${secondPart}-${thirdPart}`;
}

// 단일 샘플 데이터 생성 함수
function generateSingleSampleData() {
    // 이름 배열 정의 (성, 첫 번째 이름, 두 번째 이름)
    const lastNames = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안", "송", "류", "전"];
    const firstNames = [
        "민", "지", "서", "영", "동", "준", "수", "태", "현", "우", "재", "성", "연", "정", "하", "솔", 
        "기", "나", "찬", "다", "은", "소", "진", "채", "별", "빛", "슬", "윤", "희", "호", "강", "경", "봄"
    ];
    const middleNames = [
        "준", "현", "수", "민", "호", "혁", "찬", "아", "서", "린", "율", "빈", "결", "온", "별", "빛",
        "은", "솔", "진", "유", "다", "우", "경", "하", "지", "태", "빛", "솔", "희", "주", "찬", "나", "봄"
    ];

    // 시/도 배열 정의
    const locations = ["서울", "경기", "부산", "인천", "대구", "대전", "광주", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];

    // 성별 배열 정의
    const genders = ["남", "여"];

    // 직업 종류 배열 정의
    const jobTypes = ["직장인", "개인사업자", "학생", "프리랜서", "공무원", "전문직", "무직"];

    // 랜덤한 이름 생성
    const name = `${getRandomElement(lastNames)} ${getRandomElement(firstNames)} ${getRandomElement(middleNames)}`;

    // 랜덤한 전화번호 생성
    const phoneNumber = generatePhoneNumber();

    // 랜덤한 시/도 생성
    const location = getRandomElement(locations);

    // 랜덤한 성별 생성
    const gender = getRandomElement(genders);

    // 랜덤한 직업 종류 생성
    const jobType = getRandomElement(jobTypes);

    // JSON 형태로 반환할 객체 생성
    return {
        "name": name,
        "phoneNumber": phoneNumber,
        "location": location,
        "gender": gender,
        "jobType": jobType
    };
}

// 100개의 샘플 데이터를 생성하고 JSON 문자열로 반환하는 함수
export async function createSampleData() {
    const sampleDataList = [];
    
    for (let i = 0; i < 100; i++) {
        sampleDataList.push(generateSingleSampleData());
    }

    // 생성된 100개의 데이터를 JSON 문자열로 변환하여 반환
    return JSON.stringify(sampleDataList, null, 2);
}
