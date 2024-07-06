import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#313552] mt-10">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Indian<strong>Eats</strong></span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4 hover:underline">Indian<strong>Eats</strong></li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline" target='_blank'>Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/jk-codes642" className="hover:underline" target='_blank'>Github</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/jay-kalani-a7017a2b4/" className="hover:underline" target='_blank'>LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center">
                        {/* <span className="text-sm sm:text-center text-gray-400">© 2024 <a href="/" className="hover:underline">EZ Sports™</a>. All Rights Reserved.</span> */}
                    </div>
                </div>
                <div className="text-center">
                        <span className="text-sm sm:text-center text-gray-400">Made by <a href="https://www.linkedin.com/in/jay-kalani-a7017a2b4/" className="hover:underline" target='_blank'>Jay Kalani</a> with ❤️</span>
                    </div>
            </div>
        </footer>
    );
}

export default Footer;
