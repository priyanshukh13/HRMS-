import React, { useState } from 'react';

// 1. Accept props for mobile control
const Sidebar = ({ isOpen, closeSidebar }) => {
    const [activeItem, setActiveItem] = useState('Employees');

    const menuItems = [
        {
            name: 'Dashboard',
            icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /></svg>)
        },
        {
            name: 'Employees',
            icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>)
        },
        {
            name: 'Recognition',
            icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" /></svg>)
        },
        {
            name: 'Feed',
            icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" /></svg>)
        },
        {
            name: 'Chat',
            icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>)
        },
        {
            name: 'Events',
            icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" /></svg>)
        },
        {
            name: 'Profile',
            icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>)
        },
        {
            name: 'Settings',
            icon: (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg>)
        }
    ];

    return (
        <>
            {/* 2. Mobile Overlay (Darkens background when menu is open) */}
            <div 
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
                onClick={closeSidebar}
            ></div>

            {/* 3. Sidebar Container with Responsive Classes */}
            {/* -translate-x-full hides it on mobile by default */}
            {/* lg:translate-x-0 makes it always visible on desktop */}
            <div className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-sky-200 to-sky-300 flex flex-col shadow-lg z-50 transition-transform duration-300 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0`}
            >
                {/* Header Section */}
                <div className="p-6 border-b border-sky-300 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-500 mb-1">HRMS</h1>
                        <p className="text-xs text-gray-700">Human Resource Management System</p>
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={closeSidebar} className="lg:hidden text-gray-700">
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>

                {/* User Profile Section */}
                <div className="p-6 flex items-center space-x-3 border-b border-sky-300">
                    <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hiddenmW-full flex-shrink-0 border-4 border-white shadow-md">
                        <img src="https://via.placeholder.com/64" alt="User Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-semibold text-gray-900 truncate">Userxyz</h2>
                        <p className="text-sm text-gray-700">HR Manager</p>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 overflow-y-auto py-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveItem(item.name)}
                            className={`w-full flex items-center space-x-4 px-6 py-3 transition-all duration-200 ${activeItem === item.name
                                ? 'bg-sky-400 text-gray-900 shadow-md border-l-4 border-blue-600'
                                : 'text-gray-800 hover:bg-sky-300'
                                }`}
                        >
                            <div className={`flex-shrink-0 ${activeItem === item.name ? 'text-gray-900' : 'text-gray-700'}`}>
                                {item.icon}
                            </div>
                            <span className="text-base font-medium">{item.name}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;