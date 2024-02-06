import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css'
import './TodoIcon' 

function TodoItem(props) {
    return (
      <li>
        <CompleteIcon />
        {/* <span 
          className={`material-symbols-outlined check-item .icon-check ${props.completed && "icon-check--active"} `
        }
        onClick={props.onComplete}>
        check
        </span> */}
        <p className={`ItemText ${props.completed && "ItemText--active"} `
        }>{props.text}</p>
        <DeleteIcon />
        {/* <span className="material-symbols-outlined close-item .icon-closed" onClick={props.onDelete}>
        delete
        </span> */}
      </li>
    );
  }

  export {TodoItem};