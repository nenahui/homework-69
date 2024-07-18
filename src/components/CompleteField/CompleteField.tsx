import { AutoComplete } from 'antd';
import { Complete } from '../../types';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShows } from '../../store/homeThunks';

export const CompleteField = () => {
  const dispatch: AppDispatch = useDispatch();
  const options = useSelector((state: RootState) => state.home.options);

  const onChangeField = (value: string) => {
    dispatch(fetchShows(value));
  };

  const onSelectShow = (_: unknown, option: Complete) => {
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
