import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './Error';

export const Form = ({ setPatients, patient, setPatient }) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(patient).length === 0) return;

        setName(patient.name);
        setOwner(patient.owner);
        setEmail(patient.email);
        setDate(patient.date);
        setSymptoms(patient.symptoms);
    }, [patient]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([name, owner, email, date, symptoms].some((value) => !value)) {
            console.log('Hay campos vacios');
            setError(true);
            return;
        }

        setError(false);

        setPatients((prevPatients) => {
            if (Object.keys(patient).length !== 0) {
                return prevPatients.map((prevPatient) =>
                    prevPatient.id === patient.id
                        ? {
                              id: patient.id,
                              name,
                              owner,
                              email,
                              date,
                              symptoms,
                          }
                        : prevPatient
                );
            }
            return [
                {
                    id: Date.now(),
                    name,
                    owner,
                    email,
                    date,
                    symptoms,
                },
                ...prevPatients,
            ];
        });

        setPatient({});

        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');

        console.log('Formulario enviado');
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mb-10">
            <h2 className="font-black text-3xl text-center">
                Seguimeinto Pacientes
            </h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 flex flex-col gap-5"
                onSubmit={handleSubmit}
            >
                {error && <Error message="Todos los campos son oblogatorios" />}

                <div>
                    <label
                        htmlFor="name"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        type="text"
                        id="name"
                        placeholder="Nombre de la mascota"
                    />
                </div>

                <div>
                    <label
                        htmlFor="owner"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        onChange={(e) => setOwner(e.target.value)}
                        value={owner}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        type="text"
                        id="owner"
                        placeholder="Nombre del propietario"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Correo Electronico
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        type="email"
                        id="email"
                        placeholder="Correo del propietario"
                    />
                </div>

                <div>
                    <label
                        htmlFor="date"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Fecha de Registro
                    </label>
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        type="date"
                        id="date"
                    />
                </div>

                <div>
                    <label
                        htmlFor="symptoms"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Síntomas
                    </label>
                    <textarea
                        onChange={(e) => setSymptoms(e.target.value)}
                        value={symptoms}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        id="symptoms"
                        placeholder="Describe los síntomas"
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md"
                    value={
                        patient?.id ? 'Actualizar Paciente' : 'Agregar Paciente'
                    }
                />
            </form>
        </div>
    );
};

Form.propTypes = {
    setPatients: PropTypes.func.isRequired,
    setPatient: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
};
