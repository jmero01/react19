import logo from "./logo.svg";
import "./App.css";
import { QuoteData } from "./hooks/fetch-data/before";
import { OneHookUse } from "./hooks/fetch-data/new";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <section>
          <QuoteData />
          <OneHookUse />
        </section>
      </main>
    </div>
  );
}

export default App;
