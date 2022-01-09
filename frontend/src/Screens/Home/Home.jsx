import Footer from '../../components/Footer/Footer';
import Article from '../../components/Main/Article';

import Navigation from '../../components/Navigation/Navigation';

export default function Home() {
  return (
    <div className="grid-container">
      <Navigation />
      <Article />
      <Footer />
    </div>
  );
}
