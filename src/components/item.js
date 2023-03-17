import clsx from 'clsx';
import { memo, useState } from 'react';
import { ItemsContext } from '../lib/context';
import { updateItem } from '../lib/items';
import {remove, update} from '../lib/reducer'

const Item = ({ item, dispatch }) => {
  const [editing, setEditing] = useState(false);
  const { dispatch } = useContext(ItemsContext);

  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        className="focus:bg-red-500"
        checked={item.packed}
        id={`toggle-${item.id}`}
        onChange={() => dispatch(update({ id :item.id,  packed: !item.packed }))}
      />
      <label
        htmlFor={`toggle-${item.id}`}
        className={clsx({ hidden: editing })}
      >
        {item.name}
      </label>
      <input
        value={item.name}
        id={`edit-${item.id}`}
        className={clsx('py-0 text-sm', { hidden: !editing })}
        onChange={() => dispatch(items => updateItem(items, item.id, {packed: !item.packed}))}
      />
      <div className="flex gap-2">
        <button
          className="px-2 py-0 text-xs"
          aria-label={`Edit "${item.name}"`}
          onClick={() => setEditing(!editing)}
        >
          {editing ? '💾 Save' : '✍️ Edit'}
        </button>
        <button
          className="px-2 py-0 text-xs"
          aria-label={`Remove "${item.name}"`}
          onClick={() => dispatch(remove(item.id))}
        >
          🗑 Remove
        </button>
      </div>
    </li>
  );
};

export default Item;
