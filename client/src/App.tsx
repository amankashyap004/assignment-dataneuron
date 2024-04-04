import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Header />
      <div className="pt-20">
        <HomePage />
      </div>
    </main>
  );
}

export default App;
