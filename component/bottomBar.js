"use client";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useRouter } from "next/router";
import { LiaPollSolid } from "react-icons/lia";
import { FiHome } from "react-icons/fi";

export default function Page() {
  const router = useRouter();
  const tabs = [
    {
      route: "/",
      image: (
        <img
          // className="text-center"
          src="https://www.plutos.one/images/svg/home_active.svg"
        />
      ),
      name: <p className={`${styles.menu_name}`}>home</p>,
    },
    {
      route: "/home",
      image: <LiaPollSolid size={22} className={  router.pathname === "/" ? styles.whiteIcons2 : styles.whiteIcons} />,
      name: <p className={`${styles.menu_name} ms-2`}>Polls</p>,
    },
    {
      route: "/dashboard/dashboard",
      image: (
        <img
        className={  router.pathname === "/" ? styles.whiteIcon2 : styles.whiteIcon}
          src="https://www.plutos.one/images/svg/paybil_inactive.svg"
        />
      ),
      name: <p className={`${styles.menu_name}`}>Pay Bills</p>,
    },
    {
      route: "/Home",
      image: (
        <img
        className={  router.pathname === "/" ? styles.whiteIcon2 : styles.whiteIcon}
          src="	https://www.plutos.one/images/svg/voucher_inactive.svg"
        />
      ),
      name: <p className={`${styles.menu_name}`}>Vouchers</p>,
    },
    {
      route: "/Home",
      image: <FaUser className={  router.pathname === "/" ? styles.whiteIcons2 : styles.whiteIcons} />,
      name: <p className={`${styles.menu_name} ms-2`}>Profile</p>,
    },
  ];

  
  return (
    <div className="container-fluid w-100 p-0 d-md-none fixed-bottom">
      <div className="row">
        <div className="col">
          <nav className="p-0 navbar-light" role="navigation">
            <Nav className="w-100">
              <div
                className={`${styles.nav_bg_bottom} d-flex flex-row justify-content-around align-item-center w-100 `}
              >
                {tabs.map((tab, index) => (
                  <NavItem key={`tab-${index}`}>
                    <Link
                      href={tab.route}
                      className={`${styles.nav_link} nav-link`}
                    >
                      <div className="row d-flex flex-column justify-content-center align-items-center">
                        <div className="text-center"> {tab.image}</div>
                        <div className="text-center"> {tab.name}</div>
                      </div>
                    </Link>
                  </NavItem>
                ))}
              </div>
            </Nav>
          </nav>
        </div>
      </div>
    </div>
  );
}
