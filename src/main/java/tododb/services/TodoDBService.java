package tododb.services;

import tododb.entities.Todo;

import java.util.List;

public interface TodoDBService {

    List<Todo> findAll();

    Todo findById(Integer todoId);

    Todo saveTodo(Todo todo);

    Todo updateTodo(Todo todo);

    void deleteTodo(Integer todoId);

    Integer deleteByStatus(Boolean isCompleted);
}
