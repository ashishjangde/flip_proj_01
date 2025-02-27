import { Outlet } from "react-router"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import "./App.css"

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
