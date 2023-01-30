import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { useState } from "react"
import './style.css'
import { data } from "./data";
import { Cart } from "./Cart";

function App() {
  const [card, setCard] = useState(data);
  const [items, setItems] = useState(0);
  return (
    <div className="App">
      <Navbar con={
        <div>{items}</div>
      }/>
      <Header/>
      <section className="py-5">  
              <div className="container px-4 px-lg-5 mt-5">
                  <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {card.map((item , idx)=>(
        <Cart
          key={idx}
          idx={idx}
          stars={item.stars}
          name={item.name}
          bage={item.bage}
          between={item.between}
          orinalprizes={item.orinalprizes}
          discountedPrice={item.discountprizes}
          setItems = {setItems}
          setCard = {setCard}
          item ={items}
          card ={card}
        />
      ))}  
                  </div>
              </div>
          </section>
      <Footer/>
    </div>
  );
}
export default App;
