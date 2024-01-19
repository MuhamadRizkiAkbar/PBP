const mahasiswaNim = '20220040166';
const updatedData = {
    nama: 'Muhamad Rizki Akbar',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Begeg'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));