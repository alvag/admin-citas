import PropTypes from 'prop-types';

export const PatientCard = ({ patient }) => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:{' '}
                <span className="font-normal normal-case">{patient.name}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:{' '}
                <span className="font-normal normal-case">{patient.owner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:{' '}
                <span className="font-normal normal-case">{patient.email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de Registro:{' '}
                <span className="font-normal normal-case">{patient.date}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:{' '}
                <span className="font-normal normal-case">
                    {patient.symptoms}
                </span>
            </p>
        </div>
    );
};

PatientCard.propTypes = {
    patient: PropTypes.object.isRequired,
};
