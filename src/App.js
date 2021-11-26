import './App.css';
import Heading from './Components/Heading';
import Cards from './Components/Cards';
import BottomDiv from './Components/BottomDiv';
import Topdiv from './Components/Topdiv';

function App() {
  return (
    <>
    <Heading/>
    <Topdiv/>
    <div className="flexcards">

    <Cards src="/EC_FAQs_General.svg" title="General"/>
    <Cards src="/EC_FAQs_PrivacyandSecurity.svg" title="Privacy and Security"/>
    <Cards src="/EC_FAQs_AccountSetting.svg" title="Account Setting"/>
    <Cards src="/EC_FAQs_Connections.svg" title="Connections"/>
    <Cards src="/EC_FAQs_Events.svg" title="Events"/>
    <Cards src="/EC_FAQs_JobSearch.svg" title="Job Search"/>
    </div>
    <BottomDiv/>
    </>
  );
}

export default App;
