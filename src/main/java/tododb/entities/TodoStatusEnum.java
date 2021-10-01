package tododb.entities;

public enum TodoStatusEnum {
    ACTIVE("Active"),
    COMPLETED("Completed"),
    DELETED("Deleted");

    private final String code;

    TodoStatusEnum(String code) {
        this.code = code;
    }

    public String code() {
        return code;
    }
}
