export default function CreateClientModal() {
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Crear Cliente
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Nuevo Cliente</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="clientName" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="clientName" placeholder="Junior Mojica" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clientEmail" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="clientEmail" placeholder="juniormojica26@gmail.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clientPhone" className="form-label">Teléfono</label>
                                    <input type="tel" className="form-control" id="clientPhone" placeholder="3218710632" />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}