import React from 'react';

const Footer = () => {
    return (
        <footer className="footer border border-t-[#33353F] border-b-[#33353F] border-l-transparent border-r-transparent text-white mb-1">
            <div className="flex justify-center py-5">
                {/* Copyright */}
                <span className="text-gray-700">
                    &copy; {new Date().getFullYear()} Vincent. All rights reserved.
                </span>
            </div>
        </footer>
    )
};

export default Footer;