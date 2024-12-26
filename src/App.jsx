import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Question from "./components/Question";
import AudioPlayer from "./components/AudioPlayer";
const App = () => {
  return (
    <div>
      <AudioPlayer />
      <Header />
      <Question />
      <Gallery />
    </div>
  );
};

export default App;
