import { FaCartPlus } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

const HomeItem = ({ item }) => {
  let bagItems = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const eltCheck = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {eltCheck ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemoveFromBag}
        >
          <MdOutlineRemoveShoppingCart /> Remove from Bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary btn-add-bag"
          onClick={handleAddToBag}
        >
          <FaCartPlus /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
