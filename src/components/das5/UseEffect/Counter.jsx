import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count-ը փոխվեց: ${count}`);
    document.title = `Դուք սեղմել եք ${count} անգամ`;

    return () => {
      console.log(`Cleanup համար ${count}`);
    };
  }, [count]); // Կախվածության զանգվածում ներառված է count

  return (
    <div>
      <p>Դուք սեղմել եք {count} անգամ</p>
      <button onClick={() => setCount(count + 1)}>
        Սեղմել ինձ
      </button>
    </div>
  );
}

export default Counter;