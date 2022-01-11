import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="avatar" width="35" className={s.avatar} />
      <span className={s.name}>{name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
