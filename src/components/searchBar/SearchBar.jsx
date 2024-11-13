import s from './SearchBar.module.css'

export default function SearchBar () {
  return (
    <>
      <div className='d-flex justify-content-center p-2 align-items-center'>
        <input
          className={`${s.searchInput} form-control w-sm-60 w-md-40 w-lg-30`}
          type='search'
          placeholder='Andres Estrada'
        />
        <button className={`${s.searchButton}`}>
          <ion-icon name='search-outline' />
        </button>
      </div>
    </>
  )
}
