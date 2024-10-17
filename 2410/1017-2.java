import java.time.LocalDateTime;
import java.time.Duration;
import java.util.concurrent.ThreadLocalRandom;

public class RandomDateTimeGenerator {
    public static LocalDateTime getRandomDateTime(LocalDateTime start, LocalDateTime end) {
        // 두 일시 사이의 차이를 초 단위로 계산
        long secondsBetween = Duration.between(start, end).getSeconds();
        
        // 랜덤 초 생성
        long randomSeconds = ThreadLocalRandom.current().nextLong(0, secondsBetween + 1);

        // 시작 일시에 랜덤 초를 더하여 랜덤 일시 생성
        return start.plusSeconds(randomSeconds);
    }

    public static void main(String[] args) {
        LocalDateTime startDateTime = LocalDateTime.of(2023, 1, 1, 0, 0);
        LocalDateTime endDateTime = LocalDateTime.of(2023, 12, 31, 23, 59);

        LocalDateTime randomDateTime = getRandomDateTime(startDateTime, endDateTime);

        System.out.println("랜덤 생성된 일시: " + randomDateTime);
    }
}