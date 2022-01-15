import { BallTriangle } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <BallTriangle
        type="BallTriangle"
        color="rgb(9, 139, 172)"
        height={60}
        width={60}
      />
    </div>
  );
};

export default Spinner;
