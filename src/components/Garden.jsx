function Garden() {
    return (
        <div className="fixed bottom-6 left-12 size-fit z-[9999] ">
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

            <img className="w-full h-full  object-contain" src="/images/garden.png" alt="flowerShopIcon" />
        </div>
    );
}

export default Garden;

