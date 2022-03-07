<div align="center">
  <h1>👀Single Page Application</h1>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjun-seok816%2Fa-bulletin-board&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>


<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/72478198/156970307-0734d2a3-5f22-4254-9ab9-0b52c9de429d.gif" alt="animated" />
</p>


0년부터 9999년까지의 달력만들기

본 프로젝트는 Javascript의 [__Date생성자__] 를 사용하지 않고 [__나만의 js_Date클래스__]를 사용하여 만들어졌습니다.


<div align="center">
  <h1>Front-end Stack</h1>
  <img src="https://img.shields.io/badge/React-3D41C8?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-EEEF16?style=flat-square&logo=JavaScript&logoColor=white"/>
</div>


### Javascript

프로젝트에 필요한 메소드를 담고있는 클래스를 활용하였습니다
클래스에 대한 정확한 정보는 [__junGallery__]에 정리해두었습니다.



### React

[__CreateReactApp__]프로그램을 사용하여 빌드 구성 없이 기본적인 React 앱을 만든 후 그 위에다 달력 프로젝트를 구현하였습니다.

달력프로그램을 설치하기 위해서는 이 커맨드를 당신의 터미널에서 실행시켜주세요:

```sh
npm install -g create-react-app
```


<div align ="center">
  <h1>Directory tructure Description</h1>
</div>

### public폴더
- index.html `메인페이지`

### src폴더

#### component폴더
- Thead.js `달력 table의 thead부분의 컴포넌트, 년도와 월을 input태그로 받아옵니다`
- Tbody.js `달력 table의 tbody부분의 컴포넌트, js_Date.js안에 있는 메소드를 활용하여 해당 년월의 달력을 출력합니다`

#### css폴더
- App.module.css `App컴포넌트의 css`
- Tbody.module.css `Tbody컴포넌트의 css`
- Thead.module.css `Thead컴포넌트의 css` 

#### javascript폴더
- js_Date.js `만년달력 프로젝트에 필요한 메소드를 담고있는 클래스입니다`


[__junGallery__]: http://jun.cafe24app.com/
[__나만의 js_Date클래스__]: https://github.com/jun-seok816/my_-js_Date-Class 
[__CreateReactApp__]:https://github.com/facebook/create-react-app

