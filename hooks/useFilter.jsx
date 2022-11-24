import { useRouter } from "next/router";
import { useState } from "react";

const useFilter = () => {
  const router = useRouter();
  const [menu, setMenu] = useState({});
  const [page, setPage] = useState(1);
  const handleMenu = (children, value) => {
    const name = children.charAt(0).toUpperCase() + children.slice(1);
    const newMenu = {
      name: name,
      type: value,
    };
    setMenu(newMenu);
    router.push(`/products?type=${value}&name=${name}&pageNumber=${page} `);
  };
  return {
    menu,
    handleMenu,
    page,
  };
};

export default useFilter;
