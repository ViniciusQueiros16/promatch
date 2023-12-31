import Logo from "@components/Logo";
import menu from "@config/menuContractors.json";
import ThemeSwitcher from "@layouts/components/ThemeSwitcher";
import SearchModal from "@layouts/partials/SearchModal";
import Link from "next/link";
import {
  Home,
  AccountTree,
  Work,
  Chat,
  Notifications,
  Person,
  Handshake,
} from "@mui/icons-material";

import { Badge } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { SessionContext } from "context/SessionContext";
import Logout from "../Logout";
import NotificationsDisplay from "../NotificationsDisplay";

const HomeHeader = () => {
  const session = useContext(SessionContext);

  const { main } = menu;

  const [showMenu, setShowMenu] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const router = useRouter();

  //stop scrolling when nav is open
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [showMenu]);

  const icons = {
    Home,
    AccountTree,
    Work,
    Chat,
    Notifications,
    Person,
    Handshake,
  };

  const toggleNotifications = () => {
    setShowNotifications((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar container px-1 sm:px-8">
        <div className="order-0">
          <Logo />
        </div>
        <div className="flex items-center space-x-4 xl:space-x-8">
          <div
            className={`collapse-menu ${
              !showMenu && "translate-x-full"
            } lg:flex lg:translate-x-0`}
          >
            <button
              className="absolute right-6 top-11 lg:hidden"
              onClick={() => setShowMenu(false)}
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            </button>
            <ul
              id="nav-menu"
              className="navbar-nav w-full md:w-auto md:space-x-1 lg:flex xl:space-x-2"
            >
              {main.map((menu, i) => (
                <React.Fragment key={`menu-${i}`}>
                  {menu.hasChildren ? (
                    <li className="nav-item nav-dropdown group relative">
                      <span
                        className={`nav-link ${
                          menu.children
                            .map((c) => c.url)
                            .includes(router.asPath) && "active"
                        } inline-flex items-center`}
                      >
                        {menu.icon === "Person" && session.user?.avatar ? (
                          <img
                            src={session.user.avatar}
                            alt="User Avatar"
                            className=" h-8 w-8 cursor-pointer rounded-full"
                          />
                        ) : (
                          React.createElement(icons[menu.icon])
                        )}

                        <span className="pl-2">{menu.name}</span>
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <ul className="nav-dropdown-list hidden transition-all duration-300 group-hover:top-[46px] group-hover:block md:invisible md:absolute md:top-[60px] md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                        {menu.children.map((child, i) => (
                          <li
                            className="nav-dropdown-item"
                            key={`children-${i}`}
                          >
                            {child.name === "Exit" ? (
                              <span
                                className="nav-dropdown-link block cursor-pointer"
                                onClick={() => setLogoutModal(true)}
                              >
                                {child.name}
                              </span>
                            ) : (
                              <Link
                                href={child.url}
                                className={`nav-dropdown-link block ${
                                  router.asPath === child.url && "active"
                                }`}
                              >
                                {child.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        href={menu.url}
                        className={`nav-link block ${
                          router.asPath === menu.url && "active"
                        }`}
                      >
                        {menu.icon === "Person" && session.user?.avatar ? (
                          <img
                            src={session.user.avatar}
                            alt="User Avatar"
                            className=" h-8 w-8 cursor-pointer rounded-full"
                          />
                        ) : (
                          React.createElement(icons[menu.icon])
                        )}
                        <span className="pl-2">{menu.name}</span>
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            {logoutModal && (
              <Logout showModal={logoutModal} setShowModal={setLogoutModal} />
            )}
          </div>

          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary p-2.5 text-xl text-white"
            onClick={toggleNotifications}
          >
            <div className="relative">
              <Badge badgeContent={4} color="primary">
                <Notifications />
              </Badge>
            </div>
          </div>

          <div
            className="search-icon"
            onClick={() => {
              setSearchModal(true);
            }}
          >
            <IoSearch />
          </div>
          <ThemeSwitcher />

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white lg:hidden"
          >
            {showMenu ? (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            )}
          </button>
        </div>
        <NotificationsDisplay
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
        />
        <SearchModal
          searchModal={searchModal}
          setSearchModal={setSearchModal}
        />
      </nav>
      {showMenu && (
        <div className="header-backdrop absolute left-0 top-0 h-[100vh] w-full bg-black/50 lg:hidden"></div>
      )}
    </header>
  );
};
export default HomeHeader;
