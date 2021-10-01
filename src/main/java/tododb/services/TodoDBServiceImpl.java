package tododb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tododb.entities.Todo;
import tododb.entities.TodoStatusEnum;
import tododb.repositories.TodoRepository;

import java.util.List;

@Service
public class TodoDBServiceImpl implements TodoDBService {

    @Autowired
    TodoRepository todoRepository;

    @Override
    public List<Todo> findAll(TodoStatusEnum status) {
        return todoRepository.findAll(status);
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
    public void deleteTodo(Long todoId, Boolean softDelete) {
        if (softDelete) {
            todoRepository.softDelete(todoId);
        } else {
            todoRepository.deleteById(todoId);
        }
    }

    @Override
    public void deleteAll(Boolean softDelete) {
        if (softDelete) {
            todoRepository.softDeleteAll();
        } else {
            todoRepository.deleteAll();
        }
    }
}

