import logoUts from './assets/logo.png'
import chicoUts from './assets/chico.png'
import { LuFlaskConical, LuSmile, LuHeart } from "react-icons/lu";
import niagaraImg from './assets/2.jpg'
import student1 from './assets/3.JPG'
import student2 from './assets/4.JPG'
import student3 from './assets/5.JPG'
import {
  FaNodeJs,
  FaReact,
  FaJava,
  FaVuejs, 
  FaPython,
  FaAngular,
  FaDatabase,
  FaLanguage,
  FaLaravel,
} from "react-icons/fa";
import { SiMongodb, SiDotnet } from "react-icons/si";
import { useState } from 'react';

function HeaderApp() {
  return(
    <>
      <header className= "bg-gray-100 flex justify-evenly shadow-xl pb-3 mb-12">
      <img className="w-[200px]" src={logoUts} alt="" />
      <nav className="flex justify-between gap-6 items-center">
        <a className="hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]" href="">Inicio</a>
        <a className="hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]" href="">Estudiantes</a>
        <a className="hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]" href="">Docentes</a>
        <a className="hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]"href="">Nosotros</a>
        <a className="hover:bg-green-500 hover:text-white px-10 py-2 rounded-[10px]"href="">Investigacion</a>
      </nav>
    <button className="bg-green-300 hover:bg-green-400 px-5 py-1 h-8 mt-4 rounded-full">Revista</button>
    </header>
    </>
  )
}

function BannerApp() {

  const [phrase, setPhrase]= useState("")

  async function  getAPhrase() {
    const result = await fetch('https://api.adviceslip.com/advice');
    const data = await result.json();
    setPhrase(data.slip.advice);
      }
  return(
    <>
    <main className="flex justify-center gap-20 items-center">
      <section>
        <h1 className="text-5xl font-bold text-gray-900 text-center leading-tight mb-6">Construimos los futuros lideres del pais</h1>
        <p className="text-2xl gap-3 mb-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing 
        </p>
        <section className="flex flex-col items-center gap-1">

        
        <button onClick={getAPhrase} className="rounded-mb bg-green-300 hover:bg-green-400  px-10 py-2 rounded-[10px] gap-5">Learn English with UTS </button>
        <Phrase
        phraseProp ={phrase}
        />
      </section>
        </section>
      <img className= "w-[500px] ml-[10px]"src={chicoUts} alt=""/>
    </main>
    </>
  )
}

function FeaturesApp() {
  const features = [
    {
      title: "Sentido Ético",
      desc: "Cuentan con un comportamiento ético y empático con conciencia de aportar y no afectar a otras personas",
      icon: <LuFlaskConical className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Pensamiento Crítico",
      desc: "Tienen el deseo de buscar, la paciencia para dudar, la afición de meditar",
      icon: <LuSmile className="text-green-600 w-8 h-8" />,
    },
    {
      title: "Emprendimiento",
      desc: "Con un espíritu inquieto, usando su creatividad y viendo la oportunidad de ofrecer una solución",
      icon: <LuHeart className="text-green-600 w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Porque la generación uteísta es especial
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#d6d3d0] rounded-xl shadow p-6 text-left"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function NiagaraApp() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto bg-green-700 rounded-xl overflow-hidden shadow-lg">
        
        {/* Imagen con overlay y título */}
        <div className="relative">
          <img
            src={niagaraImg}
            alt="Estudiantes en campus"
            className="w-full h-[400px] object-cover object-top" 
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Why Niagara College?
            </h2>
          </div>
        </div>

        {/* Texto debajo */}
        <div className="p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Convenios Internacionales</h3>
          <p className="italic mb-4">
            Intercambio de estudiantes de pregrado y posgrado, personal académico, 
            investigador y administrativo. Desarrollo de proyectos conjuntos de 
            carácter académico cultural.
          </p>
          <div className="text-sm">— Donald Trump</div>
        </div>
      </div>
    </section>
  )
}

function JobBoardApp() {
  // Mapa de iconos por clave
  const ICONS = {
    node: FaNodeJs,
    react: FaReact,
    java: FaJava,
    vue: FaVuejs,
    python: FaPython,
    angular: FaAngular,
    sql: FaDatabase,
    mongodb: SiMongodb,
    english: FaLanguage,
    laravel: FaLaravel,
    dotnet: SiDotnet,
  };

  // Datos de estudiantes (usa tus imágenes importadas: student1,2,3)
  const students = [
    {
      name: "Kevin Mejia",
      img: student1,
      skills: [
        { label: "Node JS", key: "node" },
        { label: "React JS", key: "react" },
        { label: "Java", key: "java" },
        { label: "Vue", key: "vue" },
      ],
      rate: "$50/h",
    },
    {
      name: "Andres Felipe Galvis",
      img: student2,
      skills: [
        { label: "Python", key: "python" },
        { label: "Angular", key: "angular" },
        { label: "SQL", key: "sql" },
        { label: "MongoDB", key: "mongodb" },
      ],
      rate: "$50/h",
    },
    {
      name: "Nicolas Picon",
      img: student3,
      skills: [
        { label: "Bilingue English C1", key: "english" },
        { label: "React", key: "react" },
        { label: "Laravel", key: "laravel" },
        { label: ".NET", key: "dotnet" },
      ],
      rate: "$60/h",
    },
  ];

  // Ítem de skill con fallback (si faltara algún icono, no rompe la app)
  const SkillItem = ({ label, iconKey }) => {
    const Icon = ICONS[iconKey];
    return (
      <li className="flex items-center gap-2">
        {Icon ? <Icon className="text-gray-700" /> : <span>✅</span>}
        <span>{label}</span>
      </li>
    );
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Bolsa de Empleo - Mejores estudiantes
        </h2>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {students.map((st) => (
            <div
              key={st.name}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-80"
            >
              {/* Avatar circular */}
              <div className="flex justify-center mt-6">
                <img
                  src={st.img}
                  alt={st.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-black"
                />
              </div>

              {/* Info */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-lg font-bold text-center mb-4">{st.name}</h3>
                <ul className="space-y-2 mb-6 text-gray-700 text-sm text-left">
                  {st.skills.map((s) => (
                    <SkillItem key={s.label} label={s.label} iconKey={s.key} />
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{st.rate}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                    CONTRATAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterApp() {
  return (
<footer className="bg-green-700 py-3 mt-16 rounded-full mx-4">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-white text-sm">
          Copyright © Unidades Tecnológicas de Santander
        </p>
      </div>
    </footer>
  )
}

function Phrase(props){
  return(
    <>
    <h1 className='rounded-md bg-red-500 text-white p-2 w-[450px]'>{props.phraseProp}</h1>
    </>
  )
}
function App() {


  return (
    <>
    <HeaderApp/>
    <BannerApp/>
    <FeaturesApp/>
    <NiagaraApp/>
    <JobBoardApp/>
    <FooterApp/>
      </>
  )
}

export default App
