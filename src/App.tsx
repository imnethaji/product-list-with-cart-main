import DishCard from "./components/DishCard";
import DESSERTDATA from "./data/data.json";
interface DishImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}
interface Dish {
  image: DishImage;
  name: string;
  category: string;
  price: number;
}

const dessertData: Dish[] = JSON.parse(JSON.stringify(DESSERTDATA));
function App() {
  return (
    <main>
      <article>
        <h1>Desserts</h1>
        <div className="dish-container">
          {dessertData.map((item, index) => (
            <DishCard key={index} dessertData={item} />
          ))}
        </div>
      </article>
      <aside>
        <h1>Your Cart 7</h1>
        <ul>
          <li>
            <h3>Classic Tiramisu</h3>
            1x @5.50 $5.50
          </li>
          <li>
            <h3>Classic Tiramisu</h3>
            1x @5.50 $5.50
          </li>
          <li>
            <h3>Classic Tiramisu</h3>
            1x @5.50 $5.50
          </li>
        </ul>
        Order Total $46.50
        <div className="disclaimer">This is a Carbon-neutral delivery</div>
      </aside>
    </main>
  );
}

export default App;
