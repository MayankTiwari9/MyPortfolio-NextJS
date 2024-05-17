import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import "./globals.css";


export default function Home() {
  return (
    <main className="app">
      <Header/>
      <HomePage/>
      <About/>
      <Experience/>
    </main>
  );
}
