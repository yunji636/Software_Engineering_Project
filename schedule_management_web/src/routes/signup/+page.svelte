<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>회원가입</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      /*padding: 100px;*/
      background-color:#6a24f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .sign-up{
            width:400px;
            height: 500px;
            padding:20px 40px 40px 40px;
            box-sizing: border-box;
            background-color: white;
            border-radius: 20px;
        
    }

    .sign-up h1 {
      margin-top: 20px;
      font-size: 50px;
      text-align: center;

    }

    .form-control {
      width: 80%;
      padding: 15px;
      margin-bottom: 17px;

      border: 1px solid #ccc;
      border-radius: 5px; 
      margin-left:auto;
      margin-right:auto;
      display:block;
      background-color : #f8f8f8;
    }

    .btn-submit {
      width: 37%;
      padding: 15px;
      margin-top: 15px;
      margin-left:7%;
      margin-right:10%;
      border: none;
      border-radius: 5px;
      background-color: #6a24f2;
      color: #fff;
      cursor: pointer;
      
    }

    .btn-cancel {
      width: 37%;
      padding: 15px;
      margin-top: 10px;
      border: none;
      border-radius: 5px;
      background-color: #ccc;
      color: #fff;
      cursor: pointer;
    }

  
    
  </style>
</head>

<body>
  <div class="sign-up" ng-hide="showSignup">
    <div>
      <h1>SIGN UP</h1>
      <form class="wrapp_box" role="form">
        <input type="text" 
        ng-model="username" 
        class="form-control form-control-username" 
        placeholder="이름" 
        required>

        <input type="text" 
        id="inputDate" 
        ng-model="birthday" 
        class="form-control form-control-birthday" 
        placeholder="생년월일(YYYYMMDD)" 
        required onfocus="if(this.placeholder == 'YYYYMMDD')">
        
        <input type="email" 
        ng-model="email" 
        class="form-control form-control-email" 
        placeholder="아이디" required>
        
        <input type="password"
        id = "newPassword" 
        ng-model="password"
        class="form-control form-control-password" 
        placeholder="비밀번호 (영문, 숫자 조합 8~16자리)" 
        required>


        <button type="submit" 
        class="btn btn-submit pull-left">가입</button>
        <button type="button" 
        class="btn btn-cancel pull-right" 
        onclick="location.href='main'">취소</button>
      </form>
      
    </div>

  </div>
</body>
</html>