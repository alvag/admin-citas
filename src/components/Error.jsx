import PropTypes from 'prop-types';

export const Error = ({ message = 'Ocurrió un error inesperado' }) => {
    return (
        <div className="bg-red-600 text-white p-2 rounded">
            <p>{message}</p>
        </div>
    );
};

Error.propTypes = {
    message: PropTypes.string,
};
