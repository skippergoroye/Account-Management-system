import userIcon from "../assets/icons/user-icon.svg"
import lock from "../assets/icons/lock.svg"
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Settings() {
    const location = useLocation()
    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (active) => {
        setActiveLink(active);
    };

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div className="bg-[#F9FAFB] flex gap-8 p-10">
            <div className="flex flex-col gap-6 w-[240px]">
                <h3 className="text-gray-900 font-medium text-base">General</h3>

                <ul className="flex flex-col">
                    <li>
                        <Link to={'/settings/account-settings'} onClick={() => handleLinkClick('/settings/account-settings')} className={`flex items-center gap-4 px-4 py-2.5 rounded-md cursor-pointer ${activeLink === '/settings/account-settings' ? "bg-zinc-200" : "bg-transparent"}`}>
                            <img src={userIcon} alt="" />
                            <span className="text-zinc-700 text-sm">Account Details</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/settings/security-settings'} onClick={() => handleLinkClick('/settings/security-settings')} className={`flex items-center gap-4 px-4 py-2.5 rounded-md cursor-pointer ${activeLink === '/settings/security-settings' ? "bg-zinc-200" : "bg-transparent"}`}>
                            <img src={lock} alt="" />
                            <span className="text-zinc-700 text-sm">Security</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1 bg-white shadow rounded-md px-10 py-8">
                <Outlet />
            </div>
        </div>
    )
}

export default Settings