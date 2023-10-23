const express = require('express')
const app = express()
const port = 7512

const data_users = [
    { id: 1, name: "Rafif", alamat: "Vegas" },
    { id: 2, name: "Dzaky", alamat: "Los Angeles" },
    { id: 3, name: "Azka", alamat: "Tokyo" },
    { id: 4, name: "Laila", alamat: "Seoul" },
];  

app.get("/users", (req, res) => {
    //mendapatkan data dari database
    const data = data_users;

    //memberikan respon json data
    let result = {
        status: 200,
        data: data,
    };

    res.json(result);
});

app.get("/users/:id", (req, res) => {
    // get data dari parameter
    let id = parseInt(req.params.id);

    // get data dari database
    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
        result = {
        status: 200,
        data: user,
        };
    }
    res.json(result);
});

app.get("/users/:id", (req, res) => {
    // get data dari parameter
    let id = parseInt(req.params.id);

    // get data dari database
    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
        result = {
        status: 200,
        data: user,
        };
    } else {
        res.status(404).json({ error: "User not found" });
    }
    res.json(result);
}); 

app.listen(port,() => console.log(`Server running on port ${port}`))
