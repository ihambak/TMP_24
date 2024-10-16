import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class SampleDataGenerator {

    // 랜덤한 요소를 배열에서 선택하는 함수
    private static String getRandomElement(String[] array) {
        Random random = new Random();
        return array[random.nextInt(array.length)];
    }

    // 랜덤 전화번호 생성 함수 (010-xxxx-xxxx 형식)
    private static String generatePhoneNumber() {
        Random random = new Random();
        int secondPart = 1000 + random.nextInt(9000); // 1000~9999
        int thirdPart = 1000 + random.nextInt(9000); // 1000~9999
        return String.format("010-%04d-%04d", secondPart, thirdPart);
    }

    // 단일 샘플 데이터 생성 함수
    private static SampleData generateSingleSampleData() {
        // 이름 배열 정의 (성, 첫 번째 이름, 두 번째 이름)
        String[] lastNames = {"김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안", "송", "류", "전"};
        String[] firstNames = {"민", "지", "서", "영", "동", "준", "수", "태", "현", "우", "재", "성", "연", "정", "하", "솔", 
                               "기", "나", "찬", "다", "은", "소", "진", "채", "별", "빛", "슬", "윤", "희", "호", "강", "경", "봄"};
        String[] middleNames = {"준", "현", "수", "민", "호", "혁", "찬", "아", "서", "린", "율", "빈", "결", "온", "별", "빛",
                                "은", "솔", "진", "유", "다", "우", "경", "하", "지", "태", "빛", "솔", "희", "주", "찬", "나", "봄"};

        // 시/도 배열 정의
        String[] locations = {"서울", "경기", "부산", "인천", "대구", "대전", "광주", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"};

        // 성별 배열 정의
        String[] genders = {"남", "여"};

        // 직업 종류 배열 정의
        String[] jobTypes = {"직장인", "개인사업자", "학생", "프리랜서", "공무원", "전문직", "무직"};

        // 랜덤한 이름 생성
        String name = getRandomElement(lastNames) + " " + getRandomElement(firstNames) + " " + getRandomElement(middleNames);

        // 랜덤한 전화번호 생성
        String phoneNumber = generatePhoneNumber();

        // 랜덤한 시/도 생성
        String location = getRandomElement(locations);

        // 랜덤한 성별 생성
        String gender = getRandomElement(genders);

        // 랜덤한 직업 종류 생성
        String jobType = getRandomElement(jobTypes);

        // 객체 생성 후 반환
        return new SampleData(name, phoneNumber, location, gender, jobType);
    }

    // 100개의 샘플 데이터를 생성하여 리스트로 반환하는 함수
    public static List<SampleData> createSampleData() {
        List<SampleData> sampleDataList = new ArrayList<>();

        for (int i = 0; i < 100; i++) {
            sampleDataList.add(generateSingleSampleData());
        }

        return sampleDataList;
    }

    // 샘플 데이터 클래스 정의
    public static class SampleData {
        private String name;
        private String phoneNumber;
        private String location;
        private String gender;
        private String jobType;

        public SampleData(String name, String phoneNumber, String location, String gender, String jobType) {
            this.name = name;
            this.phoneNumber = phoneNumber;
            this.location = location;
            this.gender = gender;
            this.jobType = jobType;
        }

        @Override
        public String toString() {
            return String.format("{\"name\": \"%s\", \"phoneNumber\": \"%s\", \"location\": \"%s\", \"gender\": \"%s\", \"jobType\": \"%s\"}",
                    name, phoneNumber, location, gender, jobType);
        }
    }

    public static void main(String[] args) {
        List<SampleData> sampleDataList = createSampleData();
        for (SampleData data : sampleDataList) {
            System.out.println(data);
        }
    }
}