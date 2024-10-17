import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.ThreadLocalRandom;

public class RandomDateTime {
    public static void main(String[] args) {
        // 시작 날짜와 끝 날짜 설정
        LocalDateTime startDate = LocalDateTime.of(2020, 1, 1, 0, 0);
        LocalDateTime endDate = LocalDateTime.of(2024, 12, 31, 23, 59);

        // 초 단위 차이 계산
        long startSeconds = startDate.toEpochSecond(java.time.ZoneOffset.UTC);
        long endSeconds = endDate.toEpochSecond(java.time.ZoneOffset.UTC);

        // 랜덤 초 생성
        long randomSeconds = ThreadLocalRandom.current().nextLong(startSeconds, endSeconds);

        // 랜덤 날짜 시간 생성
        LocalDateTime randomDateTime = LocalDateTime.ofEpochSecond(randomSeconds, 0, java.time.ZoneOffset.UTC);

        System.out.println("랜덤한 날짜와 시간: " + randomDateTime);
    }
}