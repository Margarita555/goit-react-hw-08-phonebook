import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e =>
          dispatch(contactsActions.changeFilter(e.currentTarget.value))
        }
      />
    </label>
  );
};

export default Filter;

// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onFilterChange: e =>
//     dispatch(contactsActions.changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
