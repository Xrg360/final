import React, { useState, useEffect } from 'react';
import { firestore } from '../Firebase.js'

const Display = () => {
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const patientsRef = firestore.collection('records');
      const snapshot = await patientsRef.get();
      const patients = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPatient(patients);
    };
    fetchData();
  }, []);


  return (
    <div>
      <h1 className='text-2xl mx-auto font-bold'>patient Health history</h1>
      <div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                diagnosis
              </th>
            </tr>
          </thead>
          <tbody>
            {patient.map((patients) => (
              <tr className="bg-white border-b" key={patients.id}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {patients.userId}
                </td>
                <td className="px-6 py-4">
                  {patients.name}
                </td>
                <td className="px-6 py-4">
                  {patients.age}
                </td>
                <td className="px-6 py-4">
                  {patients.diagnosis}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display