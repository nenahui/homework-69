import { AutoComplete } from 'antd';
import { Complete } from '../../types';

export const CompleteField = () => {
  const options: Complete[] = [
    { value: 'Hello world!', key: 123 },
    { value: 'Hello!', key: 124 },
  ];

  const onChangeField = (value: string) => {
    console.log(value);
  };

  const onSelectShow = (_data: unknown, option: Complete) => {
    console.log(option);
  };

  return (
    <AutoComplete
      options={options}
      onChange={onChangeField}
      onSelect={onSelectShow}
      placeholder={'Search for TV Show…'}
      style={{ marginBottom: 10 }}
    />
  );
};
