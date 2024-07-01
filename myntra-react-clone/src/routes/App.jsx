import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  let fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
