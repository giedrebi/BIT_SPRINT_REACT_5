import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import TodoApp from "./components/TodoApp/TodoApp";
import ErrorPhoto from "./assets/pablo-prohibited-content.png";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/todoApp" element={<TodoApp />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", textAlign: "center" }}>
              <p>There's nothing here!</p>
              <img src={ErrorPhoto}
              alt="error-page"
              style={{ width: "50%", marginTop: "30px", margin: "auto" }}/>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;