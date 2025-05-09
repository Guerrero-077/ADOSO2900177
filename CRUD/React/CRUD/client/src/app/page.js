'use client'
import styles from "./page.module.css";
import { use, useState } from 'react'
import axios, { Axios } from "axios";
import { useEffect } from "react";

// componentes de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

//Importaciones de switaler2
import Swal from 'sweetalert2'


export default function Home() {

  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const [editar, setEditar] = useState(false);

  const [listUser, setListUser] = useState([]);

  //registrar usuarios
  const addUser = () => {
    axios.post('http://localhost:3001/create', {
      username, name, password
    }).then(() => {
      getUsers()
      limpiarCampos()

      Swal.fire({
        title: "Usuario Registrado!",
        text: `El usuario ${name} se ha registrado correctamente`,
        icon: "success",
        timer: 1000
      }).catch(function (error) {
        Swal.fire({
          title: "Error",
          text: `El usuario ${name} no se ha agregado correctamente`,
          icon: "error",
          footer: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message,
          timer: 1000
        })
      });;

    })
  }
  //actualizar usuarios
  const updateUser = () => {
    axios.put('http://localhost:3001/update', {
      id, username, name, password
    }).then(() => {
      getUsers()
      limpiarCampos()
      Swal.fire({
        title: "Usuario Actualizado!",
        text: `El usuario ${name} se ha actualizado correctamente`,
        icon: "success",
        timer: 1000
      }).catch(function (error) {
        Swal.fire({
          title: "Error",
          text: `El usuario ${name} no se ha actualizado correctamente`,
          icon: "error",
          footer: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message,
          timer: 1000
        })
      });

    })
  }

  //eliminar usuarios
  const deleteUser = (user) => {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success m-3",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas Seguro?",
      text: `Este usuario ${user.name}se borrara de la base de datos`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, estoy seguro!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/delete/${user.id}`).then(() => {
          getUsers()
          limpiarCampos()

          swalWithBootstrapButtons.fire({
            title: "Eliminado!",
            text: `Usuario ${user.name} eliminado correctamente`,
            icon: "success",
            timer: 1000
          });
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    }).catch(function (error) {
      Swal.fire({
        title: "Error",
        text: `El usuario ${name} no se ha actualizado correctamente`,
        icon: "error",
        footer: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message,
        timer: 1000
      })
    });;



  }

  //obtener datos de un usuarios
  const editUser = (user) => {
    setEditar(true);

    setUserName(user.username);
    setName(user.name)
    setPassword(user.password)
    setId(user.id)
  }
  //obtener todos usuarios
  const getUsers = () => {
    axios.get('http://localhost:3001/listar').then((response) => {
      setListUser(response.data);
    })
  }

  //limpiar los inputs

  const limpiarCampos = () => {
    setUserName("");
    setName("");
    setPassword("");

    setEditar(false)
  }

  useEffect(() => {
    getUsers();  // Llama a la función cuando el componente se monte
  }, []);  // El array vacío asegura que se ejecute solo una vez al montar el componente

  return (

    <Container>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>

          <InputGroup className="mb-3">
            <InputGroup.Text id="username">UserName</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="username"
              type="text"
              value={username}
              onChange={event => { setUserName(event.target.value) }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="name">Name</InputGroup.Text>
            <Form.Control
              placeholder="name"
              aria-label="name"
              aria-describedby="name"
              type="text"
              value={name}
              onChange={event => { setName(event.target.value) }}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="password">Password</InputGroup.Text>
            <Form.Control
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              type="password"
              value={password}
              onChange={event => { setPassword(event.target.value) }}
            />
          </InputGroup>
        </Card.Body>
        <Card.Footer className="text-muted">
          {
            editar ?
              <div>
                <Button className="me-1" variant="primary" onClick={updateUser}>editar</Button>
                <Button variant="danger" onClick={limpiarCampos}>Cancelar</Button>
              </div>
              :
              <Button variant="primary" onClick={addUser}>Crear</Button>
          }
        </Card.Footer>
      </Card>

      <Table striped bordered hover size="sm" className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>UserName</th>
            <th>Name</th>
            <th>Password</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            listUser.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="primary"
                        onClick={() => {
                          editUser(user)
                        }}
                      >Editar</Button>

                      <Button variant="danger" onClick={() => { deleteUser(user) }}>Eliminar</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>
    </Container >
  );
}
