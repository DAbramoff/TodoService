package todoservice.todocontrollers

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import tododb.entities.Todo
import tododb.services.TodoDBService

@RestController
@RequestMapping('/todo')
class TodoController {

    @Autowired
    TodoDBService todoService

    @GetMapping(path = "/getAll")
    List<Todo> getAllTodoList() {
        todoService.findAll()
    }

    @PostMapping(path = "/add")
    Todo saveTodo(@RequestBody Todo todo) {
        todoService.saveTodo(todo)
    }

    @PostMapping(path = "/update")
    Todo update(@RequestBody Todo todo) {
        todoService.updateTodo(todo)
    }

    @DeleteMapping(path = "/delete")
    deleteTodo(@RequestParam Integer todoId) {
        todoService.deleteTodo(todoId)
    }

    @GetMapping(path = "/get")
    Todo getTodoById(@RequestParam Integer todoId) {
        todoService.findById(todoId)
    }
}
