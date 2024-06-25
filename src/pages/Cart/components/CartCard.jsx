import { RiDeleteBinLine } from "react-icons/ri";

export const CartCard = () => {
  return <div className="w-full flex p-3 bg-white items-center">
    <img  className="w-1/4 flex-1"alt="product image"/>
    <span className="flex-1 flex flex-col">
      <h4>Girl pink Moana Printed Dress</h4>
      <p>1 x $80.00</p>
      <p>Size: 5</p>
    </span>
    <i className="flex-none w-14">
    <RiDeleteBinLine />
    </i>
    </div>;
};
