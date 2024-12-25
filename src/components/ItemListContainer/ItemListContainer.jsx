import React, { useEffect, useState } from 'react';

const ItemListContainer = ({ greeting }) => {
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 3000);

    // Limpiar el timeout en caso de que el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {showGreeting && (
        <div className="bg-slate-500 py-20 rounded-md shadow-xl w-3/4">
          <h1 className="text-center text-5xl text-white">{greeting}</h1>
        </div>
      ) 
      }
    </div>
  );
};

export default ItemListContainer;