import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import Search from '../components/Search';
import ShowsGrid from '../components/ShowsGrid';

const Shows = () => {
  const { items, isLoading, error } = useFetch('https://api.tvmaze.com/shows');

  console.log(items);

  const shows = [];
  items.map(item => shows.push({ id: item.id, title: item.name }));

  console.log(shows);

  const titles = shows.map(movie => movie.title);

  console.log(titles);

  return (
    <>
      <Header />
      <h2 className="text-lg">Shows</h2>
      <Search newValue={shows.map(show => show.title)} data={shows} />
      {error ? (
        <h3>{error.message}</h3>
      ) : (
        <ShowsGrid isLoading={isLoading} items={items} />
      )}
    </>
  );
};

export default Shows;
