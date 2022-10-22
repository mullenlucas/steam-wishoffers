import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppNewsItem from '../components/appNewsItem';
import { getAppNews } from '../redux/appInfos';

const AppNewsPage = () => {
  const news = useSelector((state) => state.news);
  // const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (news.length === 0) {
      dispatch(getAppNews());
    }
  });

  return (
    <>
      <div>
        {news.map((n) => (
          <AppNewsItem key={n.gid} appnews={n} />
        ))}
      </div>
    </>
  );
};

export default AppNewsPage;
