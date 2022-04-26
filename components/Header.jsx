import React, { useState } from "react";

import { useSession, signOut, getSession } from "next-auth/react";

import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/image/logo.svg";
import styled from "styled-components";
import Link from "next/link";

import { Row, Col } from "antd";

// export async function getServerSideProps(ctx) {

//     props: {
//       session,
//     },
//   };
// }

const Header = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const [keyWord, setKeyWord] = useState("");
  console.log(session);
  const Header = styled.div`
    background: linear-gradient(180deg, #0c0c0c 20%, #0c0c0c50 85%, #0c0c0c00);
  `;

  const handleSearch = () => {
    if (keyWord !== "") {
      router.push(`/timkiem/${keyWord}`);
    }
  };

  const handleInputSearch = (e) => {
    setKeyWord(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (keyWord !== "") {
      router.push(`/timkiem/${keyWord}`);
    }
  };

  return (
    <div className="flex justify-between fixed h-16 w-full top-0 text-white px-5 z-20 bg-gradient-to-b from-bg_black to-[#0c0c0c00]">
      <Link href="/">
        <div className="relative w-[180] h-[80] ">
          <Image
            src={logo}
            width="180"
            height="80"
            className="cursor-pointer"
          />
        </div>
      </Link>
      <ul className="flex justify-around items-center ">
        <Link href="/">
          <li className="group px-3 py-2 mr-4 text-text_gray hover:bg-primary hover:text-white rounded-sm cursor-pointer text-base relative">
            Trang chủ
            <i className="bx bxs-down-arrow text-xs scale-75 ml-1"> </i>{" "}
          </li>
        </Link>
        <Link href="/tatcaphim">
          <li className="group px-3 py-2  mr-4 text-text_gray hover:bg-primary hover:text-white rounded-sm cursor-pointer text-base relative">
            Tất cả phim
            <i className="bx bxs-down-arrow text-xs scale-75 ml-1"> </i>
          </li>
        </Link>
        <li className="group px-3 py-2  mr-4 text-text_gray hover:bg-primary hover:text-white rounded-sm cursor-pointer text-base relative">
          Tin tức<i className="bx bxs-down-arrow text-xs scale-75 ml-1"> </i>
        </li>
        <li className="group px-5 py-2  mr-4 text-text_gray hover:bg-primary hover:text-white rounded-sm cursor-pointer text-base relative">
          Lịch sử xem
          <i className="bx bxs-down-arrow text-xs scale-75 ml-1"> </i>
        </li>
      </ul>
      <div className="header__right flex justify-end items-center">
        <div className="group header__right__search-box border-b-2 border-text_gray  mr-5 flex justify-start items-center">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="outline-none bg-transparent px-2 py-1 font-light text-sm"
              placeholder="Nhập từ khóa"
              value={keyWord}
              onChange={handleInputSearch}
              autoFocus
            />
          </form>

          <i
            className="bx bx-search-alt-2 text-xl font-medium text-primary cursor-pointer"
            onClick={handleSearch}
          ></i>
        </div>
        <div className="group header__right__account flex justify-start items-center text-sm cursor-pointer relative px-3 py-2">
          <i className="bx bx-user-circle text-primary text-xl font-medium  cursor-pointer mr-1"></i>
          Tài Khoản
          <i className="bx bxs-down-arrow text-xs scale-75 ml-1"> </i>
          <div
            className="hidden nav-bar__item__menu absolute top-11 w-max h-max right-0 bg-bg_black px-8 py-2 group-hover:block after:content-[''] after:h-1 after:w-full after:bg-transparent after:-top-1 after:absolute after:right-0 before:content-[''] before:bg-transparent before:-top-4 before:absolute before:left-10 before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-bg_black min-w-100"
            style={{ minWidth: "11rem" }}
          >
            {session === undefined || session === null ? (
              <Link href="/login">
                <div className="hover:text-primary my-3 cursor-pointer">
                  Đăng Nhập
                </div>
              </Link>
            ) : (
              <div className="hover:text-primary my-3 cursor-pointer">
                {session.user.name || ""}
              </div>
            )}

            <div className="hover:text-primary my-3 cursor-pointer">
              Yêu Thích
            </div>
            <div className="hover:text-primary my-3cursor-pointer">
              Đang Xem
            </div>
            {session === undefined || session === null ? (
              ""
            ) : (
              <div
                className="hover:text-primary my-3 cursor-pointer"
                onClick={() => signOut()}
              >
                Đăng Xuất
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
