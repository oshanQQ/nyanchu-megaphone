import { randomString } from '../libs/utils';
import { ChangeEvent, useEffect, useState } from 'react';

type Props = {
  label: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
};

export const TextField: React.FC<Props> = ({
  label,
  placeholder,
  onChange,
  value,
}) => {
  const [id, setId] = useState('');
  useEffect(() => {
    setId(randomString());
  }, []);

  return (
    <div className="mb-5 center">
      <label htmlFor={id} className="font-bold mb-1 text-gray-700 block">
        {label}
      </label>
      <textarea
        id={id}
        className="form-textarea w-full px-4 py-3 h-24 test-center rounded-lg shadow-md focus:outline-none focus:ring-2 resize-none focus:shadow-outline text-gray-600 font-medium"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
