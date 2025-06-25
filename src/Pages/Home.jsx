
import BottomHeader from '../components/HeaderButton/BottomHeader';
import HeroSection from '../components/Home/HeroSection';
import PopularProducts from '../components/Home/PopularProducts';
import BestSellerProducts from '../components/Home/BestSellerProducts';
import Footer from '../components/Footer';
import Layout from '../components/common/Layout';
const menus = [
  'Jewelry & Accessories',
  'Clothing & Shoes',
  'Home & Living',
  'Wedding & Party',
  'Toys & Entertainment',
  'Art & Collectibles',
  'Craft Supplies & Tools'
];

const Home = () => {
    return ( 
    <Layout>
     <BottomHeader menus={menus}/>
     <HeroSection/>
     <PopularProducts/>
     <BestSellerProducts/>
  </Layout>
     );
}
 
export default Home;