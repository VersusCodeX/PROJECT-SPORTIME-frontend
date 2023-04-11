import { Footer, Navbar } from "../../ui"
import Futbol from '../../assets/images/Futbol.svg'
import Baloncesto from '../../assets/images/Baloncesto.svg'
import Tenis from '../../assets/images/Tenis.svg'
import FutbolSala from '../../assets/images/FutbolSala.svg'
import Padel from '../../assets/images/Padel.svg'

export const ProfilePage = () => {
  return (
    <>
    <Navbar />
    <div className="bg-fondo py-5 pb-6">
        <div className="bg-white shadow-md rounded-lg p-6 mx-5">
            <div className="relative py-7">
                <div
                    className="absolute inset-0 "
                    style={{ backgroundImage: "url(https://picsum.photos/800)" }}
                ></div>
                <div className="relative">
                    <img
                    className="w-20 h-20 rounded-full mx-5 top-16 relative z-10 border-4 border-white"
                    src="https://picsum.photos/200"
                    alt="Profile"
                    />
                </div>
            </div>
            <div className="mt-12 pl-6">
            <h2 className="text-xl font-medium text-gray-800">John Doe</h2>
            <p className="text-gray-500 text-sm">Molina de segura, Murcia</p>
            <p className="text-gray-500 text-sm pt-2">Edad: 25 años</p>
            <p className="text-gray-500 text-sm">Estatura: 190 cm</p>
            <p className="text-gray-500 text-sm">Peso: 80kg</p>
            </div>
            <div className="border-t border-gray-200 mt-6 pt-6">
                <h3 className="text-lg font-n27 text-gray-800 pl-6">Estadisticas generales</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 pt-5">
                    <div className="text-center md:border-r">
                    <h6 className="text-xl font-bold lg:text-xl xl:text-xl">14</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Partidos
                    </p>
                    </div>
                    <div className="text-center md:border-r ">
                    <h6 className="text-xl font-bold lg:text-xl xl:text-xl">7</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Victorias
                    </p>
                    </div>
                    <div className="text-center md:border-r">
                    <h6 className="text-xl font-bold lg:text-xl xl:text-xl">7</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Derrotas
                    </p>
                    </div>
                    <div className="text-center">
                    <h6 className="text-xl font-bold lg:text-xl xl:text-xl">50%</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Ratio
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mt-5 mx-5">
            <h3 className="text-xl text-gray-800 font-n27">Skills</h3>
            <div className="flex flex-wrap mt-2">
                <span className="bg-blue-100 text-blue-500 font-medium rounded-full py-1 px-3 mr-2 mb-2">
                    Fútbol
                </span>
                <span className="bg-blue-100 text-blue-500 font-medium rounded-full py-1 px-3 mr-2 mb-2">
                    Tenis
                </span>
                <span className="bg-blue-100 text-blue-500 font-medium rounded-full py-1 px-3 mr-2 mb-2">
                    Padel
                </span>
                <span className="bg-blue-100 text-blue-500 font-medium rounded-full py-1 px-3 mr-2 mb-2">
                    Fútbol Sala
                </span>
                <span className="bg-blue-100 text-blue-500 font-medium rounded-full py-1 px-3 mr-2 mb-2">
                Baloncesto
                </span>
            </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mt-5 mx-5">
            <h3 className="text-xl text-gray-800 font-n27">Mis deportes favoritos</h3>
            <div className="scrollbar-hide flex w-full pt-5 snap-x snap-mandatory scroll-px-10 gap-5 overflow-x-scroll scroll-smooth">
                <img src={Futbol} width={'225'}/>
                <img src={Baloncesto} width={'225'}/>
                <img src={Tenis} width={'225'}/>
                <img src={FutbolSala} width={'225'}/>
                <img src={Padel} width={'225'} />   
            </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mt-5 mx-5">
            <h3 className="text-xl text-gray-800 font-n27">Mis ultimos eventos</h3>
            <div className="scrollbar-hide flex w-full pt-5 snap-x snap-mandatory scroll-px-10 gap-5 overflow-x-scroll scroll-smooth">
            <div className="relative">
                <div className="flex items-center justify-center gap-20 pt-1 bg-primary">
                  <p className="font-n27">Fútbol sala</p>
                  <p className="font-n27">10:30</p>
                  <p className="font-n27">02/04/2023</p>
                </div>
                <img className="w-96 h-56 mb-10 absolute rounded-bl-3xl rounded-br-3xl object-cover" src="https://laguiaw.com/contenido/logotipos/91625_polideportivo_municipal_de_archena.jpg" />
                <div className="relative mt-48 mb-12 w-96 rounded-tr-3xl">
                  <div className="w-64 h-24 bg-card-secondary rounded-tr-3xl rounded-bl-3xl flex items-center justify-between flex-col py-10">
                    <p className="pl-5 w-full font-n27 text-gray-300">Nivel: Intermedio</p>
                    <p className="pr-20 font-n27 text-gray-300">Género: Masculino</p>
                    <p className="absolute translate-x-20 text-2xl text-gray-300 top-11">5 VS 5</p>
                  </div>
                  <div className="w-64 h-8 flex items-center absolute left-0 top-0 rounded-tr-3xl bg-white">
                    <p className="absolute text-center pl-2 text-black font-n27">Ciudad deportiva “El Romeral”</p>
                  </div>
                </div>
                <button className="w-20 h-20 absolute rounded-xl bg-primary flex items-center justify-center" style={{ right: '10px', top:'14rem' }}>
                  <p className="font-n27 text-center">6 / 10<br />Plazas</p>
                </button>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center gap-20 pt-1 bg-primary">
                  <p className="font-n27">Fútbol sala</p>
                  <p className="font-n27">10:30</p>
                  <p className="font-n27">02/04/2023</p>
                </div>
                <img className="w-96 h-56 mb-10 absolute rounded-bl-3xl rounded-br-3xl object-cover" src="https://laguiaw.com/contenido/logotipos/91625_polideportivo_municipal_de_archena.jpg" />
                <div className="relative mt-48 mb-12 w-96 rounded-tr-3xl">
                  <div className="w-64 h-24 bg-card-secondary rounded-tr-3xl rounded-bl-3xl flex items-center justify-between flex-col py-10">
                    <p className="pl-5 w-full font-n27 text-gray-300">Nivel: Intermedio</p>
                    <p className="pr-20 font-n27 text-gray-300">Género: Masculino</p>
                    <p className="absolute translate-x-20 text-2xl text-gray-300 top-11">5 VS 5</p>
                  </div>
                  <div className="w-64 h-8 flex items-center absolute left-0 top-0 rounded-tr-3xl bg-white">
                    <p className="absolute text-center pl-2 text-black font-n27">Ciudad deportiva “El Romeral”</p>
                  </div>
                </div>
                <button className="w-20 h-20 absolute rounded-xl bg-primary flex items-center justify-center" style={{ right: '10px', top:'14rem' }}>
                  <p className="font-n27 text-center">6 / 10<br />Plazas</p>
                </button>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center gap-20 pt-1 bg-primary">
                  <p className="font-n27">Fútbol sala</p>
                  <p className="font-n27">10:30</p>
                  <p className="font-n27">02/04/2023</p>
                </div>
                <img className="w-96 h-56 mb-10 absolute rounded-bl-3xl rounded-br-3xl object-cover" src="https://laguiaw.com/contenido/logotipos/91625_polideportivo_municipal_de_archena.jpg" />
                <div className="relative mt-48 mb-12 w-96 rounded-tr-3xl">
                  <div className="w-64 h-24 bg-card-secondary rounded-tr-3xl rounded-bl-3xl flex items-center justify-between flex-col py-10">
                    <p className="pl-5 w-full font-n27 text-gray-300">Nivel: Intermedio</p>
                    <p className="pr-20 font-n27 text-gray-300">Género: Masculino</p>
                    <p className="absolute translate-x-20 text-2xl text-gray-300 top-11">5 VS 5</p>
                  </div>
                  <div className="w-64 h-8 flex items-center absolute left-0 top-0 rounded-tr-3xl bg-white">
                    <p className="absolute text-center pl-2 text-black font-n27">Ciudad deportiva “El Romeral”</p>
                  </div>
                </div>
                <button className="w-20 h-20 absolute rounded-xl bg-primary flex items-center justify-center" style={{ right: '10px', top:'14rem' }}>
                  <p className="font-n27 text-center">6 / 10<br />Plazas</p>
                </button>
              </div>
              <div className="relative">
                <div className="flex items-center justify-center gap-20 pt-1 bg-primary">
                  <p className="font-n27">Fútbol sala</p>
                  <p className="font-n27">10:30</p>
                  <p className="font-n27">02/04/2023</p>
                </div>
                <img className="w-96 h-56 mb-10 absolute rounded-bl-3xl rounded-br-3xl object-cover" src="https://laguiaw.com/contenido/logotipos/91625_polideportivo_municipal_de_archena.jpg" />
                <div className="relative mt-48 mb-12 w-96 rounded-tr-3xl">
                  <div className="w-64 h-24 bg-card-secondary rounded-tr-3xl rounded-bl-3xl flex items-center justify-between flex-col py-10">
                    <p className="pl-5 w-full font-n27 text-gray-300">Nivel: Intermedio</p>
                    <p className="pr-20 font-n27 text-gray-300">Género: Masculino</p>
                    <p className="absolute translate-x-20 text-2xl text-gray-300 top-11">5 VS 5</p>
                  </div>
                  <div className="w-64 h-8 flex items-center absolute left-0 top-0 rounded-tr-3xl bg-white">
                    <p className="absolute text-center pl-2 text-black font-n27">Ciudad deportiva “El Romeral”</p>
                  </div>
                </div>
                <button className="w-20 h-20 absolute rounded-xl bg-primary flex items-center justify-center" style={{ right: '10px', top:'14rem' }}>
                  <p className="font-n27 text-center">6 / 10<br />Plazas</p>
                </button>
              </div>
            </div>
        </div>
    </div>
    

    <Footer />

    </>
  )
}
