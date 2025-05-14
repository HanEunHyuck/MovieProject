import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

type DropdownProps = {
  items: string[];
  onSelect: (item: string) => void;
};

const Dropdown = ({ items, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(items[0]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
    buttonRef.current?.focus();
    onSelect(item);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative w-full' ref={dropdownRef}>
      <button
        ref={buttonRef}
        type='button'
        className='w-full cursor-pointer rounded-full border-2 px-4 py-3 text-xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <IoIosArrowDown
          size={24}
          className={`absolute top-1/2 right-6 -translate-y-1/2 transition-all ${isOpen ? '-rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className='absolute z-10 mt-2 flex w-full flex-col overflow-hidden rounded-4xl border-2 bg-neutral-900 shadow-lg'>
          {items.map((item, index) => (
            <button
              key={index}
              type='button'
              onClick={() => handleSelect(item)}
              className='cursor-pointer px-4 py-3 hover:bg-neutral-500'
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
