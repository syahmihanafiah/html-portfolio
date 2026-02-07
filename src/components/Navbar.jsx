import React from 'react'  
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';    

const Navbar = ({darkMode, toggleDarkMode}) => {
    const[activeSection,setActiveSection] = useState('home');
    const[isMenuOpen,setIsMenuOpen] = useState(false);

    const navItems = [
        {name:'Home', href:'#home'},
        {name:'About', href:'#about'},
        {name:'Skills', href:'#skills'},
        {name:'Projects', href:'#projects'},
        {name:'Contact', href:'#contact'},
    ];

    const lightColors = {
        navBg: 'bg-linear-to-br from-orange-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary   : 'text-gray-800',
        textHover: 'text-orange-500',
        textActive: 'text-orange-600',   
        indicator: 'from-orange-500 to-amber-500',   
        button: 'from-orange-500 to-amber-500',   
    };

        const darkColors = {
        navBg: 'bg-linear-to-br from-gray-700 to-black',
        textPrimary: 'text-white',
        textSecondary   : 'text-gray-300',
        textHover: 'text-orange-400',   
        textActive: 'text-orange-400',   
        indicator: 'from-orange-500 to-amber-500',   
        button: 'from-orange-500 to-amber-500',   
    };
    
    const colors = darkMode ? darkColors : lightColors;

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };   
  return (
    <div className = "flex justify-center w-full fixed z-50 mt-4">
        <motion.nav 
        initial= {{ y: -100 }}
        animate= {{y:0}}
        transition= {{duration:0.5}}
        className = {`flex items-center justify-center ${colors.navBg}
            backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
                <div className = "flex items-center justify-between w-full space-x-6 lg:space-x-8">
                    {/* Logo */}
                    <motion.a 
                    href="/"
                    whileHover={{scale: 1.05}}
                    className = "flex items-center space-x-2">
                            <span 
                               className = {`text-xl font-bold ${colors.textPrimary}`}>
                                Portfolio
                                <span className="text-orange-500">.</span>                                        
                            </span>
                    </motion.a> 
                    {/* Navigation Items */}
                    <div className = "lg:flex items-center space-x-6 hidden">
                        {navItems.map((item) => (
                            <a
                            key = {item.name}
                            href = {item.href}
                            onClick = {() => handleNavClick(item.name)}
                            className = "relative">
                             <motion.span 
                             className = {`font-medium transition-colors duration-300
                             ${
                                activeSection === item.name.toLowerCase() 
                                ? colors.textActive 
                                : `${colors.textSecondary} hover:text-orange-500`
                            }` }
                                whileHover = {{ scale: 1.05}}
                                whileTap = {{ scale: 0.95}}>
                                {item.name}
                             </motion.span> 
                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div 
                                        layoutId = "navbar-indicator"
                                        className = {`absolute -bottom-1 left-0 
                                            right-0 h-0.5 bg-linear-to-r rounded-full 
                                            ${colors.indicator}`  }
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                    <div className = "flex items-center space-x-2" >
                        {/* Dark Mode Toggle Button */}
                        <motion.button
                        whileHover = {{ scale: 1.1}}
                        whileTap = {{ scale: 0.9}}
                        onClick={toggleDarkMode}
                        aria-label = {darkMode 
                            ? 'Switch to light mode' 
                            : 'Switch to dark mode' }>
                                {darkMode ? (
                                    <Sun className = "w-5 h-5 text-yellow-300"/>
                                ) : (
                                    <Moon className = "w-5 h-5 text-gray-700"/>
                                )}                        
                        </motion.button>
                        <motion.a
                        href  ="#contact"
                        whileHover = {{ scale: 1.05}}  
                        whileTap = {{ scale: 0.95}}    
                        className={`hidden lg:block px-6 py-2 font-semibold
                            rounded-full bg-linear-to-r ${colors.button}
                            text-white shadow-lg hover:shadow-lg transition-shadow`}>
                                Hire Me
                        </motion.a> 
                    </div>    
                </div>
        </motion.nav>
    </div>
  )
}

export default Navbar