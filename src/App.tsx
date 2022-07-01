import Page from "./Page";
import "./styles.css";
import "./ExceptionService";


export default function App() {
  return (
    <div className="App">
      <Page allTheJobs={['a']} />
    </div>
  );
}
