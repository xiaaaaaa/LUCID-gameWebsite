import { useEffect, useState } from "react";

const characters = [
    { id: "lucian", name: "路西安", image: "/images/LucidOshi.png" },
    { id: "flour", name: "芙洛爾", image: "/images/FlourOshi.png" },
    { id: "boss", name: "花店老闆", image: "/images/BossOshi.png" },
    { id: "ajin", name: "阿鯨船長", image: "/images/AjinOshi.png" },
];

export default function OshiVote() {
    const [votes, setVotes] = useState({});
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const storedVotes = JSON.parse(localStorage.getItem("votes")) || {};
        const votedId = localStorage.getItem("votedId");
        const updatedVotes = { ...storedVotes };

        characters.forEach((char) => {
            if (updatedVotes[char.id] === undefined) {
                updatedVotes[char.id] = 0;
            }
        });

        localStorage.setItem("votes", JSON.stringify(updatedVotes));
        setVotes(updatedVotes);
        if (votedId) {
            setSelectedId(votedId);
        }
    }, []);

    const handleVote = (id) => {
        const newVotes = { ...votes, [id]: votes[id] + 1 };
        localStorage.setItem("votes", JSON.stringify(newVotes));
        localStorage.setItem("votedId", id); // 記住選了誰
        setVotes(newVotes);
        setSelectedId(id);
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
                                                ? "/images/art-heartIcon-fill.png"
                                                : "/images/art-heartIcon.png"
                                        }
                                        alt="heart"
                                        className="w-[30px] h-[30px]"
                                    />
                                    <p className={`${selectedId === char.id
                                        ? " text-[#30B1BD]"
                                        : " text-white"
                                        }`}>{votes[char.id] ?? 0}</p>
                                </div>
                            </div>
                            <button
                                className={`w-[200px] mt-[30px] rounded-[10px] font-bold border pt-2 pb-2 hover:border-[#30B1BD] hover:text-[#30B1BD] ${selectedId === char.id
                                    ? " text-[#30B1BD] border-[#30B1BD]"
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
