function Counter({ count, increment }) {
    return (
      <div>
        <p>Valeur : {count}</p>
        <button onClick={increment}>Incrémenter</button>
      </div>
    );
  }
  export default Counter;