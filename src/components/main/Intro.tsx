import React from "react";
import "../../styles/intro.css";
import user from "../../img/user.png";
import book from "../../img/book.png";
import exercise from "../../img/exercise.png";
import like from "../../img/like.png";
import palette from "../../img/palette.png";
import plan from "../../img/plan.png";
import route from "../../img/route.png";
import trophy from "../../img/trophy.png";
import clock from "../../img/clock.png";

function Intro() {
  return (
    <>
      <div className="intro-container">
        <div className="box">
          <div className="content">
            <img src={user} alt="user" />
            <p>시작하시려면 가입해주세요!</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={plan} alt="plan" />
            <p>
              이루고 싶은 일이 있나요? <br /> 지금 바로 계획하세요.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={exercise} alt="exercise" />
            <img src={clock} alt="clock" />
            <img src={book} alt="book" />
            <p>
              어떤 습관을 들이길 원하시나요? <br /> 당신에게 필요한 프리셋이
              준비되어있습니다.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={route} alt="route" />
            <p>
              진행 상황을 확인해보세요. <br />
              목표가 얼마 안남았습니다!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={trophy} alt="trophy" />
            <p>
              목표를 달성하고 트로피를 얻어보세요. <br />
              목표 달성을 기념해보세요.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={palette} alt="palette" />
            <p>트로피에 당신이 디자인한 엠블렘을 달아보세요.</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <img src={like} alt="like" />
            <p>당신은 할 수 있습니다. 화이팅!!!</p>
          </div>
        </div>
      </div>
      {/* <div>
        아이콘 제작자{" "}
        <a href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/kr/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
    </>
  );
}

export default Intro;
