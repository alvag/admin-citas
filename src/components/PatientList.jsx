import { PatientCard } from './PatientCard';

export const PatientList = () => {
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

            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
        </div>
    );
};
