import React from "react";
import Slider from "@/common/components/layout/slider";
import FeaturedItems from "../ProductFeaturedItems/FeaturedItems";

const Landing = () => {
  return (
    <div>
      <Slider />
      <FeaturedItems/>
    </div>
  );
};

Landing.useClient = true;
export default Landing;
