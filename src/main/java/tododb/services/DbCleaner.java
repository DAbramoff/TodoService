package tododb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

@Transactional
@Component("DbCleaner")
public class DbCleaner {
    @Value("${tododb.select.status.completion: true}")
    boolean completionStatus;
    @Autowired
    private TodoDBService todoService;

    @PostConstruct
    private void clearDb() {
        System.out.println("******** Start delete " + (completionStatus ? "completed" : "not completed") + " tasks ********");
        System.out.println(todoService.deleteByStatus(completionStatus));
        System.out.println(todoService.deleteByStatus(!completionStatus));
        System.out.println("******** All " + (completionStatus ? "completed" : "not completed") + " tasks deleted ********");
    }
}
