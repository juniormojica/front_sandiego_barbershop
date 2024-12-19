const CreateBarber = ({ handleNewBarberChange, handleAddBarber, newBarber }) => {
  return (
    <div className='d-flex flex-column align-items-center mt-4'>
      <input
        className='form-control mb-2'
        type='text'
        name='name'
        placeholder='Nombre Barbero'
        value={newBarber.name}
        onChange={handleNewBarberChange}
        required
      />
      <input
        className='form-control mb-2'
        type='text'
        name='phone'
        placeholder='Teléfono'
        value={newBarber.phone}
        onChange={handleNewBarberChange}
        required
      />
      <button
        className='btn btn-primary'
        onClick={handleAddBarber}
        disabled={!newBarber.name || !newBarber.phone}
      >
        Add Barber
      </button>
    </div>
  )
}

export default CreateBarber
