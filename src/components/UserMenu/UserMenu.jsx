import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
// import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  //   const avatar = defaultAvatar;

  return (
    <div style={s.container}>
      {/* <img src={avatar} alt="" width="32" style={s.avatar} /> */}
      <span style={s.name}>Hello, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
