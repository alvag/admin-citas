export const PatientCard = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: <span className="font-normal normal-case">Hulk</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:{' '}
                <span className="font-normal normal-case">Max Alva</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:{' '}
                <span className="font-normal normal-case">email@test.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de Registro:{' '}
                <span className="font-normal normal-case">10/08/2023</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:{' '}
                <span className="font-normal normal-case">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe provident eaque officiis? Consequatur voluptates,
                    dicta quasi officiis nostrum repellendus ipsam commodi hic
                    facere veniam architecto omnis suscipit praesentium sed
                    possimus.
                </span>
            </p>
        </div>
    );
};
