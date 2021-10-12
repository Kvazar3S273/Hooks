import { useState, useEffect } from 'react';
export default props => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [moveCount, setMoveCount] = useState(0);
    const [cross, setCross] = useState(0);
  
    const mouseMoveHandler = event => {
      setX(event.clientX);
      setY(event.clientY);
    };
  
    useEffect(() => {
      console.log("componentDidUpdate");
      if (x === y) {
        setCross(x);
      }
    });
  
    useEffect(() => {
      console.log("componentDidMount");
      document.addEventListener("mousemove", mouseMoveHandler);
      return () => {
        console.log("componentDidUnmount");
        document.removeEventListener("mousemove", mouseMoveHandler);
      };
    }, []);
  
    useEffect(() => {
      setMoveCount(moveCount => moveCount + 1);
    }, [x, y]);
  
    return (
      <div>
        <h4>
          Координати курсора: {x}, {y}
        </h4>
        <h4>Лічильник руху курсора: {moveCount} сек</h4>
        <h4>
          Позиція перетину двох точок: {cross}, {cross}
        </h4>
      </div>
    );
  };