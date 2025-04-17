function Garden({ isStuck }) {
    return (
        <>
            {/* 桌面版 */}
            <div className="hidden sm:flex">
                {/* 當 garden 接觸到 footer 時，isStuck 會改變。isStuck=false fixed 固定在螢幕左下；isStuck=true absolute 固定在父容器上方 96px */}
                <div className={`${isStuck ? 'absolute bottom-70' : 'fixed bottom-6'} left-12 size-fit z-50 transition-all duration-300`}>
                    {/* data-tip：hover 上的字 */}
                    <ul className="menu menu-horizontal bg-transparent rounded-box -mb-1 ">
                        <li>
                            <a className="tooltip hover:!bg-transparent" data-tip="風信子">
                                <img src="/images/flower1.png" alt="flowerShopIcon" />
                            </a>
                        </li>
                        <li >
                            <a className="tooltip hover:!bg-transparent" data-tip="雛菊">
                                <img src="/images/flower2.png" alt="flowerShopIcon" />
                            </a>
                        </li>

                    </ul>
                    <img className="w-full h-full object-contain" src="/images/garden.png" alt="flowerShopIcon" />
                </div>
            </div>

            {/* 手機版 */}
            <div className="sm:hidden">
                <div className="fixed bottom-6 w-full flex justify-center z-50">
                    {/* 當 garden 接觸到 footer 時，isStuck 會改變。isStuck=false fixed 固定在螢幕左下；isStuck=true absolute 固定在父容器上方 96px */}
                    <div className={`${isStuck ? 'absolute bottom-75' : 'fixed bottom-6'} size-fit transition-all duration-300`}>
                        {/* data-tip：hover 上的字 */}
                        <ul className="menu menu-horizontal bg-transparent rounded-box -mb-1 ">
                            <li>
                                <a className="tooltip hover:!bg-transparent" data-tip="風信子">
                                    <img src="/images/flower1.png" alt="flowerShopIcon" />
                                </a>
                            </li>
                            <li >
                                <a className="tooltip hover:!bg-transparent" data-tip="雛菊">
                                    <img src="/images/flower2.png" alt="flowerShopIcon" />
                                </a>
                            </li>

                        </ul>

                        <img className="w-full h-full object-contain" src="/images/garden.png" alt="flowerShopIcon" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Garden;
