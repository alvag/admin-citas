import PropTypes from 'prop-types';
import { PatientCard } from './PatientCard';

export const PatientList = ({ patients = [], setPatients, setPatient }) => {
    const handleDelete = (id) => {
        const newPatients = patients.filter((patient) => patient.id !== id);
        setPatients(newPatients);
    };

    return (
        <div className="md:w-1/2 lg:w-3/5 mb-10 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">
                Listado de Pacientes
            </h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">
                    Pacientes y Citas
                </span>
            </p>

            {!patients.length && (
                <div className="m-3 bg-indigo-600 text-white p-2 rounded text-center">
                    <p>No hay pacientes registrados</p>
                </div>
            )}

            {patients.map((patient) => (
                <PatientCard
                    key={patient.id}
                    patient={patient}
                    handleDelete={handleDelete}
                    setPatient={setPatient}
                />
            ))}
        </div>
    );
};

PatientList.propTypes = {
    patients: PropTypes.array.isRequired,
    setPatients: PropTypes.func.isRequired,
    setPatient: PropTypes.func.isRequired,
};
