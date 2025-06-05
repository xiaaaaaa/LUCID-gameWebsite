import { useEffect, useState } from "react";
import { useCharacterVotes, useUpdateCharacterVote } from '../react-query';
import { useSelector } from 'react-redux';
import { selectLightMode } from '../redux/colorSlice';

const characters = [
    { id: "lucian", name: "路西安", image: "/images/LucidOshi.png" },
    { id: "flour", name: "芙洛爾", image: "/images/FlourOshi.png" },
    { id: "boss", name: "花店老闆", image: "/images/BossOshi.png" },
    { id: "ajin", name: "阿鯨船長", image: "/images/AjinOshi.png" },
];

export default function OshiVote() {
    const lightMode = useSelector(selectLightMode);
    const [selectedId, setSelectedId] = useState(null);
    const { data: votes = {}, isLoading } = useCharacterVotes();
    const { mutate: updateVote } = useUpdateCharacterVote();


    useEffect(() => {
        const votedId = localStorage.getItem("votedId");
        if (votedId) {
            setSelectedId(votedId);
        }
    }, []);

    const handleVote = (id) => {
        // 如果點擊同一個角色，不做任何改變
        if (selectedId === id) {
            return;
        }

        try {
            // 如果之前有選擇其他角色，先減少該角色的票數
            if (selectedId) {
                updateVote({
                    roleName: selectedId,
                    newVoteNum: votes[selectedId] - 1
                });
            }

            // 增加新選擇角色的票數
            updateVote({
                roleName: id,
                newVoteNum: (votes[id] || 0) + 1
            });

            // 更新本地存儲和狀態
            localStorage.setItem("votedId", id);
            setSelectedId(id);
        } catch (error) {
            console.error('投票失敗:', error);
        }
    };

    return (
        <div className="flex flex-row text-left items-center justify-center mt-10">
            {characters.map((char) => (
                <div key={char.id} className="flex justify-center items-center mr-[20px]">
                    <div
                        className="h-[600px] pt-[440px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${char.image})` }}
                    >
                        <div className="flex flex-col justify-between items-start w-[250px] bg-[#020E10] rounded-b-[20px] p-5">
                            <div className="flex flex-row justify-between items-start w-[200px]">
                                <h1 className="text-xl font-bold text-white">{char.name}</h1>
                                <div className="flex flex-col items-center">
                                    <img
                                        src={
                                            selectedId === char.id
                                                ? lightMode 
                                                    ? "/images/art-heartIcon-fill-light.png"
                                                    : "/images/art-heartIcon-fill.png"
                                                : "/images/art-heartIcon.png"
                                        }
                                        alt="heart"
                                        className="w-[30px] h-[30px]"
                                    />
                                    <p className={`${selectedId === char.id 
                                        ? lightMode ? " text-[#E93969]" : " text-[#30B1BD]" 
                                        : " text-white"}`}>
                                        {isLoading ? '...' : (votes[char.id] || 0)}
                                    </p>
                                </div>
                            </div>
                            <button
                                className={`w-[200px] mt-[30px] rounded-[10px] font-bold border pt-2 pb-2 ${
                                    lightMode 
                                        ? "hover:border-[#E93969] hover:text-[#E93969]" 
                                        : "hover:border-[#30B1BD] hover:text-[#30B1BD]"
                                } ${
                                    selectedId === char.id
                                        ? lightMode 
                                            ? " text-[#E93969] border-[#E93969]"
                                            : " text-[#30B1BD] border-[#30B1BD]"
                                        : " text-white border-white"
                                }`}
                                onClick={() => handleVote(char.id)}
                            >
                                {selectedId === char.id ? "你選擇了他！" : "選擇他！"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
