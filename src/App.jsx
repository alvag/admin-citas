import { useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { PatientList } from './components/PatientList';

function App() {
    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState({});

    return (
        <div className="container mx-auto">
            <Header />

            <div className="mt-12 md:flex">
                <Form
                    setPatients={setPatients}
                    patient={patient}
                    setPatient={setPatient}
                />
                <PatientList
                    patients={patients}
                    setPatients={setPatients}
                    setPatient={setPatient}
                />
            </div>
        </div>
    );
}

export default App;
