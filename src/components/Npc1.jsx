import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, reduceCartItems } from "../redux/cartSlice";


function Npc1() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const [isOpen, setIsOpen] = useState(false); // 新增 state 來控制清單開關

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState); // 切換開關狀態
    };


    return (
        <div className="dropdown dropdown-end">
            <button className="btn m-1" onClick={toggleDropdown}>
                {/* <img src="" alt={product.name} /> */}
                npc1
            </button>

            {isOpen && (
                <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {/* <li><button className="btn" onClick={() => { toggleDropdown() }}>買一朵</button></li> */}
                    {cartItems.length === 0 && <p>哪裡有花可以送?</p>}
                    {cartItems.length > 0 &&
                        <>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                    <button
                                        className="btn"
                                        onClick={() => { dispatch(reduceCartItems(item.id)); toggleDropdown() }}
                                    >
                                        送一朵{item.name}
                                    </button>
                                </li>
                            ))}
                            <li><button className="btn" onClick={toggleDropdown}>不送了</button></li>
                        </>
                    }


                </ul>
            )}
        </div>
    );
}

export default Npc1;