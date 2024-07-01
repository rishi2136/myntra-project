import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummery from "../components/BagSummery";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => {
    //Is exist in the items array if yes
    const itemIndex = bagItems.indexOf(item.id);
    //then return true and that idx added to the array
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummery />
        </div>
      </main>
    </>
  );
};

export default Bag;
