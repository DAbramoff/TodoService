package tododb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tododb.entities.Todo;
import tododb.repositories.TodoRepository;

import java.util.List;

@Service
public class TodoDBServiceImpl implements TodoDBService {

    @Autowired
    TodoRepository todoRepository;

    @Override
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    @Override
    public Todo findById(Integer todoId) {
        return todoRepository.findById(todoId).get();
    }

    @Override
    public Todo saveTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Todo updateTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public void deleteTodo(Integer todoId) {
        todoRepository.deleteById(todoId);
    }

    @Override
    public Integer deleteByStatus(Boolean isCompleted) {
        return todoRepository.deleteByCompleted(isCompleted);
    }
}

