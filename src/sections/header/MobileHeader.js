import React, {useState} from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const MobileHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleMenuFun = (param) => {
        setToggleMenu(param !== toggleMenu);
    }
    return(
        <section className="sm:hidden block relative">
            <section className="container h-10 px-4 flex justify-between items-center">
                <a href='/'>Logo</a>
                <section onClick={() => toggleMenuFun(true)}>
                    { toggleMenu ? <CloseOutlinedIcon /> : <MenuOutlinedIcon /> }
                </section>
            </section>
            <nav className={`${toggleMenu ? "translate-x-0" : "-translate-x-60"} w-60 bg-red-600 absolute h-screen top-10 z-50 transition duration-1000`}>
                <a href='/' className="">main</a>
                <a href='/about' className="">about</a>
                <a href='/portfolio' className="">portfolio</a> 
                <a href='/contact' className="">contact</a>
            </nav>
        </section>
    )
};

export default MobileHeader;