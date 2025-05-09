const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
})

//listar todos los usuarios
app.get("/listar", (req, res) => {
    db.query('SELECT * FROM users',
        (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Error al crear usuario" });
            } else {
                res.send(results);
            }
        })
})


//Crear usuarios
app.post("/create", (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    db.query('INSERT INTO users(username, name, password) VALUES(?, ?, ?)', [username, name, password],
        (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Error al crear usuario" });
            } else {
                res.send({ message: "Usuario creado con exito" });
            }
        })
})

//editar usuarios
app.put("/update", (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    db.query('UPDATE users SET username = ?, name = ?, password = ? WHERE id = ?', [username, name, password, id],
        (err, results) => {
            if (err) {
                console.log(err);
            } else {
                res.send(results)
            }
        })
})
//eliminar usuarios
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', id,
        (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Error al eliminar usuario" });
            } else {
                res.send(results)
            }
        })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})