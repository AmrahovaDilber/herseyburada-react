import { useState } from "react";
const AddressBook = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState('');

  const addAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Ünvanlarım</h2>
      <ul className="space-y-2">
        {addresses.map((address, index) => (
          <li key={index} className="flex justify-between items-center p-2 border rounded bg-gray-50">
            <span>{address}</span>
            <div>
              <button className="text-blue-500">Redaktə et</button>
              <button className="text-red-500 ml-2">Sil</button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        className="border p-2 mt-4 w-full"
        placeholder="Yeni ünvan"
      />
      <button onClick={addAddress} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Ünvan əlavə et
      </button>
    </div>
  );
};

export default AddressBook;
