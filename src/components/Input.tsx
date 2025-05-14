import { useNavigate } from 'react-router-dom';

import { IoSearch } from 'react-icons/io5';

// store
import useStore from '../store/useStore';

type InputProps = {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({
  type = 'string',
  value,
  onChange,
  placeholder,
}: InputProps) => {
  const navigate = useNavigate();

  const { setSearchTxt } = useStore();

  const handleSearch = () => {
    navigate('/search-result');
    setSearchTxt(value);
  };

  return (
    <div className='relative w-full'>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={e => {
          if (type === 'search' && e.key === 'Enter') {
            handleSearch();
          }
        }}
        placeholder={placeholder}
        className='w-full rounded-full border-2 bg-neutral-900 px-6 py-3 text-xl text-white placeholder-gray-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden'
      />
      {type === 'search' && (
        <button
          type='button'
          className='absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer focus:outline-1'
          onClick={handleSearch}
        >
          <IoSearch size={24} />
        </button>
      )}
    </div>
  );
};

export default Input;
