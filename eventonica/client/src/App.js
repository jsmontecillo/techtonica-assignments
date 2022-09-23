import Footer from "./components/footer";
import Users from "./components/users";
import Events from "./components/events";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="users">
          <Users />
        </div>
        <div className="events">
          <Events />
        </div>

        <aside className="search-toolbar">
          <div>
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
