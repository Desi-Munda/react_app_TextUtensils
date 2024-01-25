import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    //In react, only one element/tag can be “returned” in a component (function). 
    //If more, adjacent elements must be wrapped in an enclosing tag <> <>.
    <>
      <nav>
        <li>Home</li>
        <li>Contact</li>
        <li>Phone</li>
      </nav>
      <div className="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
        eligendi dolorum itaque reprehenderit. Cupiditate repellat aperiam error
        possimus quas, cum, ab quae consequuntur rem repudiandae laborum tenetur
        vero laboriosam, dolorum sunt cumque debitis?
      </div>
    </>
  );
}

export default App;
