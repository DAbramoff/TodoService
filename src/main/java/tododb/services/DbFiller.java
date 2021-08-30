package tododb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import tododb.entities.Todo;

@Component("DbFiller")
@DependsOn("DbCleaner")
@EnableScheduling
public class DbFiller {
    @Autowired
    private TodoDBService todoService;

    @Scheduled(cron = "0 0 9,14,19 * * *")
    private void addEatTask() {
        System.out.println("******** Add eat tasks ********");
        todoService.saveTodo(new Todo("Time to eat!"));
    }

    @Scheduled(cron = "0 0 8,20 * * *")
    private void addWashTask() {
        System.out.println("******** Add wash tasks ********");
        todoService.saveTodo(new Todo("Take shower and brash your teeth"));
    }
}
