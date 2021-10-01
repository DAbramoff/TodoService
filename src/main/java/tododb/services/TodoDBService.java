package tododb.services;

import tododb.entities.Todo;
import tododb.entities.TodoStatusEnum;

import java.util.List;

public interface TodoDBService {

    List<Todo> findAll(TodoStatusEnum status);

    Todo saveTodo(Todo todo);

    Todo updateTodo(Todo todo);

    void deleteTodo(Long todoId, Boolean softDelete);

    void deleteAll(Boolean softDelete);
}
