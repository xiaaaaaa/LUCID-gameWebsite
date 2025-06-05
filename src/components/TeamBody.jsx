import DownfadeInDiv from "../motion/DownfadeInDiv";
import RightfadeInDiv from "../motion/RightfadeInDiv";
import LeftfadeInDiv from "../motion/LeftfadeInDiv";

function TeamBody() {
    return (
        <div className="relative">
            <div className="content-container">
                <div className="flex justify-center flex-col items-center">
                    <DownfadeInDiv className="pt-10">
                        <img className="hero w-[35vw] max-w-[500px] h-auto object-cover" src="/images/Mainlogo.png" alt="LUCID_MainLogo" />
                    </DownfadeInDiv>
                    <div className="mt-10 mb-40 ml-5">
                        
                        <LeftfadeInDiv className="flex sm:flex-row flex-col items-center">
                            <div className="itemPicFrame pl-2 max-h-[230px] max-w-[243px] ">
                                <img className="memberPic max-h-[230px] max-w-[243px] p-5" src="/images/XiaMember.png" alt="MembersPhoto" />
                            </div>
                            <div className="itemTextFrame h-[230px] hidden sm:block">
                                <h1 className="flex font-bold text-center pt-10 ">黑吉（ 程式設計 / 關卡設計 / 專案負責人 ）</h1>
                                <h1 className="flex pt-5 pr-12 text-left">負責管理團隊進度的大隊長，最縝密最有計畫性的大J人，同時也是我們的程式擔當。喜歡貓咪，也會畫一些美術作品，特別是風景。沒有他在進度就不會有這麼好的把關，落後的人請小心了，黑吉在看你了。</h1>
                                <a href="https://www.instagram.com/xia.is.drawing?utm_source=ig_web_button_share_sheet&igsh=N2Q5MXp3azFyY200" target="_blank" rel="noopener noreferrer" className="flex justify-end font-bold memberLink  pr-15 pt-5">IG @xia.is.drawing</a>
                            </div>
                            <div className="itemTextFrame_sm h-[262px] block sm:hidden">
                                <h1 className="flex font-bold text-center pt-5 ">黑吉（ 程式設計 / 關卡設計 / 專案負責人 ）</h1>
                                <h1 className="flex pt-5 pr-12 text-left">負責管理團隊進度的大隊長，最縝密最有計畫性的大J人，同時也是我們的程式擔當。喜歡貓咪，也會畫一些美術作品，特別是風景。沒有他在進度就不會有這麼好的把關，落後的人請小心了，黑吉在看你了。</h1>
                                <a href="https://www.instagram.com/xia.is.drawing?utm_source=ig_web_button_share_sheet&igsh=N2Q5MXp3azFyY200" target="_blank" rel="noopener noreferrer" className="flex justify-end font-bold memberLink  pr-15">IG @xia.is.drawing</a>
                            </div>
                        </LeftfadeInDiv>
                        <RightfadeInDiv className="flex sm:flex-row flex-col items-center">
                            <div className="itemPicFrame pl-2 max-h-[230px] max-w-[243px] ">
                                <img className="memberPic max-h-[230px] max-w-[243px] p-5" src="/images/XinMember.png" alt="MembersPhoto" />
                            </div>
                            <div className="itemTextFrame h-[230px] hidden sm:block">
                                <h1 className="flex font-bold text-center pt-10 ">阿心（ 程式設計 / 關卡設計 / 配樂音效 ）</h1>
                                <h1 className="flex pt-5 pr-12 text-left">程式擔當二柱子的其中一柱，總是很隨和、情緒價值給好給滿。喜歡狗狗，看到路上的狗勾會大叫想要衝過去撸。</h1>
                                <a href="https://www.youtube.com/@Alreaxin347/featured" target="_blank" rel="noopener noreferrer" className="flex justify-end font-bold memberLink pr-15 pt-5">YT @Alreaxin347</a>
                            </div>
                            <div className="itemTextFrame_sm h-[262px] block sm:hidden">
                                <h1 className="flex font-bold text-center pt-5 ">阿心（ 程式設計 / 關卡設計 / 配樂音效 ）</h1>
                                <h1 className="flex pt-5 pr-12 text-left">程式擔當二柱子的其中一柱，總是很隨和、情緒價值給好給滿。喜歡狗狗，看到路上的狗勾會大叫想要衝過去撸。</h1>
                                <a href="https://www.youtube.com/@Alreaxin347/featured" target="_blank" rel="noopener noreferrer" className="flex justify-end font-bold memberLink pr-15 pt-5">YT @Alreaxin347</a>
                            </div>
                        </RightfadeInDiv>
                        <LeftfadeInDiv className="flex sm:flex-row flex-col items-center">
                            <div className="itemPicFrame pl-2 max-h-[230px] max-w-[243px] ">
                                <img className="memberPic max-h-[230px] max-w-[243px] p-5" src="/images/ChingMember.png" alt="MembersPhoto" />
                            </div>
                            <div className="itemTextFrame h-[230px] hidden sm:block">
                                <h1 className="flex font-bold text-center pt-10 ">阿秋（ 影片剪輯 / 配樂音效 / 遊戲測試員 ）</h1>
                                <h1 className="flex pt-5 pr-12 text-left">遊戲預告片剪輯工作的主要負責人，也是我們的第一測試人員。是團隊中遊戲經驗最豐富的一位，懂迷因和很多梗，是很酷的喜歡金針菇的人。</h1>
                                <a href="https://www.instagram.com/ching.819_/?igsh=MXFmOWgzMnBlaDd5#" target="_blank" rel="noopener noreferrer" className="flex justify-end font-bold memberLink  pr-15 pt-5">IG @ching.819_</a>
                            </div>
                            <div className="itemTextFrame_sm h-[262px] block sm:hidden">
                                <h1 className="flex font-bold text-center pt-5 ">阿秋（ 影片剪輯 / 配樂音效 / 遊戲測試員 ）</h1>
                                <h1 className="flex pt-5 pr-12 text-left">遊戲預告片剪輯工作的主要負責人，也是我們的第一測試人員。是團隊中遊戲經驗最豐富的一位，懂迷因和很多梗，是很酷的喜歡金針菇的人。</h1>
                                <a href="https://www.instagram.com/ching.819_/?igsh=MXFmOWgzMnBlaDd5#" target="_blank" rel="noopener noreferrer" className="flex justify-end font-bold memberLink  pr-15 pt-5">IG @ching.819_</a>
                            </div>
                        </LeftfadeInDiv>
                        <RightfadeInDiv className="flex sm:flex-row flex-col items-center">
                            <div className="itemPicFrame pl-2 max-h-[230px] max-w-[243px]">
                                <img className="memberPic max-h-[230px] max-w-[243px] p-5" src="/images/GuiMember.png" alt="MembersPhoto" />
                            </div>
                            <div className="itemTextFrame h-[230px] hidden sm:block">
                                <h1 className="flex font-bold text-center pt-10 ">龜龜（ 遊戲美術 / 世界觀設計 / 角色設計 ）</h1>
                                <h1 className="flex pt-5 pr-12 text-left">LUCID世界觀的發想大腦，裡面塞著很多設定和想法。喜歡構思角色間的愛恨糾葛，目標是製造錯綜複雜的「貴圈真亂」人物關係圖，目前設計的最開心的角色是花店老闆。自認團隊定位是創意開心果，身分認同是内餡是紅豆泥的菠蘿麵包（很好吃的感覺）。</h1>
                                <a href="https://x.com/kame2_star" target="_blank" rel="noopener noreferrer" className="flex justify-end font-bold memberLink pr-15 pt-2">X @kame2_star</a>
                            </div>
                            <div className="itemTextFrame_sm h-[262px] block sm:hidden">
                                <h1 className="flex font-bold text-center pt-5 ">龜龜（ 遊戲美術 / 世界觀設計 / 角色設計 ）</h1>
                                <h1 className="flex pr-12 text-left">LUCID世界觀的發想大腦，裡面塞著很多設定和想法。喜歡構思角色間的愛恨糾葛，目標是製造錯綜複雜的「貴圈真亂」人物關係圖，目前設計的最開心的角色是花店老闆。自認團隊定位是創意開心果，身分認同是内餡是紅豆泥的菠蘿麵包（很好吃的感覺）。</h1>
                                <a href="https://x.com/kame2_star" target="_blank" rel="noopener noreferrer" className="flex justify-end font-bold memberLink pr-15 pt-2">X @kame2_star</a>
                            </div>
                        </RightfadeInDiv>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamBody;