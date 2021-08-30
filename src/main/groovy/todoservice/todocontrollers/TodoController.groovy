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
    List<Todo> getAllTodoList(@RequestParam Boolean deleted) {
        todoService.findAll(deleted)
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
    deleteTodo(@RequestParam Long todoId) {
        todoService.deleteTodo(todoId) //Soft delete
    }

    @DeleteMapping(path = "/deleteAll")
    deleteAll(@RequestParam Boolean softDelete) {
        todoService.deleteAll(softDelete) //Soft delete
    }
}
