import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { useEffect } from 'react';
import { fetchShow } from '../../store/homeThunks';
import { Flex, Typography, Image, Empty, Spin } from 'antd';

export const Show = () => {
  const show = useSelector((state: RootState) => state.home.show);
  const isLoading = useSelector((state: RootState) => state.home.isLoading);
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

  if (isLoading) {
    return <Spin className={'spinner'} />;
  }

  return (
    <Flex gap={'middle'} align={'start'}>
      <div style={!show.image ? { width: 700 } : { width: 'auto' }}>
        {show.image ? (
          <Image src={show.image.original} alt={show.name + ' image'} />
        ) : (
          <Empty description={`${show.name} image not found…`} />
        )}
      </div>
      <div>
        <Typography.Text style={{ fontSize: 20 }}>{show.name}</Typography.Text>
        <Typography.Paragraph>
          {show.summary ? (
            <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          ) : (
            'Unfortunately, our database does not contain a description of this show.…'
          )}
        </Typography.Paragraph>
      </div>
    </Flex>
  );
};
