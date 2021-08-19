package tododb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Component;
import tododb.entities.Todo;

import javax.annotation.PostConstruct;

@Component("DbFiller")
@DependsOn("DbCleaner")
public class DbFiller {
    @Autowired
    private TodoDBService todoService;

    @PostConstruct
    private void fillDb() {
        System.out.println("******** Start filling db ********");
        String[] tasks = {"Wash hips", "Wash Asshole", "Wash Pinus", "Wash Balls"};
        for (int i = 0; i < tasks.length; i++) {
            Todo todo = new Todo();
            todo.setCompleted(i % 2 == 0);
            todo.setTask(tasks[i]);
            todoService.saveTodo(todo);
            System.out.println(todo);
        }
        System.out.println("******** Db filled ********");
    }
}
