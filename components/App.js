import Header from "./Header";
import Layout from "./Layout";
import Speakers from "./Speakers";

// export const ThemeContext = createContext();

const App = () => {
  // const [parentState, setParentState] = useState({
  //   showSessions: true,
  //   theme: "light",
  // });
  // const { showSessions, theme } = parentState;
  // const providerSharedState = { showSessions, theme, setParentState };
  return (
    <Layout startingTheme="light">
      <div>
        <Header
        // theme={theme}
        />
        <Speakers
        // theme={theme}
        // showSessions={showSessions}
        // setParentState={setParentState}
        />
      </div>
    </Layout>
  );
};

export default App;
