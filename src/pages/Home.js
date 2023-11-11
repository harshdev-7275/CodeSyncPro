import React from 'react';

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/code-sync.png" alt="code-sync" />
        <h4 className="mainLabel">Paste invitation Room ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="UserName" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            "If you don't have invite then&nbsp;"
            <a href="javascript:void(0)" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with <a href="#">Harsh Singh</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
