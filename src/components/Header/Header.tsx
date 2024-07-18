import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={'header'}>
      <Link to={'/'} className={'logo'}>
        TV Shows
      </Link>
    </header>
  );
};
