import About from "./Component/About/About";
import Hero from "./Component/Hero/Hero";
import MyWork from "./Component/MyWork/MyWork";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork></MyWork>
    </div>
  );
}
