## 목차

* [소개글](#Single-Page-Application)
* [Architecture](#Architecture)
* [Front 구조](#Front-구조)
* [REST API Reference](#REST-API-Reference)
* [DataBase](#DataBase)
* [WebPack](#WebPack)

<div align="center">
  <h1>Single Page Application 게시판👀</h1>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjun-seok816%2Fa-bulletin-board&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>  


<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/72478198/156970307-0734d2a3-5f22-4254-9ab9-0b52c9de429d.gif" alt="animated" />
</p>


<br/>
<p align="center">
  <b>본 문서는 REST API 와 React를 사용하여 만든 게시판에대해 안내합니다</b>
</p>

<h3 align="center">만들어진 사이트는 http://jun.cafe24app.com/ 에서 확인하실 수 있습니다. </h3>   
<br/><br/><br/>

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

사용자 인증 API

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

회원가입 및 사용자 인증API

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

Session이 있는지에 따라 로그인상태 체크하는API

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

## Write API

### Description

게시글 작성 API

### Request

#### URL
  
```javascript
POST /Notice/Write HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|h_title|String|게시글의 제목|true|
|h_write|String|게시글의 본문|true|
|h_radioBtn|String|게시글이 해당하는 글머리|true|

  
 <br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|게시글 업로드성공 여부 |true|
|message|String|업로드 실패,성공 시 반환되는 메시지|true|

<br/>



## Delete API

### Description

게시글 삭제 API

### Request

#### URL
  
```javascript
POST /Notice/Delete HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|f_number|Number|게시글의 고유번호|true|

  
 <br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|게시글 삭제성공 여부 |true|
|message|String|삭제 실패,성공 시 반환되는 메시지|true|

<br/>

## Update API

### Description

게시글 수정 API

### Request

#### URL
  
```javascript
POST /Notice/Update HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|f_title|String|게시글의 제목|true|
|f_post|String|게시글의 본문|true|

  
 <br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|게시글 수정성공 여부 |true|
|message|String|수정 실패,성공 시 반환되는 메시지|true|

<br/>

## Recommend API

### Description

게시글 추천 API 한사람이 같은 게시글을 한번만 추천할 수 있게 구현

### Request

#### URL
  
```javascript
POST /Notice/Recommend HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|f_number|Number|게시글의 고유번호|true|

  
 <br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|게시글 추천성공 여부 |true|
|message|String|추천 실패,성공 시 반환되는 메시지|true|

<br/>


## Main/:category API

### Description

카테고리에 해당하는 게시글 목록을 반환하는 API

### Request

#### URL
  
```javascript
GET /Notice/Main/:category HTTP/1.1
Host: http://jun.cafe24app.com/
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|:category|String|머리글 |true|

  
<br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|게시글 목록반환 성공 여부 |true|
|message|String|게시글 목록반환 실패,성공 시 반환되는 메시지|true|

<br/>

## Main/:id API

### Description

ID에 해당하는 게시글정보를 반환하는 API

### Request

#### URL
  
```javascript
GET /Notice/Main/:id HTTP/1.1
Host: http://jun.cafe24app.com/
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|:id|Number|게시글 고유번호|true|

  
<br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|게시글 정보반환 성공 여부 |true|
|message|String|게시글 정보반환 실패 시 반환되는 메시지|false|
|database|Object|게시글 정보|false|

<br/>

## DatInsert API

### Description

게시글에  댓글작성 API

### Request

#### URL
  
```javascript
POST /Dat/Insert HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|f_number|Number|게시글의 고유번호|true|
|f_user|String|댓글을 작성한 유저|true|
|f_word|String|댓글의 본문|true|
 
<br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|댓글 작성성공 여부 |true|
|message|String|댓글작성 실패,성공 시 반환되는 메시지|true|

<br/>


## DatUpdate API

### Description

게시글에 있는 댓글수정 API

### Request

#### URL
  
```javascript
POST /Dat/Update HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|f_number|Number|게시글의 고유번호|true|
|f_user|String|댓글을 작성한 유저|true|
|f_word|String|댓글의 본문|true|
 
<br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|댓글수정 성공 여부 |true|
|message|String|댓글수정 실패,성공 시 반환되는 메시지|true|

<br/>

## DatDelete API

### Description

게시글에 있는 댓글삭제 API

### Request

#### URL
  
```javascript
POST /Dat/Delete HTTP/1.1
Host: http://jun.cafe24app.com/
Content-Type: application/json
```

#### Parameter

|Name|Type|Description|Required|
|---|---|---------|---|
|f_datNum|Number|댓글의 고유번호|true|
 
<br/>
  
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|댓글삭제 성공 여부 |true|
|message|String|댓글삭제 실패,성공 시 반환되는 메시지|true|

<br/>

## Dat/Select/:id API

### Description

게시글에 있는 댓글목록 반환 API

### Request

#### URL
  
```javascript
GET /Dat/Select/:id HTTP/1.1
Host: http://jun.cafe24app.com/
```
 
### Response

|Name|Type|Description|Required|
|---|---|---------|---|
|error|Boolean|댓글 검색성공 여부 |true|
|message|String|댓글검색 실패시 반환되는 메시지|false|
|database|Object|댓글목록에 대한 정보|false|

<br/>


# DataBase

##  tbl_user

사용자에 대한 정보를 담는 table

|Name|Type|Description|Default Value|
|---|---|---------|---|
|ai_user|INT|유저의 고유 ID(PK)|AUTO_INCREMENT|
|f_id|VARCHAR|유저의 ID|없음|
|f_password|VARCHAR|유저의 PASSWORD|없음|


##  tbl_noticeMain

게시글에 대한 정보를 담는 table

|Name|Type|Description|Default Value|
|---|---|---------|---|
|ai_number|INT|게시글의 고유 ID(PK)|AUTO_INCREMENT|
|f_title|VARCHAR|게시글의 제목|없음|
|f_writer|VARCHAR|게시글의 작성자|없음|
|f_date|TIMESTAMP|게시글이 작성된 날짜|CURRENT_TIMESTAMP|
|f_enterCount|INT|게시글의 조회수|0|
|f_recommend|INT|게시글의 추천수|0|
|f_post|LONGTEXT|게시글의 본문|없음|
|f_datCount|INT|게시글에 달린 댓글갯수|0|
|f_div|VARCHAR|게시글의 글머리|없음|



##  tbl_recommend

사용자가 특정게시물을 중복해서 추천했는지에 대한 정보를담는 table

|Name|Type|Description|Default Value|
|---|---|---------|---|
|f_recommend|INT|추천기록, 사용자ID + 게시글 번호(UNIQUE)|없음|
|f_number|INT|게시글의 번호|없음|

##  tbl_dat

댓글에 대한 정보를담는 table

|Name|Type|Description|Default Value|
|---|---|---------|---|
|ai_datNum|INT|댓글의 고유 ID(PK)|AUTO_INCREMENT|
|f_number|INT|게시글의 번호|없음|
|f_user|INT|댓글 작성자|없음|
|f_word|INT|댓글 본문|없음|
|f_date|TIMESTAMP|댓글이 작성된 날짜|CURRENT_TIMESTAMP|


# WebPack

WebPack설정을 어떻게 하였는지 설명합니다.

## entry

엔트리 포인트는 React의 가장 상위 컴포넌트인 index.tsx로 설정하였습니다.

```javascript
 entry: {
            "index" : './src/index.tsx',
        },
```

## output

번들을 내보낼 위치를 BackEnd폴더로 설정하였습니다.

```javascript
 output: {
            path: mv_Path.resolve(__dirname, '../back/views'),
            filename: 'index.js',
            clean : true,
            //chunkFormat: 'commonjs'
        },
```

[__junGallery__]: http://jun.cafe24app.com/

