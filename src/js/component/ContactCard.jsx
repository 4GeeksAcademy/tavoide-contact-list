import React from 'react'
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <div className='container text-center mt-5'>
        <Link to="/AddContact">
            <button className='btn btn-success'>Agrega contactos</button>
        </Link>
	<div className="card col-10">
		<div className="row g-0">
			<div className="col-3 p-4">
				<img src="https://img.freepik.com/foto-gratis/retrato-hombre-estilo-dibujos-animados_23-2151134007.jpg" className="img-fluid rounded-circle"></img>
			</div>
			<div className="col-5 mt-4 text-start text-secondary">

				<h2 className="text-decoration-underline">Nombre</h2>

				<p className="fw-bolder"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path 
				d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 
				202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 
				33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"/></svg>Ubicacion</p>

				<p className="fw-bolder"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path 
				d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 
				31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 
				27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg> Telefono</p>

				<p className="fw-bolder"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 
				0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 
				320-200H160l320 200ZM160-640v-80 480-400Z"/></svg> Email</p>
			</div>

			<div className="col text-end p-3">

			<button type="button" className="btn btn-light m-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path 
			d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 
			30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button>

			<button type="button" className="btn btn-light m-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path 
			d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
			0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>

			</div>

		</div>
	</div>
    </div>
  )
}

export default ContactCard
