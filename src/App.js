import Navbar from './component/navbar/Navbar';
import Slider from './component/slider/Slider';
import Categ from './component/category/cate';
import About from './component/about/About';
import Treat from './component/treat/Treat';
import Discount from './component/discount/Discount';
import Arrivals from './component/arrivals/Arrival';
import News from './component/news/News';
import Footer from './component/footer/Footer';

import './assets/css/swiper-bundle.min.css';
import './assets/css/styles.css';

function App() {
  return (
    <div>
<Navbar />
<Slider />
<Categ /> 
<About />
<Treat />
<Discount />
<Arrivals />
<News />
<Footer />
    </div>
  )
}

export default App;
