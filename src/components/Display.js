import React from 'react'

const Display = () => {
    const patient = [
        { id: 1, name: "John Doe", age: 35, gender: "male", diagnosis: "flu" },
        { id: 2, name: "Jane Smi", age: 42, gender: "female", diagnosis: "headache" },
        { id: 3, name: "Bob John", age: 50, gender: "male", diagnosis: "diabetes" },
        { id: 4, name: "Samantha ", age: 28, gender: "female", diagnosis: "broken leg" }
      ];
      
  return (
    <div>
     <h1 className='text-2xl mx-auto font-bold'>patient Health history</h1>   
    <div>
    {patient.map((patients) => (
        <div class="relative overflow-x-auto" key={patients.id}>
        <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                    id
                    </th>
                    <th scope="col" class="px-6 py-3">
                    Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                    Age
                    </th>
                    <th scope="col" class="px-6 py-3">
                    diagnosis
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {patients.id}
                    </th>
                    <td class="px-6 py-4">
                    {patients.name}
                    </td>
                    <td class="px-6 py-4">
                    {patients.age}
                    </td>
                    <td class="px-6 py-4">
                    {patients.diagnosis}
                    </td>
                </tr>
            </tbody>
        </table>
      {/* <div key={patients.id} className='flex items-center justify-center '>
        <p className='mx-4 '></p>
        <p className='mx-4 '></p>
        <p className='mx-4 '>p>
        <p className='mx-4 '>{patients.gender}</p>
        <p className='mx-4 '></p>
      </div> */}
      </div>
    ))}
  </div></div>
  )
}

export default Display