import { FilterContainer } from "../../Styles/Product";
import Brands from "./Brands";
import Materials from "./Metarials";
import PriceRange from "./PriceRange";
import Warranties from "./Warranties";

const Sidebar = () => {
  return (
    <FilterContainer>
      <PriceRange />
      <Brands />
      <Materials />
      <Warranties />
    </FilterContainer>
  );
};

export default Sidebar;
