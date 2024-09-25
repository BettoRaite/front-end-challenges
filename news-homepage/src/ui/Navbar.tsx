"use client";
import websiteLogo from "@/public/images/logo.svg";
import menuOpenIcon from "@/public/images/icon-menu.svg";
import menuCloseIcon from "@/public/images/icon-menu-close.svg";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => setIsOpen(!isOpen);

  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const link = firstLinkRef.current;
    if (isOpen && link) {
      link.focus();
    } else if (!isOpen && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  }, [isOpen]);

  const routes = ["home", "new", "popular", "trending", "categories"];

  const navLinks = (
    <ul className="flex flex-col ml-6 md:flex-row">
      {routes.map((item, index) => (
        <li key={index}>
          <Link
            ref={index === 0 ? firstLinkRef : null}
            className="capitalize text-dark-grayish-blue hover:text-soft-red transition-all duration-100 md:text-sm p-4"
            href={`/${item === "home" ? "" : item}`}
            tabIndex={isOpen ? 0 : -1}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className="flex justify-between py-6 lg:mt-16 lg:mb-6"
      aria-label="Main Navigation"
    >
      <Image src={websiteLogo} height={30} alt="W dot logo" />
      <button
        ref={toggleButtonRef}
        type="button"
        className="cursor-pointer md:hidden"
        onClick={handleOpenMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Image
          src={isOpen ? menuCloseIcon : menuOpenIcon}
          height={15}
          alt={isOpen ? "Close navigation menu" : "Open navigation menu"}
        />
      </button>

      <div
        id="mobile-menu"
        role="menu"
        className={clsx(
          "bg-off-white w-8/12 fixed right-0 top-0 bottom-0 z-20 transition-transform duration-300 ease-in-out transform",
          {
            "translate-x-0": isOpen,
            "translate-x-full -z-10": !isOpen,
          }
        )}
      >
        <div className="mt-6 mb-16 px-4 flex justify-end">
          <button
            type="button"
            onClick={handleOpenMenu}
            aria-label="Close navigation menu"
          >
            <Image
              src={menuCloseIcon}
              height={27}
              alt="Close navigation menu"
            />
          </button>
        </div>

        {navLinks}
      </div>
      <div className="hidden md:block">{navLinks}</div>
    </nav>
  );
}
