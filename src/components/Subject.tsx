import React from "react";

const Subject: React.FC = () => {
    return (
        <div className="header">
            <div className="subject">Habit</div>
            <div className="button">
                <button className="plusButton" >Plus</button>
                <button className="settingButton" >Setting</button>
            </div>
        </div>
    );
}

export default Subject;