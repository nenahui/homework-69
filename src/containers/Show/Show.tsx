import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { useEffect } from 'react';
import { fetchShow } from '../../store/homeThunks';
import { Flex, Typography, Image, Empty } from 'antd';

export const Show = () => {
  const show = useSelector((state: RootState) => state.home.show);
  const dispatch: AppDispatch = useDispatch();
  const { showId } = useParams();

  useEffect(() => {
    if (showId !== undefined) {
      dispatch(fetchShow(showId));
    }
  }, [dispatch, showId]);

  if (show === null) {
    return <Empty description={'No data found for this show'} />;
  }

  return (
    <Flex gap={'middle'} align={'start'}>
      <div>
        <Image src={show.image.original} alt={show.name + ' image'} />
        <Typography.Text style={{ fontSize: 20 }}>{show.name}</Typography.Text>
      </div>
      <Typography.Paragraph>{show.summary}</Typography.Paragraph>
    </Flex>
  );
};
