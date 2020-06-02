import React from "react";

const Calendar: React.FC = () => {
    //id생성하기위함 
    return (
        <div className="callender">
            <div className="month">
                <ul>
                    <li className="prev">&#10094;</li>
                    <li className="next">&#10095;</li>
                    <li>
                        June<br />
                        <span >2020</span>
                    </li>
                </ul>
            </div>

            <div className="days">
                
            </div>
        </div>
    );
}
/*
const SetCalendarDate = () => {
    let calHtml: string = "";
    const today: Date = new Date();
    const dayOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const setDate: Date = new Date(today.getFullYear(), today.getMonth() - 1, 1);

    //getDay weekday (0-6)
    const firstDayName: number = setDate.getDay();

    const lastday: number = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    //preMonthLastDay
    const preLastDay: number = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

    //이번달 날짜 개수 세기 위한 변수
    let startDayCount: number = 1;
    let lastDayCount: number = 1;

    //week
    for (let i: number = 0; i < 7; i++) {
        //dayname
        for (let j: number = 0; j < 7; j++) {
            if (i = 0) {
                calHtml += `
                <div class='callendar_day_name horizonMargin>
                <span>${dayOfWeek[j]}</span>
                </div>`
            }
            //1주차 이번달 시작요일 이전일때
            else if (i == 1 && j < firstDayName) {
                if (j == 0) {
                    calHtml += `
                    <div class='calendar_day horizonMargin verticleMargin'>
                    <span>${(preLastDay - (firstDayName - 1) + j)}</span><span></span>
                    </div>`;
                } else if (j == 6) {
                    calHtml += `
                    <div class='calendar_day verticleMargin'>
                    <span>${(preLastDay - (firstDayName - 1) + j)}</span><span></span>
                    </div>`;
                } else {
                    calHtml += `
                    <div class='calendar_day horizonMargin verticleMargin'>
                    <span>${(preLastDay - (firstDayName - 1) + j)}</span><span></span>
                    </div>`;
                }
            }
            //1주차 이번달 시작 요일 일때
            else if (i == 0 && j == firstDayName) {
                if (j == 0) {
                    calHtml += `
                    <div class ='calendar_day horizonMargin verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                } else if (j == 6) {
                    calHtml += `
                    <div class ='calendar_day verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                } else {
                    calHtml += `
                    <div class ='calendar_day horizonMargin verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                }
                startDayCount++;
            }
            //1주차 이번달 시작 요일 이후일때
            else if (i == 0 && j > firstDayName) {
                if (j == 0) {
                    calHtml += `
                    <div class ='calendar_day horizonMargin verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                } else if (j == 6) {
                    calHtml += `
                    <div class ='calendar_day verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                } else {
                    calHtml += `
                    <div class ='calendar_day horizonMargin verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                }
                startDayCount++;
            }
            //이번달 마지막날까지
            else if (i > 0 && startDayCount <= lastday) {
                if (j == 0) {
                    calHtml += `
                    <div class ='calendar_day horizonMargin verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                } else if (j == 6) {
                    calHtml += `
                    <div class ='calendar_day verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                } else {
                    calHtml += `
                    <div class ='calendar_day horizonMargin verticleMargin'>
                    <span>${startDayCount}</span>
                    <span id='${today.getFullYear()}${setFixMonth(today.getMonth())}${setFixDay(startDayCount)}'></span>
                    </div>`;
                }
                startDayCount++;
            }
            // 이번 달의 마지막 날 이후일 때
            else if (startDayCount > lastday) {
                if (j == 0) {
                    calHtml += `
                    <div class = 'calendar_day horizonMargin verticleMargin'>
                    <span>${lastDayCount}</span>
                    </div>`;
                } else if (j == 6) {
                    calHtml += `
                    <div class = 'calendar_day horizonMargin'>
                    <span>${lastDayCount}</span>
                    </div>`;
                } else {
                    calHtml += `
                    <div class = 'calendar_day horizonMargin verticleMargin'>
                    <span>${lastDayCount}</span>
                    </div>`;
                }
                lastDayCount++;
            }
        }
    }
}

const setFixDay = (num: number): String => {
    let fixNum: string = "";
    if (num <= 10) {
        fixNum = "0" + (num - 1).toString();
    } else {
        fixNum = (num - 1).toString();
    }
    return fixNum;
}
//id생성하기위함 1~9 ->01 ~ 09
const setFixMonth = (num: number): String => {

    let fixNum: string = "";
    if (num + 1 < 10) {
        fixNum = "0" + (num + 1).toString();
    } else {
        fixNum = (num + 1).toString();
    }
    return (fixNum);
}
*/

export default Calendar;