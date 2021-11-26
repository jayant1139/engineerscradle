import logo from './logo.svg';
import './App.css';

import Heading from './Components/Heading';
import Cards from './Components/Cards';

function App() {
  return (
    <>
    <Heading/>
    <div className="flexcards">

    <Cards src="/EC_FAQs_Events.svg"/>
    <Cards src="/EC_FAQs_Events.svg"/>
    <Cards src="/EC_FAQs_Events.svg"/>
    <Cards src="/EC_FAQs_Events.svg"/>
    <Cards src="/EC_FAQs_Events.svg"/>
    <Cards src="/EC_FAQs_Events.svg"/>
    </div>
    </>
  );
}

export default App;
