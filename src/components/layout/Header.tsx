import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LuMenu } from 'react-icons/lu';

const Header = () => {
  const [isTop, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isTop ? 'bg-neutral-900' : ''}`}>
      <h1>
        <Link to={'/'}>
          <img src='/logo.svg' alt='CineScope 로고' />
        </Link>
      </h1>
      <button type='button'>
        <LuMenu size={30} color='white' />
      </button>
    </header>
  );
};

export default Header;
