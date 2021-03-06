const string = `
.box * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .box *::before, .box *::after{
      box-sizing: border-box;
  }
  body {
    position: relative;
  }
  .box {
    width: 400px;
    min-height: 50vh;
    position: relative;
    left: 50%;
    top: 100px;
    margin-left: -200px;
  }
  .box .head {
    border: 1px solid #ccc;
    width: 210px;
    height: 195px;
    background: #218ec9;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 30px;
    border-radius: 50%;
  }
  .box .head .face {
    width: 180px;
    height: 168px;
    border: 1px solid #ccc;
    border-radius: 49%;
    margin-left: auto;
    margin-right: auto;
    top: 26px;
    position: relative;
    background: #fff;
  }
  .box .head .face .eye_box {
    width: 120px;
    height: 50px;
    margin-left: 30px;
    top: 0;
    position: relative;
  }
  .box .head .face .eye_box .eye:first-child {
    margin-right: 5px;
  }
  .box .head .face .eye_box .eye {
    border: 1px solid #889977;
    width: 45px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    position: relative;
    float: left;
    left: 10px;
    top: -5px;
    margin: 0 auto;
  }
  @keyframes move_eye {
    0% {
      transform: translate(0px);
    }
    60% {
      transform: translate(1px);
    }
    80% {
      transform: translate(-1px);
    }
    100% {
      transform: translate(0px);
    }
  }
  .eye::after {
    animation: move_eye 300ms infinite;
  }
  .box .head .face .eye_box .eye::after {
    content: "";
    border: 7px solid black;
    width: 3px;
    height: 6px;
    border-radius: 50%;
    top: 16px;
    left: 25px;
    position: relative;
    display: block;
    background: #fff;
  }
  .box .head .face .eye_box::after {
    content: "";
    border: 12px solid red;
    width: 5px;
    height: 5px;
    margin: 0 auto;
    position: relative;
    display: block;
    border-radius: 50%;
    top: 30px;
    left: -1px;
    background: #fff;
  }
  .box .head .face::after {
    content: "";
    width: 2px;
    height: 58px;
    border: 1px solid #889977;
    position: absolute;
    margin: 0 auto;
    top: 59px;
    left: 87px;
    background: black;
    z-index: 3;
  }
  .box .head .face .line {
    border-top: 3px solid;
    width: 55px;
    height: 10px;
    position: absolute;
    z-index: 3;
  }
  .box .head .face .line.L1 {
    top: 59px;
    left: 24px;
    transform: rotate(11deg);
  }
  .box .head .face .line.L2 {
    top: 76px;
    left: 24px;
    transform: rotate(1deg);
  }
  .box .head .face .line.L3 {
    top: 94px;
    left: 24px;
    transform: rotate(350deg);
  }
  .box .head .face .line.R1 {
    top: 59px;
    right: 24px;
    transform: rotate(-11deg);
  }
  .box .head .face .line.R2 {
    top: 76px;
    right: 24px;
    transform: rotate(1deg);
  }
  .box .head .face .line.R3 {
    top: 94px;
    right: 24px;
    transform: rotate(11deg);
  }
  .box .head .mouth {
    border: 1px solid red;
    width: 120px;
    height: 60px;
    border-radius: 90%;
    background: red;
    top: 124px;
    left: 45px;
    position: absolute;
    overflow: hidden;
    z-index: 1;
  }
  .box .head::before {
    content: "";
    z-index: 2;
    width: 180px;
    height: 60px;
    position: absolute;
    background: #fff;
    top: 86px;
    left: 14px;
    border-radius: 90%;
  }
  .box .head::after {
    display: block;
    border-radius: 70%;
    content: "";
    width: 65px;
    height: 28px;
    border: 1px solid #889977;
    position: relative;
    margin: 0 auto;
    top: -14px;
    left: 1px;
    background: #c77550;
    z-index: 2;
  }
  `
  export default string;