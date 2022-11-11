import PriceRange from "./PriceRange";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
  return (
    <div>
      <PriceRange />
      <SidebarSection title="Brand" />
      <SidebarSection title="Material" />
      <SidebarSection title="Warranty Period" />
      {/* <Brand />
      <Material />
      <Warranty /> */}
    </div>
  );
};

export default Sidebar;
