<div align="center">
  <h1>Single Page Application 게시판👀</h1>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjun-seok816%2Fa-bulletin-board&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>  


<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/72478198/156970307-0734d2a3-5f22-4254-9ab9-0b52c9de429d.gif" alt="animated" />
</p>
<br/>

<h3 align="center">만들어진 사이트는 http://jun.cafe24app.com/ 에서 확인하실 수 있습니다. </h3>   
<br/><br/><br/>


<br/>
<div align="center">
    <h1>Architecture</h1>
    <p align="center">
      <img src="https://user-images.githubusercontent.com/72478198/157164247-4535b61a-f10c-48c3-a7a2-df47deec8ea9.png" alt="animated" />
    </p>
 </div> 
<br/>


<br/>
<div align="center">
    <h1>Front 구조</h1>
    <p align="center">
      <img src="https://user-images.githubusercontent.com/72478198/157164745-43be341c-1130-4118-9151-07954b3779e8.png" alt="animated" />
    </p>
 </div> 
<br/>

<div align="center">
  <h1>REST API Reference</h1>
</div> 




## Login API

### Description

사용자 인증 

### Request

#### URL
  
```javascript
POST /Login HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|h_id|String|사용자의 아이디|true|
|h_password|String|사용자의 비밀번호|true|

  
 <br/>
  
### Response

  
|Name|Type|Description|Required|
|---|---|---------|---|
|login|Boolean|사용자의 로그인 성공 여부|true|
|message|String|인증 실패 시 반환되는 에러 메시지|false|

<br/>

## Logout API


### Description

세션을 삭제합니다

### Request

#### URL
  
```javascript
GET /logout HTTP/1.1
Host: http://jun.cafe24app.com/
```

<br/>

## Signup API

### Description

회원가입 및 사용자 인증

### Request

#### URL
  
```javascript
POST /Signup HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|h_id|String|사용자의 아이디|true|
|h_password|String|사용자의 비밀번호|true|

  
 <br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|사용자의 로그인 성공 여부|true|
|message|String|인증 실패 시 반환되는 에러 메시지|false|

<br/>

## LoginCheck API

### Description

Session이 있는지에 따라 로그인상태 체크

### Request

#### URL
  
```javascript
USE /Signup HTTP/1.1
Host: http://jun.cafe24app.com/
```

<br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|loginToken|String|사용자의 로그인 성공확인된 인증토큰|true|


<br/>



<div align="center">
  <h1>Front-end Stack</h1>
  <img src="https://img.shields.io/badge/React-3D41C8?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/Webpack-1dc207?style=flat-square&logo=Webpack&logoColor=white"/>
</div>




### React

React를 사용하여 Express에서 REST 아키텍처의 제약 조건을 준수하여 받아온 데이터를 이용하여 Single Page Application 게시판 사이트를 만들었습니다.

<br/>

### Webpack

React와 css파일을 번들링하여 웹페이지 성능 최적화 하였습니다.

<br/>
<br/>

<div align="center" style="padding-bottom:10em;">
  <h1>Back-end Stack</h1>
  <img src="https://img.shields.io/badge/Mysql-3D41C8?style=flat-square&logo=Mysql&logoColor=white"/>
</div>

### Mysql

게시판 데이터는 Mysql를 사용하여 담아넣었습니다.


<br/>




[__junGallery__]: http://jun.cafe24app.com/

