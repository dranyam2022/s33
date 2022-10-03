let api = "https://jsonplaceholder.typicode.com/todos";

fetch(api)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let map1 = data.map(items => items.title)
        console.log(map1, data)
    })

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data.title, data.completed)
    })

fetch(api, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'New ToDo',
        userID: 1
    })
})
    .then((res) => res.json())
    .then((data) => console.log(data))


fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Corrected todo',
        description: 'this is a corrected todo',
        status: 'completed',
        dateCompleted: 'October 3, 2022',
        userId: 2
    })
})
    .then((res) => res.json())
    .then((data) => console.log(data))



fetch("https://jsonplaceholder.typicode.com/todos/2", {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        status: 'completed',
        dateCompleted: 'October 3, 2022',

    })
})
    .then((res) => res.json())
    .then((data) => console.log(data))


fetch("https://jsonplaceholder.typicode.com/todos/3", {
    method: 'DELETE'
})
    .then((res) => res.json())
    .then((data) => console.log(data))
