# Schedule Management Web

3학년 2학기 소프트웨어공학에서 사용하는 프로젝트입니다.

이 문서는 종종 업데이트되니 가끔 들러서 팁들을 확인하세요!

# 프로젝트 설명

본 프로젝트는 웹 기반의 일정 관리 프로그램을 만듭니다.

# 레포지토리 복제

로컬에서 사용하기 위해 레포지토리를 복제해야합니다.

[`git`](https://git-scm.com/download/win)을 사용하므로 컴퓨터에 없다면 설치해주세요.

# git 초기설정

설치가 끝났다면 Git Bash를 실행해줍니다.

그리고 git 초기 설정을 해줍니다.

```bash
git config --global user.name "github 아이디"
git config --global user.email "github 이메일"
```
# 레포지토리 복제 및 협업(git desktop 이용)

Git Desktop을 이용해 github를 더욱 편리하게 이용할 수 있습니다.

[`여기`](https://eunyoe.tistory.com/m/210)를 클릭하여 확인해보시면 됩니다.

본인이 개발한 부분을 Pull Request(병합요청)을 보내면 제가 확인 후 main 브랜치에 병합시킵니다.

만약 충돌나는 부분이 있다면 해결을 해주어야하는데, 이 부분은 저 사이트에 잘 정리되어있으니 참고하시기 바랍니다.


# 레포지토리 복제(git bash 사용)

위에서 Git Desktop을 이용하였다면 이 문단은 필요가 없습니다.

레포지토리가 위치할 폴더로 이동합니다(혹은 생성합니다)

해당 폴더에서 우클릭을 하면 Git Bash Here를 확인할 수 있습니다.

클릭해줍니다.

그리고 다음 커맨드를 입력해 레포지토리를 복제해옵니다.

```bash
git clone https://github.com/binn328/Software_Engineering_Project/
```


# 종속성 설치

[`vs-code`](https://code.visualstudio.com/download)를 이용해 개발합니다.

npm을 사용해야하므로 [`node-js`](https://nodejs.org/ko/download)를 설치해야합니다.

설치하지 않았다면 설치해주세요!

vs-code에서 프로젝트 폴더(schedule_management_web)을 엽니다.

터미널을 열고 다음 커맨드를 입력합니다.

```bash
npm install
```

미리 지정된 종속성들이 설치될 것입니다.

# 개발 편의 기능

## 실시간 미리보기 기능

다음 커맨드를 입력하면 저장(Ctrl + S)을 할 때마다 실시간으로 업데이트되는 페이지를 확인할 수 있습니다.

```bash
npm run dev
```

개발할 때 유용하니 꼭 사용해보세요

## JS Doc

JS Doc은 타입 명시가 없는 Javascript에서 타입 체크 기능을 제공해줄 수 있는 기능입니다.

기본적으로 Javascript는 변수 선언 시 타입을 명시하지 않아, 개발 중 타입 오류를 만나 머리가 깨진다던가, 에디터에서 힌트를 제공하지 못하는 문제가 있습니다.

JS Doc은 이 문제를 해결하기 위해 사용하는 툴입니다.

사용법은 간단합니다.

```javascript
// @ts-check

/** 
 * @type {string}
 */
let str;

/**
 * @param {number} left_param - first parameter
 * @param {number} right_param - second parameter
 * @returns {number}
 */
function add(left_param, right_param) {
    return left_param + right_param;
}
```

/** 으로 시작하는 주석 내부에 @param, @returns와 같이 해당 변수나 함수를 설명해주면 됩니다.

이렇게 하면 코딩 중에 타입 체크를 통해 오류를 조기에 발견할 수 있으며, 코드 작성 중 에디터가 힌트를 제공할 수 있게 됩니다.

자세한 사용법은 [`해당 사이트`](https://poiemaweb.com/jsdoc-type-hint)를 참고하시면 되겠습니다.