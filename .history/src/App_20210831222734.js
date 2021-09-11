
import AppProvider from "./context/AppContext.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import CursorProvider from "./context/CursorContext.jsx";
import DocumentProvider from "./context/DocumentContext.jsx";
import Nav from "./components/Nav";
import Header from "./components/Header";
import HomePage from "./pages/home/index";
import TeamPage from "./pages/team/index";
import Portfolio from "./pages/portfoio/index.jsx";
import ServicesLayout from "./pages/services/index.jsx";
import MCxPage from "./pages/mcx/index.jsx";
import SpecialServicesPage from './pages/services/specialServices/SpecialServices.jsx';
import ArticleDetails from "./templates/ArticleDetails.jsx";
import 'tailwindcss/dist/base.min.css';

function App() {
  return (
    <DocumentProvider>
      <CursorProvider>
        <AppProvider>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/team" exact>
              <TeamPage />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/services" exact>
              <ServicesLayout />
            </Route>
            <Route path="/services/specialServices" exact>
              <SpecialServicesPage />
            </Route>
            <Route path="/services/:slug" exact>
              <ArticleDetails />
            </Route>
            <Route path="/mcx" exact>
              <MCxPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </AppProvider>
      </CursorProvider>
    </DocumentProvider>
  );
}

export default App;
