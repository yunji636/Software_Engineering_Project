<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>일정관리 로그인</title>
    <style>
        body{
            padding:0;
            margin:150px 150px 200px 150px;
            border:none;
            font-family: 'Roboto', sans-serif;
            background-image:linear-gradient(to bottom left, red, blue)
        }
        .login-wrapper {
            margin:0 auto;
            width:400px;
            height: 370px;
            padding:10px 40px 40px 40px;
            box-sizing: border-box;
            background-color: white;
            border-radius: 20px;
            /*box-shadow: 5px 5px 5px;*/
        }
        #login-form > input{
            width: 100%;
            height: 48px;
            padding: 0 10px;
            box-sizing: border-box;
            margin-bottom: 16px;
            border-radius: 6px;
            background-color: #F8F8F8;
        }
        #login-form > input::placeholder{
            color: #D2D2D2;
        }
        #login-form > input[type="submit"]{
            color: #fff;
            font-size: 16px;
            background-color: #6A24FE;
            margin-top: 20px;
            cursor: pointer;
        }
        a > input[type="submit"]{
            font-size: 16px;
            background-color: white;
            border: none;
            cursor: pointer;
        }
        .signup{
            padding-left: 80px;
        }
    </style>
</head>
<body>
    <div class="login-wrapper">
        <h1>LOGIN</h1>
        <form methd="post" action="서버의url" id="login-form">
            <input type="text" name="id" class="text-field" placeholder="아이디">
            <input type="text" name="password" class="text-field" placeholder="비밀번호">
            <input type="submit" value="Login" onclick="location.href='home.html'">
        </form>
            <a href="main"><input type="submit" value="아이디/비밀번호찾기"></a>
            <a href="/signup"><input type="submit" class="signup" value="회원가입"></a>
        
    </div>
    
</body>
</html>