import DatePicker from "./components/DatePicker";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <DatePicker placeholder="mm/dd/yyyy" />
      </div>
    </>
  );
}

export default App;
