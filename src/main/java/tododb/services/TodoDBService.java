package tododb.services;

import tododb.entities.Todo;

import java.util.List;

public interface TodoDBService {

    List<Todo> findAll(Boolean deleted);

    Todo saveTodo(Todo todo);

    Todo updateTodo(Todo todo);

    void deleteTodo(Long todoId);

    void deleteAll(Boolean softDelete);
}
