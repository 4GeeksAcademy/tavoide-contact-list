import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Contact from "./Contact.jsx";


const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [contact, setContact] = useState({ nombre: "", direccion: "", telefono: "", email: "" });



  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resultado = await actions.addContact(contact);
      if (resultado) {
        navigate("/contacts");
      } else {
        alert("No recibimos el ID al guardar un nuevo contacto")
      }
    } catch (error) {
      console.error(error)
    }

  };
  return (
    <div className='container'>
      <h1>AGREGA UN CONTACTO</h1>

      <form className="form-control" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="nombre" className="form-label"> Direccion </label><br />
          <input className="col-12" type="text" name="nombre" onChange={handleChange} value={contact.nombre} placeholder="Tu Nombre Completo" />
        </div>

        <div className="mb-3">
          <label for="ubi" className="form-label"> Direccion </label><br />
          <input className="col-12" type="text" name="direccion" onChange={handleChange} value={contact.direccion} placeholder="Tu Direccion" />
        </div>

        <div className="mb-3">
          <label for="phone" className="form-label">Telefono</label><br />
          <input className="col-12" type="number" name="telefono" onChange={handleChange} value={contact.telefono} placeholder="Tu Telefono" />
        </div>

        <div className="mb-3">
          <label for="email" className="form-label">Email</label><br />
          <input className="col-12" type="email" name="email" onChange={handleChange} value={contact.email} placeholder="Tu Email" />
        </div>
        <button className='btn btn-primary mb-2 col-12' type='submit'>Guardar</button>
        <Link to={`/`}>
          <button className='btn btn-secondary mb-2 col-12'>ATRAS</button>
        </Link>
      </form>

    </div >
  );
};

export default AddContact
