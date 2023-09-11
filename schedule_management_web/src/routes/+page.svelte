<head>
    <meta charset="UTF-8">
    <title>일정관리 로그인</title>
</head>

<body>
    <div style="text-align: center; font-family: 'Malgun Gothic';"><h1>로그인</h1></div>
    <hr>

    <form method="post" action="login">
        <table style="margin-left: auto; margin-right: auto">
            <tr>
                <td style="font-family: 'Malgun Gothic'">아이디: </td>
                <td><input type="text" name="user_id"></td>
            </tr>
            <tr>
                <td style="font-family: 'Malgun Gothic">비밀번호: </td>
                <td><input type="text" name="user_password"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="submit">로그인</button>
                    <button type="button"><a href="/signup">회원가입</a></button>
                </td>
            </tr>
        </table>
    </form>
</body>