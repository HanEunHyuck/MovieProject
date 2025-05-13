// route
import { Link } from 'react-router-dom';

// react-icons
import { LuMenu } from 'react-icons/lu';

const Header = () => {
  return (
    <header className='header'>
      <h1>
        <Link to={'/'}>
          <img src='./logo.svg' alt='CineScope 로고' />
        </Link>
      </h1>
      <button type='button'>
        <LuMenu size={30} color='white' />
      </button>
    </header>
  );
};

export default Header;
