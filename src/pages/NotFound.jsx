import NotFound404 from '../assets/404.svg';
import PageHolder from '../components/PageHolder';

const NotFound = () => (
  <main className="maxContainer">
    <PageHolder
      title="Page not found"
      message="Not all those who wander are lost. But you are."
      imgSrc={NotFound404}
      showHome
    />
  </main>
);

export default NotFound;
