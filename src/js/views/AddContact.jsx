import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <form className="form-control" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label"> Nombre </label>
          <input type="text" id='name' onChange={handleChange} value={contact.nombre} placeholder="Tu Nombre Completo" />
        </div>

        <div class="mb-3">
          <label for="ubi" class="form-label"> Direccion </label>
          <input type="text" id='ubi' onChange={handleChange} value={contact.direccion} placeholder="Tu Direccion" />
        </div>

        <div class="mb-3">
          <label for="phone" class="form-label">Telefono</label>
          <input type="number" id='phone' onChange={handleChange} value={contact.telefono} placeholder="Tu Telefono" />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id='email' onChange={handleChange} value={contact.email} placeholder="Tu Email" />
        </div>
        <button className='btn btn-primary col-12' type='submit'>Guardar</button>
      </form>
    </div >
  );
};

export default AddContact
