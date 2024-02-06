import './TodoCounter.css';

function TodoCounter({total, complete}) {
    return (
      <h1>
        Has completado <span>{complete}</span> de <span>{total}</span> pendientes
      </h1>
        );
  }

  export {TodoCounter};