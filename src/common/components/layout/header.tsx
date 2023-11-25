import { IMAGES_HEADER } from "@/common/images/header";
import Search from "../search/search";
import Cart from "../Cart/cart";  
import Login from "@/modules/Login";

const Header = () => {
  return (
    <div>
      <div className="w-auto h-[152px] font-bold flex justify-center px-[100px] bg-[#f5eff0] gap-[200px] pl-[500px]">
        <div className="p-7 cursor-pointer">
          <img
            className="w-[197px] h-[105px]"
            src={IMAGES_HEADER}
            alt="Volvo"
          />
        </div>
        <div className="flex gap-4 p-7 items-center">
          <Search />
          <Cart />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
