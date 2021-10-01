package todoservice.todocontrollers

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import tododb.entities.Todo
import tododb.entities.TodoStatusEnum
import tododb.services.TodoDBService

@RestController
@RequestMapping('/todo')
class TodoController {

    @Autowired
    TodoDBService todoService

    @GetMapping(path = "/getAll")
    List<Todo> getAllTodoList(@RequestParam TodoStatusEnum status) {
        todoService.findAll(status)
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
    deleteTodo(@RequestParam Long todoId, @RequestParam(required = false) Boolean softDelete) {
        todoService.deleteTodo(todoId, softDelete ?: false)
    }

    @DeleteMapping(path = "/deleteAll")
    deleteAll(@RequestParam(required = false) Boolean softDelete) {
        todoService.deleteAll(softDelete ?: false)
    }
}
