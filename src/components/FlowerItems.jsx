import { useDispatch, useSelector } from "react-redux";
import { addCartItems, selectCartItems } from "../redux/cartSlice";
import { useState } from 'react';

function FlowerItems({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const [qty, setQty] = useState(
        cartItems.find(item => item.id === product.id)?.qty || 0
    );
    const [isOpen, setIsOpen] = useState(false); // 新增 state 來控制清單開關
    const [showToast, setShowToast] = useState(false);

    const addToCart = (e) => {
        setShowToast(true); // 顯示 toast
        setQty(prevQty => prevQty + 1);
        dispatch(addCartItems({
            id: product.id,
            name: product.name,
            image: product.image,
            qty: qty + 1,
        }))
        // 2 秒後自動關閉 toast
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    };

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState); // 切換開關狀態
    };

    return (
        <div className="dropdown">
            <button className="h-[90px] sm:h-[130px] md:h-[150px] lg:h-[170px]" onClick={toggleDropdown}>
                <img src={product.image} alt={product.name} className="h-[90px] sm:h-[130px] md:h-[150px] lg:h-[170px] object-cover" />
            </button>

            {isOpen && (
                <ul className="dropdown-content menu z-1 w-52 p-2">
                    <li><button className="btn npc-choose mb-1.5" onClick={() => { addToCart(); toggleDropdown() }}>買一朵{product.name}</button></li>
                    <li><button className="btn npc-choose" onClick={toggleDropdown}>不買</button></li>
                </ul>
            )}
            {showToast && (
                <div className="toast toast-end ">
                    <div className="alert p-0 flowerShop-toast">
                        <div className="size-[90px] sm:size-[130px] md:size-[150px] lg:size-[170px] my-1.5 ml-1.5 rounded-lg bg-[#ffffff] flex items-center justify-center">
                            <img src={product.image} alt={product.name} className="h-[70px] sm:h-[110px] md:h-[130px] lg:h-[150px] object-cover mx-auto " />
                        </div>

                        <span className="pr-20">
                            感謝你購買一朵{product.name}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FlowerItems;
