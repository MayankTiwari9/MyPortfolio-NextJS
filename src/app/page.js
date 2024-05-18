import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import "./globals.css";


export default function Home() {
  return (
    <main className="app">
      <Header/>
      <HomePage/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Footer/>
    </main>
  );
}
