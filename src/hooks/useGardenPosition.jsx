import { useState, useEffect } from 'react';

// 當 isStuck 更新時，會觸發 garden 組件重新渲染
export function useGardenPosition() {
    const [isStuck, setIsStuck] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 找到頁面中的 footer 元素
            const footer = document.querySelector('footer:last-of-type');
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();  // 取得 footer 的位置
            const windowHeight = window.innerHeight;  // 取得視窗高度
            const gardenBottomOffset = 24; // garden 底部的偏移量

            // 如果footer頂部 碰觸到 garden 底部時 => 表示要切換 garden 到 "absolute" (原本是 fixed)
            const shouldStick = footerRect.top <= windowHeight - gardenBottomOffset;
            setIsStuck(shouldStick);
        };

        // 監聽滾動事件
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 初始化检查

        // 移除監聽事件
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 返回狀態值
    return isStuck;
}