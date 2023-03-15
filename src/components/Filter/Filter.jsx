import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterActions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>Find contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </div>
  );
};
