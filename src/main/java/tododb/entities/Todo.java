package tododb.entities;

import javax.persistence.*;

@Entity
@Table(name = "TODO")
public class Todo extends BaseEntity {

    @Column(name = "TASK")
    protected String task;

    @Column(name = "DESCRIPTION")
    protected String description;

    @Column(name = "STATUS")
    @Enumerated(EnumType.ORDINAL)
    protected TodoStatusEnum status = TodoStatusEnum.ACTIVE;

    public Todo() {
    }

    public Todo(String task, String description, TodoStatusEnum status) {
        this.task = task;
        this.description = description;
        this.status = status;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TodoStatusEnum getStatus() {
        return status;
    }

    public void setStatus(TodoStatusEnum status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Todo {" +
                "id=" + id +
                ", creationDate=" + creationDate +
                ", updateDate=" + updateDate +
                ", task=" + task +
                ", description=" + description +
                ", status=" + status.code() +
                '}';
    }
}
