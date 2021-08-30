package tododb.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "TODO")
public class Todo extends BaseEntity {

    @Column(name = "TASK")
    protected String task;

    @Column(name = "COMPLETE_DATE")
    protected Date completeDate;

    public Todo() {
    }

    public Todo(String task) {
        this.task = task;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public Date getCompleteDate() {
        return completeDate;
    }

    public void setCompleteDate(Date completeDate) {
        this.completeDate = completeDate;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", creationDate=" + creationDate +
                ", updateDate=" + updateDate +
                ", deleteDate=" + deleteDate +
                ", task='" + task + '\'' +
                ", completeDate=" + completeDate +
                '}';
    }
}
