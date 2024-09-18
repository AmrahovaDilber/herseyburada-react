import { useState } from "react";

const PaymentOptions = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState('');

  const addCard = () => {
    setCards([...cards, newCard]);
    setNewCard('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Ödəniş Seçimlərim</h2>
      <ul className="space-y-2">
        {cards.map((card, index) => (
          <li key={index} className="flex justify-between items-center p-2 border rounded bg-gray-50">
            <span>{card}</span>
            <div>
              <button className="text-blue-500">Redaktə et</button>
              <button className="text-red-500 ml-2">Sil</button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newCard}
        onChange={(e) => setNewCard(e.target.value)}
        className="border p-2 mt-4 w-full"
        placeholder="Yeni kart nömrəsi"
      />
      <button onClick={addCard} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Kart əlavə et
      </button>
    </div>
  );
};

export default PaymentOptions;
