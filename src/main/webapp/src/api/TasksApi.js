import axios from 'axios';

export function getAlltasks(status, callback){
    axios.get("/todo/getAll?status=" + status)
        .then(response => {
            callback.onSuccess(response.data)
        })
        .catch(error => {
            callback.onErorr(error)
        });
}

export function addTask(data, callback){
    axios.post("/todo/add", data)
    .then(response => {
        callback.onSuccess(response.data)
    })
    .catch(error => {
        callback.onErorr(error)
    });
}

export function updateTask(task, status, callback){
    task.status = status;
    axios.post("/todo/update", task)
    .then(response => {
        callback.onSuccess(response.data)
    })
    .catch(error => {
        callback.onErorr(error)
    });
}

export function deleteTask(id, softDelete, callback){
    axios.delete("/todo/delete?todoId=" + id + "&softDelete=" + softDelete)
    .then(() => {
        callback.onSuccess()
    })
    .catch(error => {
        callback.onErorr(error)
    });
}

export function deleteAllTasks(callback){
    axios.delete("/todo/deleteAll")
    .then(() => {
        callback.onSuccess()
    })
    .catch(error => {
        callback.onErorr(error)
    });
}