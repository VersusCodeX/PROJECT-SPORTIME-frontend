import { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';


export const ModalEditarPerfil = ({onClose, photo_profile, name_lastname, nacionality, place, age, height, weight, sex }:{onClose:any, photo_profile:string, name_lastname:string, nacionality:string, place:string, age:string, height:number, weight:number, sex:string}) => {

    const [sport, setSport] = useState(null);
    const [polideportivo, setPolideportivo] = useState(null);
    const [difficulty, setDifficulty] = useState(null);

    const handleOverlayClick = (event:any) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      };

    const handleSubmit = (e:any) => {
      e.preventDefault()
      console.log(sport, polideportivo, difficulty)
      onClose()
    }
  return (
    <>
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0 "
          >
            <div
              className="fixed inset-0 transition-opacity bg-fondo bg-opacity-60"
              aria-hidden="true"
              onClick={handleOverlayClick}
            ></div>

            <div
              className="inline-block w-full max-w-xl p-8 my-20 overflow-hidden text-left transition-all transform bg-fondo rounded-lg shadow-xl 2xl:max-w-2xl"
            >

              <div className="flex items-center justify-between space-x-4">
                <h1 className="text-2xl font-medium text-primary">
                  Editar perfil
                </h1>
                <button
                  className="text-white focus:outline-none hover:text-gray-700"
                  onClick={onClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <hr className="opacity-5 mt-2"/>
              <form className="mt-3" onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="profile-picture" className="block text-sm text-primary font-bold">
                    Foto de perfil
                  </label>
                  <input
                    type="file"
                    id="profile-picture"
                    accept="image/*"
                    className="hidden"
                  />
                  <label htmlFor="profile-picture" className="block cursor-pointer pt-2">
                    <div className="relative w-16 h-16 rounded-full border-2 border-gray-200 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <img
                        src="https://picsum.photos/800"
                        alt="Profile picture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <label htmlFor="user name" className="block text-sm text-primary font-bold mt-4">
                    Nombre y apellidos
                  </label>
                    <div className="relative">
                      <input
                        value="Arthur Melo"
                        type="text"
                        className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                      />
                    </div>
                  </div>
                
                  <div className="mt-4">
                      <label
                          htmlFor="email"
                          className="block text-sm text-primary font-bold capitalize"
                      >
                          Nacionalidad
                      </label>
                      <input
                        value="Arthur Melo"
                        type="text"
                        className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mt-4">
                      <label
                          htmlFor="sport"
                          className="block text-sm text-primary font-bold capitalize"
                      >
                        Lugar
                      </label>
                      <input
                        value="Arthur Melo"
                        type="text"
                        className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mt-4">
                      <label
                          htmlFor="email"
                          className="block text-sm text-primary font-bold"
                      >
                          Edad
                      </label>
                      <input
                          placeholder="arthurmelo@example.app"
                          type="text"
                          className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mt-4">
                      <label
                          htmlFor="email"
                          className="block text-sm text-primary font-bold"
                      >
                          Estatura
                      </label>
                      <input
                          placeholder="arthurmelo@example.app"
                          type="text"
                          className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mt-4">
                      <label htmlFor="duration" className="block text-sm text-primary font-bold">
                          Peso
                      </label>
                      <input
                          placeholder="arthurmelo@example.app"
                          type="text"
                          className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mt-4">
                      <label
                          htmlFor="email"
                          className="block text-sm text-primary font-bold"
                      >
                          Sexo
                      </label>
                      <input
                          placeholder="arthurmelo@example.app"
                          type="text"
                          className="block w-full px-3 py-2 mt-2 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                      />
                  </div>


                <button className="bg-white px-4 py-2 mt-6 rounded-md hover:bg-indigo-600 mr-2" onClick={handleOverlayClick}>
                    Cancelar
                </button>
                <button className="bg-primary px-4 py-2 mt-4 rounded-md hover:bg-indigo-600">
                    Actualizar perfil
                </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
