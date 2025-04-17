import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, reduceCartItems } from "../redux/cartSlice";
import { selectGetFlowerPeople, addGetFlowerLists } from "../redux/getFlowerSlice";

function Npc2() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const getFlowerPeople = useSelector(selectGetFlowerPeople);
    const [isOpen, setIsOpen] = useState(false); // 新增 state 來控制清單開關

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState); // 切換開關狀態
    };

    const addToNpc = (flowerName, e) => {
        dispatch(addGetFlowerLists({
            name: "police",
            flower: flowerName,
        }))
    }

    return (
        <>
            {getFlowerPeople.some(item => item.name === "police") ? (
                <div className="tooltip tooltip-left">
                    <div className="tooltip-content">
                        <div className="animate-bounce text-red-400 -rotate-0 text-2xl font-black">
                            謝謝你送我{getFlowerPeople.find(item => item.name === "police")?.flower}!
                        </div>
                    </div>
                    <button
                        className="h-[70px] w-[70px] md:h-[110px] md:w-[80px]"
                        onClick={toggleDropdown}
                    >
                        <img
                            className="h-[70px] w-[50px] md:h-full md:w-full object-cover "
                            src="/images/npc-police.png"
                            alt="police"
                        />
                    </button>
                </div>
            ) : (
                <div className="dropdown dropdown-end">
                    <button
                        className=" h-[70px] w-[70px] md:h-[110px] md:w-[80px]"
                        onClick={toggleDropdown}
                    >
                        <img
                            className="h-[70px] w-[50px] md:h-full md:w-full object-cover "
                            src="/images/npc-police.png"
                            alt="police"
                        />
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

export default Npc2;