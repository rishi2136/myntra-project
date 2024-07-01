import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  let bag = useSelector((store) => store.bag);

  return (
    <header className="pb-2">
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="../images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <input
          className="search_input form-control"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoMdPerson />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <BsEmojiHeartEyesFill />
          <span className="action_name">Wishlist</span>
        </div>

        <div className="action_container">
          <Link to="/bag" className="bag_link">
            <IoBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
