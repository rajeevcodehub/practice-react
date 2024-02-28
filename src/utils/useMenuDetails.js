import react, { useEffect, useState } from "react";
import { fetch_menu_api } from "../utils/constants";

const useMenuDetails = (resId) => {
    const [menu, setMenu] = useState();
    const filterRestaurantBasedOnCategory = (itemCategory) => {
        const res = itemCategory?.filter(item => {
            return item?.card?.card?.["@type"]?.includes("ItemCategory") && Object.hasOwn(item?.card?.card, 'itemCards')
        })
        setMenu(res);
    }
    const fetchMenu = async ()  => {
        const data = await fetch(fetch_menu_api + resId);
        const res = await data.json();
        const result = res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        filterRestaurantBasedOnCategory(result);    
    }
    
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    return menu;
}

export default useMenuDetails;