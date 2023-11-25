import { SLIDER_PAGE } from "@/common/images/slider";

const Slider = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="absolute w-full flex flex-col justify-center items-center">
        <h1 className="text-white font-bold font-sans text-[60px]">
          Arctos Coffee
        </h1>
        <h1 className="text-white font-bold font-sans text-[60px]">
          Get Caffeinated
        </h1>
        <div className="mt-8 font-sans w-[132px] h-[48px] bg-[#c72135] rounded-[5px] flex justify-center items-center text-[#fff] font-bold cursor-pointer">Order Now</div>
      </div>
      <img className="h-[773px] w-full" src={SLIDER_PAGE} alt="Slider" />
    </div>
  );
};

export default Slider;
