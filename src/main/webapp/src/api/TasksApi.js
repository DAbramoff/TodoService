import axios from 'axios';

export function getAlltasks(callback){
    axios.get("/todo/getAll")
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

export function deleteTask(id, callback){
    axios.delete("/todo/delete?todoId=" + id)
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