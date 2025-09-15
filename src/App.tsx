import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("App component rendered");

  return (
    <>
      <div className="container">
        <div className="content">
          <section>LOGO</section>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <section>MENU</section>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <section>FORM</section>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}
