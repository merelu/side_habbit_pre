import React from "react";
import "../css/Header.css";
// const MenuItem = ({active, children, to}) => (
//     <div className="menu-item">
//         {children}
//     </div>
// )

const Header: React.FC = () => {
  return (
    <div className="Header_grid">
      <div className="title">Habit</div>
      <div className="menu">
        {/* <MenuItem>로그인</MenuItem>
        <MenuItem>습관추가</MenuItem>
        <MenuItem>설정</MenuItem> */}
        <div className="menu-item">로그인</div>
        <div className="menu-item">습관추가</div>
        <div className="menu-item">설정</div>
      </div>
    </div>
  );
};

export default Header;
