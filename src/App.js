import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Which word are you curious about?</h1>
        <Dictionary />
      </header>
      <main></main>
      <footer>
        <p className="mb-1">
          Coded by{" "}
          <a
            href="https://juliana-broersen.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juliana Broersen
          </a>
        </p>
        <p>
          Open-sourced on{" "}
          <a
            href="https://github.com/julbroersen/react-dictionary-app-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
