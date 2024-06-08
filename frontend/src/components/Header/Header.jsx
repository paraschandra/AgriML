import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
            <nav className="bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-md border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <p className="text-gray-600 ml-3 text-3xl font-bold">
                            Agri<span className="text-emerald-600">ML</span>
                        </p>
                    </Link>

                    <div
                        className="hidden justify-between items-center w-full sm:mr-4 lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-emerald-600 font-semibold" : "text-gray-600"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/crops"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-emerald-600 font-semibold" : "text-gray-600"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
                                    }
                                >
                                    Crops
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/fertilizers"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-emerald-600 font-semibold" : "text-gray-600"} 
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-emerald-600 lg:p-0`
                                    }
                                >
                                    Fertilizers
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Header