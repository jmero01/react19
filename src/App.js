import logo from "./logo.svg";
import "./App.css";
import ComponentContainer from "./components/containers/container-hooks";
import { QuoteData } from "./hooks/fetch-data/before";
import { OneHookUse } from "./hooks/fetch-data/new";
import { ReturnPromise } from "./hooks/return-promise/return-promises";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <section>
          <ComponentContainer title="Use Fetch API">
            <QuoteData />
            <OneHookUse />
          </ComponentContainer>
        </section>
        <section>
          <ComponentContainer title="Return promise">
            <ReturnPromise />
          </ComponentContainer>
        </section>
      </main>
    </div>
  );
}

export default App;
