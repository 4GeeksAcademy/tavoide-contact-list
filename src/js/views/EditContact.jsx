import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });

  useEffect(() => {
    const selectedContact = store.contacts.find((contact) => contact.id == id);
    if (selectedContact) {
      setContact(selectedContact);
    } else {
      navigate("/contacts");
    }
  }, [id, store.contacts, navigate]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await actions.updateContact(id, contact);
      navigate("/contacts");
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <form className="container mb-5" onSubmit={handleSubmit}>
      <h1>Edit Contact</h1>
      <input
        className="mb-2 form-control"
        
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
      />
      <input
        className="mb-2 form-control"
        
        type="email"
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
      />
      <input
        className="mb-2 form-control"
        
        type="text"
        name="phone"
        placeholder="Phone"
        value={contact.phone}
        onChange={handleChange}
      />
      <input
        className="mb-2 form-control"
        
        type="text"
        name="address"
        placeholder="Address"
        value={contact.address}
        onChange={handleChange}
      />
      <button className="btn btn-lg btn-primary col-12 my-2"  type="submit">
        Save Changes
      </button>
      <Link to={`/`}>
        <button className="btn btn-lg btn-secondary col-12 mb-2">ATRAS</button>
      </Link>
    </form>
  );
};

export default EditContact;