package tododb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

@Transactional
@Component("DbCleaner")
public class DbCleaner {

    @Value("${tododb.cleaner.soft.delete.enabled: true}")
    boolean softDetele;

    @Autowired
    private TodoDBService todoService;

    @PostConstruct
    private void clearDb() {
//        System.out.println("******** Clear db with " + (softDetele ? "soft" : "hard") + " delete ********");
//        todoService.deleteAll(softDetele);
    }
}
