import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import {useState} from "react";

const FormularioTarea = () => {
const [tarea,setTarea] = useState("");
const [tareas,setTareas] = useState([[]]);

const handleSubmit = () => {
  e.preventDefault();
  setTareas([...tareas,tarea]);/*ALTERNATIVA DE PUHS = State tareas spread "...": Creame un nuevo array, toma cada uno de los elementos iterables y copialos en un arreglo unidireccional, uno a uno */
}

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="ingrese una tarea" onChange={(e) => console.log(e.target.value)} value={tarea}/>
        <Button variant="primary" type="submit">Agregar</Button>
      </Form.Group>
    </Form>
    <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;
