"use client";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { CiDollar } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useRouter } from "next/router";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Page() {
  const router = useRouter();
  const tabs = [
    {
      route: "/",
      // icon: (
      //   <FaHome
      //     className={
      //       router.pathname === "/" ? styles.whiteIcon2 : styles.whiteIcon
      //     }
      //   />
      // ),
      name: <h3 className={`${styles.plutos_color}`}>plutos ONE</h3>,
    },
    {
      route: "/home",
      name: <span className="d-none d-md-block">Home</span>,
    },
    {
      route: "/dashboard/polls",
      name: <span className="d-none d-md-block">Polls</span>,
    },
    {
      route: "/dashboard/bills",
      name: <span className="d-none d-md-block">Pay Bills</span>,
    },
    {
      route: "/dashboard/vouchers",
      name: <span className="d-none d-md-block">Vouchers</span>,
    },
  ];
  return (
    <div>
      <div className={`fixed-top ${styles.nav_top_height}`}>
        <nav className=" p-0  navbar-light" role="navigation">
          <Nav className="w-100">
            <div className={`${styles.nav_bg} d-flex flex-row w-50 py-2 px-3`}>
              {tabs.map((tab, index) => (
                <NavItem key={`tab-${index}`}>
                  <Link href={tab.route} className="nav-link">
                    <div className="">
                      <div className={`${styles.nav_color}`}> {tab.name}</div>
                    </div>
                  </Link>
                </NavItem>
              ))}
            </div>
            <NavItem
              className={`${styles.nav_bg} d-flex flex-row justify-content-end w-50 py-2 px-3`}
            >
              <Link href="" className="nav-link">
                <div className={`${styles.main_circle}`}>
                  <div>
                    <img
                      src="https://www.plutos.one/images/new-home/coin_gold.svg"
                      alt=""
                      className={`${styles.p_logo}`}
                    />
                  </div>
                  <div>200 Coins</div>
                  <div>
                    <MdKeyboardArrowRight />
                  </div>
                </div>
              </Link>
              <div href="" className={`${styles.nav_color} nav-link d-flex d-none d-md-block`}>
                <div>Good Afternoon</div>
              </div>
              <Link
                href=""
                className={`${styles.nav_color} nav-link d-flex p-0 d-none d-md-block`}
              >
                <div>
                  <FaRegCircleUser size={40} />
                </div>
              </Link>
            </NavItem>
          </Nav>
        </nav>
      </div>
    </div>
  );
}
