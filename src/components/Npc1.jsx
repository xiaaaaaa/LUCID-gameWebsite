import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, reduceCartItems } from "../redux/cartSlice";
import { selectGetFlowerPeople, addGetFlowerLists } from "../redux/getFlowerSlice";

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
            name: "花店老闆",
            flower: flowerName,
        }))
    }

    return (
        <>
            {getFlowerPeople.some(item => item.name === "花店老闆") ? (
                <div className="tooltip tooltip-right">
                    <div className="tooltip-content npc-tooltip">
                        <div className="animate-bounce -rotate-0 text-2xl font-black ">
                            謝謝你送我{getFlowerPeople.find(item => item.name === "花店老闆")?.flower}!
                        </div>
                    </div>
                    <button
                        className="h-[60px] w-[50px] md:h-[100px] md:w-[90px] hover:scale-110"
                        onClick={toggleDropdown}
                    >
                        <img
                            className="h-[60px] w-[50px] md:h-full md:w-full object-cover "
                            src="/images/npc-owner.png"
                            alt="花店老闆"
                        />
                    </button>
                </div>
            ) : (
                <div className="dropdown dropdown-start">
                    <button
                        className=" h-[60px] w-[50px] md:h-[100px] md:w-[90px] hover:scale-110"
                        onClick={toggleDropdown}
                    >
                        <img
                            className="h-[60px] w-[50px] md:h-full md:w-full object-cover "
                            src="/images/npc-owner.png"
                            alt="花店老闆"
                        />
                    </button>

                    {isOpen && (
                        <ul className="dropdown-content menu z-1 w-52 p-2 ">
                            {cartItems.length === 0 && <p className='npc-diolog py-3'>哪裡有花可以送?</p>}
                            {cartItems.length > 0 &&
                                <>
                                    {cartItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                className="btn npc-choose mb-1.5"
                                                onClick={() => { dispatch(reduceCartItems(item.id)); addToNpc(item.name); toggleDropdown() }}
                                            >
                                                送一朵{item.name}
                                            </button>
                                        </li>
                                    ))}
                                    <li><button className="btn npc-choose " onClick={toggleDropdown}>不送了</button></li>
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