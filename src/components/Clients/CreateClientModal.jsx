import { useState } from "react";
import { validateClient } from "../../utils/validateClient";
export default function CreateClientModal() {
    const [client, setClient] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});

    const handleClientInfo = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setClient({
            ...client,
            [property]: value
        });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateClient(client, setErrors)) {
            // Handle successful validation
            console.log("Datos del cliente válidos", client);
            // Here you can proceed with further actions like sending data to an API
        } else {
            console.log("Datos del cliente inválidos", errors);
        }
    };

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Crear Cliente
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Cliente</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="clientName" className="form-label">Nombre</label>
                                    <input
                                        onChange={handleClientInfo}
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        id="clientName"
                                        placeholder="Junior Mojica"
                                    />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clientEmail" className="form-label">Correo Electrónico</label>
                                    <input
                                        onChange={handleClientInfo}
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="clientEmail"
                                        placeholder="juniormojica26@gmail.com"
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clientPhone" className="form-label">Teléfono</label>
                                    <input
                                        onChange={handleClientInfo}
                                        name="phone"
                                        type="tel"
                                        className="form-control"
                                        id="clientPhone"
                                        placeholder="3218710632"
                                    />
                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary">Guardar cambios</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
