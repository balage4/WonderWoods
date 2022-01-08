import Footer from '../../components/Footer/Footer';
import Article from '../../components/Main/Article';
import Aside from '../../components/Main/Aside';
import Section from '../../components/Main/Section';
import Navigation from '../../components/Navigation/Navigation';

export default function Home() {
  return (
    <div className="grid-container">
      <Navigation />

      <main>
        <div className='main-left'>
      <Section />
      <Article />
        </div>
      </main>
      <Aside className='main-right'/>
      <Footer />
    </div>
  );
}
