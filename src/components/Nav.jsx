import { Link } from "react-router-dom";
function Nav() {
    return (
        <div className="flex justify-between navbar bg-base-100 shadow-sm">
            <div className="flex">
                <a className="btn btn-ghost text-xl"><Link to="/">LUCID</Link></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">遊戲介紹</Link></li>
                    <li><Link to="/world">世界觀</Link></li>
                    <li><a>藝廊</a></li>
                    <li><a>Fan Club</a></li>
                    <li><a>製作團隊</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;