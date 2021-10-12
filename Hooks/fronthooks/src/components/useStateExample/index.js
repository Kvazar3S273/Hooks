import { useState, useEffect } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div>
        <h3>Ви клацнули {count} разів</h3>
        <button type="button" class="btn btn-primary"
          onClick={() => setCount(count + 1)}>
          Клацни мене!
        </button>
        <button type="button" class="btn btn-danger"
          onClick={() => setCount(0)}>
          Обнулити!
        </button>
      </div>
    </div>
  );
}
export default UseStateExample