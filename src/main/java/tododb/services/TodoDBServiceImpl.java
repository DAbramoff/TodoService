package tododb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tododb.entities.Todo;
import tododb.repositories.TodoRepository;

import java.util.Date;
import java.util.List;

@Service
public class TodoDBServiceImpl implements TodoDBService {

    @Autowired
    TodoRepository todoRepository;

    @Override
    public List<Todo> findAll(Boolean deleted) {
        if (deleted) {
            return todoRepository.findAllDeleted();
        } else {
            return todoRepository.findAll();
        }
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
    public void deleteTodo(Long todoId) {
        todoRepository.deleteById(todoId);
    }

    @Override
    public void deleteAll(Boolean softDelete) {
        if (softDelete) {
            todoRepository.softDeleteAll(new Date());
        } else {
            todoRepository.deleteAll();
        }
    }
}

