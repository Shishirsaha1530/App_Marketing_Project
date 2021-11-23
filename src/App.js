import MainComponent from './Component/MainComponent'
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  return (
    <div>
     <ScrollToTop smooth />
      <MainComponent> </MainComponent>
    </div>
  );
}

export default App;
