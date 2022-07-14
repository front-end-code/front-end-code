import React from "react";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';

const DesktopHeader = ({toggleDarkMode, isDarkMode}) => {
    const HeaderDark = "bg-gray-900 text-gray-100 hidden sm:block";
    const HeaderLight = "bg-blue-500 text-white hidden sm:block";
    const linkStyles = `${isDarkMode ? "header_menu__links_hoverOnDark" : "header_menu__links_hoverOnLight"} header_menu__links`;
    return(
            <section className={isDarkMode ? HeaderDark : HeaderLight}> 
                <section className='container mx-auto justify-between items-center px-2 flex'>
                    <a href='/'>Logo</a>
                    <nav className="flex items-center">
                        <a href='/' className={linkStyles}>main</a>
                        <a href='/about' className={linkStyles}>about</a>
                        <a href='/portfolio' className={linkStyles}>portfolio</a> 
                        <a href='/contact' className={linkStyles}>contact</a>
                        <section onClick={() => toggleDarkMode(true)} className="ml-4">
                            {isDarkMode ?
                                <LightModeOutlinedIcon style={{color: 'white'}} className="cursor-pointer" /> :
                                <ModeNightOutlinedIcon style={{color: 'white'}} className="cursor-pointer" />}
                        </section> 
                        
                        
                    </nav>
                </section>
            </section>
    )
};

export default DesktopHeader;
