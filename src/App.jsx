import { Suspense} from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import Stat from "./Component/Stat";
import Card_Container from "./Component/Card Container/Card_Container";
import Step from "./Component/Step/Step";
import Price from "./Component/Pricing Container/Price";
import Footer from "./Component/Footer/Footer";
// import Card_Container from "./Component/Card Container/Card_Container";

const fetchdata = async () => {
  const response = await fetch("/data.json");
  return response.json();
};

function App() {
  const promise = fetchdata();
  return (
    <>
    
      <Navbar />
      <Banner />
      <Stat />
      <Suspense>
        <Card_Container promise={promise} />
      </Suspense>
    <Step></Step>
    <Price></Price>
    <Footer></Footer>
    
    </>
  );
}

export default App;
