import React from "react";

const Hero = ({isDarkMode}) => {
    const heroDark = "bg-gray-800 text-gray-100";
    const heroLight = "bg-blue-400 text-white";

    return(
        <section className={`${isDarkMode ? heroDark : heroLight}`}>
            <section className="container mx-auto">
                <h1>Hero section</h1>
            </section>
        </section>
    )
};

export default Hero;
  