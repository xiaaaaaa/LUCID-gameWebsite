import { useDispatch,useSelector } from "react-redux";
import { addCartItems,selectCartItems } from "../redux/cartSlice";
import { useState } from 'react';

function FlowerItems({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const [qty, setQty] = useState(
        cartItems.find(item => item.id === product.id)?.qty || 0
    );
    const [isOpen, setIsOpen] = useState(false); // 新增 state 來控制清單開關

    const addToCart = (e) => {
        setQty(prevQty => prevQty + 1);
        dispatch(addCartItems({
            id: product.id,
            name: product.name,
            image: product.image,
            qty: qty + 1,
        }))
    };

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState); // 切換開關狀態
    };

    return (
        <div className="dropdown dropdown-end">
            <button className="btn m-1" onClick={toggleDropdown}>
                <img src={product.image} alt={product.name} />
            </button>

            {isOpen && (
                <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button className="btn" onClick={() => { addToCart(); toggleDropdown() }}>買一朵{product.name}</button></li>
                    <li><button className="btn" onClick={toggleDropdown}>不買</button></li>
                </ul>
            )}
        </div>
    );
}

export default FlowerItems;
