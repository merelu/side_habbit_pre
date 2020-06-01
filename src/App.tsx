import React from "react";
import "./App.css";
import "./temp/callenderStyle.css"
import "./temp/style.css"
import { History } from "history";

interface AppProps {
  history?: History;
}

const Subject = ({ history }: AppProps) => {
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

const Callender = ({ history }: AppProps) => {
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

      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul className="days">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li><span className="active">10</span></li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
      </ul>
    </div>
  );
}

const HabitList = ({ history }: AppProps) => {
  return (
    <div className = "habbitList">
      hahahah
    </div>
  );
}

const App = ({ history }: AppProps) => {
  return (
    <div className="App">
      <Subject></Subject>
      <div className="main">
        <Callender></Callender>
        <HabitList></HabitList>
      </div>
    </div>
  );
};

export default App;
