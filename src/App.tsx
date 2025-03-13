import './App.css'
import Header from './components/Header'
import Brands from './components/Brands'
import Categories from './components/Categories'
import NewArrivals from './components/NewArrivals'
import PopularProducts from './components/PopularProducts'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Brands />
        <Categories />
        <NewArrivals />
        <PopularProducts />
        <Banner />
      </main>
      <Footer />
    </div>
  )
}

export default App
