import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, reduceCartItems } from "../redux/cartSlice";
import { selectGetFlowerPeople, addGetFlowerLists } from "../redux/getFlowerSlice";
import { Flower } from 'lucide-react';

function Npc1() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const getFlowerPeople = useSelector(selectGetFlowerPeople);
    const [isOpen, setIsOpen] = useState(false); // 新增 state 來控制清單開關

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState); // 切換開關狀態
    };

    const addToNpc = (flowerName, e) => {
        dispatch(addGetFlowerLists({
            name: "lucid",
            flower: flowerName,
        }))
    }

    return (
        <>
            {getFlowerPeople.some(item => item.name === "lucid") ? (
                <div className="tooltip tooltip-right">
                    <div className="tooltip-content">
                        <div className="animate-bounce text-red-400 -rotate-0 text-2xl font-black">
                            謝謝你送我{getFlowerPeople.find(item => item.name === "lucid")?.flower}!
                        </div>
                    </div>
                    <button className=" h-[100px] w-[100px] p-0 " onClick={toggleDropdown}>
                        <img className='h-[100px] w-[100px] -ml-2 object-none' src="/images/npc-lucid.png" alt="lucid" />
                    </button>
                </div>
            ) : (
                <div className="dropdown dropdown-start">
                    <button className=" h-[100px] w-[100px] p-0 " onClick={toggleDropdown}>
                        <img className='h-[100px] w-[100px] -ml-2 object-none' src="/images/npc-lucid.png" alt="lucid" />
                    </button>

                    {isOpen && (
                        <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {cartItems.length === 0 && <p>哪裡有花可以送?</p>}
                            {cartItems.length > 0 &&
                                <>
                                    {cartItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                className="btn"
                                                onClick={() => { dispatch(reduceCartItems(item.id)); addToNpc(item.name); toggleDropdown() }}
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
            )
            }
        </>
    );
}

export default Npc1;