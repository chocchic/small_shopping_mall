# 풀 스택 애플리케이션 개발  
* 간단한 쇼핑몰 형태  
* frontend - react  
* backend - go
* database - mysql  

# react  
## 1. react 프레임워크(라이브러리)  
* 웹 사용자 인터페이스를 구현할 수 있는 자바스크립트 라이브러리  
* facebook이 2013년에 공개  
* PWA(Progressive Web Application)이나 (Single Page Application) 구현에 많이 사용  

## 2. 설치
### 1) node를 먼저 설치  
터미널에서 node -v로 확인  

### 2) react 설치  
npm install -g create-react-app  

## 3. 개발방법  
### 1) 리엑트 엘리먼트를 생성 - UI  
* JSX문법과 CSS 그리고 자바스크립트를 이용  

### 2) 엘리먼트를 리엑트 컴포넌트로 감싸기  
* 컴포넌트는 리엑트 엘리먼트로 구성된 자바스크립트 함수나 클래스  
* 리엑트 애플리케이션은 서로 데이털르 주고받는 여러 컴포넌트로 구성  

### 3) 리엑트 컴포넌트는 props를 통해 데이터를 주고 받음  

### 4) state를 이용해서 컴포넌트 내부에서 상태를 관리하고 수정  
* 이 값이 변경되면 해당 값을 참조하는 부분을 찾아서 다시 랜더링  

## 4. 프로젝트 생성  
### 1) create-react-app 앱이름  

### 2) 앱 실행 - 기본적으로 3000번 포트를 이용해서 실행이 됩니다.  
npm start  

### 3) 애플리케이션을 다운로드 받은 경우에 node_modules가 없는 경우  
npm install  

## 5. 프로젝트 구조  
### 1) node_modules  
* 필요한 라이브러리를 저장하는 디렉토리  
* 이 디렉토리의 내용은 package.json 파일에 작성되어 있음  
* 이 디렉토리가 없으면 npm install 명령을 수행  

### 2) public  
* 정적인 자원이 위치하는 디렉토리  
* 이미지나 css 또는 자바스크립트와 같은 변하지 않는 파일  

### 3) src  
* 리액트 관련 소스파일이 위치하는 디렉터리  
* entry-point는 index.js  

## 6. 자바스크립트 기타 라이브러리  
### 1) jquery.js  
* 크로스 브라우징 을 쉽게 해주는 자바스크립트 프레임워크  
=>https://jquery.com/  

2)bootstrap.js  
=>반응형 웹 페이지를 쉽게 만들 수 있도록 해주는 자바스크립트 프레임워크  
=>https://getbootstrap.com/, http://bootstrapk.com/getting-started/  

## 7. 기본 학습  
### 1) 프로젝트 구조를 변경  
* src 디렉토리에서 index.js를 제외한 모든 파일을 삭제  

### 2) public 디렉토리에 기본 화면으로 사용할 index.html 파일을 생성하고 작성  
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!-- 웹 페이지를 화면에 출력할 때의 옵션
    가로의 크기는 디바이스의 크기에 맞추고 초기 배율은 1배
    예전에는 user-scalable=no를 설정했는데 최근에는 shirnk-to-fit=no를 설정하는데 
    사파리에서 viewport 보다 콘텐츠 크기가 작으면 자동으로 shrink 되는 현상을 방지하기 위해서 설정-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- 부트스트랩 적용을 위한 css 설정 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">

    <meta name="theme-color" content="#000000">

    <!-- 안드로이드에서 홈스크린에 추가했을 경우 필요한 메타정보 설정-->
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      개발 모드로 실행 run `npm start` or `yarn start`.
      배포할 때 실행 use `npm run build` or `yarn build`.
    -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
  </body>
</html>
```  

### 3) public 디렉토리에 img 디렉토리를 만들고 출력할 이미지 복사  

### 4) public 디렉토리에 Cards.json 파일을 생성하고 샘플 데이터를 입력  
```json
[{
    "id" : 1,
    "img" : "img/strings.png",
    "imgalt":"string",
    "desc":"A very authentic and beautiful instrument!!",
    "price" : 100.0,
    "productname" : "Strings"
}, {
    "id" : 2,
    "img" : "img/redguitar.jpeg",
    "imgalt":"redg",
    "desc":"A really cool red guitar that can produce super cool music!!",
    "price" : 299.0,
    "productname" : "Red Guitar"
},{
    "id" : 3,
    "img" : "img/drums.jpg",
    "imgalt":"drums",
    "desc":"A set of super awesome drums, combined with a guitar, they can produce more than amazing music!!",
    "price" : 17000.0,
    "productname" : "Drums"
},{
    "id" : 4,
    "img" : "img/flute.jpeg",
    "imgalt":"flute",
    "desc":"A super nice flute combined with some super nice musical notes!!",
    "price" : 210.0,
    "productname" : "Flute"
},{
    "id" : 5,
    "img" : "img/blackguitar.jpeg",
    "imgalt":"Black guitar",
    "desc":"An awesome guitar that will product amazing sound!!",
    "price" : 200.0,
    "productname" : "Black Guitar"
},{
    "id" : 6,
    "img" : "img/saxophone.jpeg",
    "imgalt":"Saxophone",
    "desc":"An great saxophone for a great musician!!",
    "price" : 1000.0,
    "productname" : "Saxophone"
}]
```  

### 5) 서버에서 실제 데이터 생성  
* 서버에서 실제 데이터를 만들 때는 특별한 경우가 아니면 배열이 시작이면 안됨  
* 배열은 인덱스로 찾아가고 객체는 이름으로 찾아갑니다.  
    시작은 객체로 만드는 것이 좋습니다.  
    배열은 객체 내에 어떤 이름과 매핑이 되는 것이 좋습니다.  

## 8. JSX와 React Element  
### 1) 부트스트랩을 이용한 버튼을 생성  
<a href="링크" className="버튼의 클래스 이름">텍스트</a>  

### 2) JSX  
* HTML과 문법이 유사한 자바스크립트 확장언어  
* react에서는 JSX를 이용해서 엘리먼트를 생성  
* 주의할 점은 HTML에서는 속성의 이름이 대부분 소문자로 구성되지만 JSX에서는 Camel -case Naming Conversion을 이용  
* element를 만들 때 자바스크립트와 같이 사용 가능  
```javascript
const btnElement = <a href="#" className="btn btn-primary">Buy</a>

const btnClass = "btn btn-primary"
const btnName = "Buy"
const btnElement = <a href="#" className={btnClass}>{btnName}</a>
```  

* 만들어진 JSX를 DOM(Document Object Model - 문서 객체 모델 - HTML 태그로 변환)  
```javascript
const btnElement = <a href ="#" className="btn btn-primary">Buy</a>
ReactDOM.render(btnElement, document.getElementById("root"));
```  
* 리엑트 컴포넌트 : 자바스크립트 함수나 
* 리액트 컴포넌트의 구성  
리액트 엘리먼트 : 모양  
props : 데이터  
state : 상태  

## 9. 리액트 애플리케이션 설계  
* 진입점 역할을 수행하는 메인 컴포넌트를 생성  
* 메인 컴포넌트 안에 여러 자식 컴포넌트를 출력하도록 설계 - Composition  

## 10. props  
* 컴포넌트 간의 데이터 전달을 위한 객체  
* 컴포넌트 내에서는 this.props.속성이름으로 접근해서 사용  
* 부모 컴포넌트에서 생성한 후 넘겨주는 구조를 사용합니다.  
    데이터를 부모 컴포넌트 내에서
### 2) 데이터를 json 형태로 작성해서 반복문을 이요해서 props로 전달  


## 11. state  
* 리엑트에서 데이터를 저장하기 위한 객체가 state  
### 1) state 객체 초기화 - 생성자에서 수행  
```javascript
```  

### 2) 
    이 때 데이터를 만들 때는 객체 형태로 만들어야 하고, {state속성 : 데이터}의 형태이어야 합니다.  
```javascript
this.setState({
    cards: [
      {"id":1, "img":"img/strings.png", "imgalt":"strings","desc":"A very authentic and beautiful instrument!", "price":100.0, "productName": "Strings"},
      {"id":2, "img":"img/redguitar.jpeg", "imgalt":"redg", "desc":"A really cool red guitar that can produce super cool music!", "price":299.0, "productName":"Red Guitar"}
    ]
    }
)
```  

* fetch 메서드를 이용해서 데이터를 가져와서 설정  
```javascript
fetch('데이터를 가져올 URL').then(res => res.json()).then((result)=>{
    this.setState({ state이름 : result})
});
```  
    react는 데이터를 ajax형태로 호출  
    외부 서버의 경우는 서버가 반드시 CORS(외부 도메인에서 Ajax로 데이터를 가져올 수 있도록 해주는 설정) 설정이 되어있어야 합니다.  

### 3) 라이플 사이클  
* 라이프 사이클은 수명 주기로 번역되는데, 일반적으로 어떤 순서대로 메서드들이 호출되는지에 대한 부분입니다.  
* componentDidMount()는 컴포넌트가 마운트되면 호출되는 메서드  
    데이터를 가져오는 내용은 이 메서드에서 호출하는 것을 권장합니다.  


# react를 이용한 Frontend 개발
## 1. 리액트 프로젝트 생성 - music_frontend   

## 2. src 디렉토리의 불필요한 파일 삭제  
* App.css  
* Index.css
* logo.svg

## 3. 다운로드 받은 프로젝트에서필요한 파일 복사  
* public 디렉토리의 img 디렉토리를 public 디렉토리에 복사 : 샘플 이미지    

* public 디렉토리의 index.html파일을 public 디렉토리로 복사 - 기존 파일의 내용을 수정해도 됩니다.  
  jquery와 bootstrap을 사용하기 위한 설정  
  stripe(신용카드 결제 유효성 검사를 위한 라이브러리)를 사용하기 위한 설정  

* public 디렉토리의 cards.json, user.json, promos.json파일을 복사  
  백엔드가 만들어지지 않아서 데이터를 가져올 수 없기 때문에 프론트엔드 테스트를 위해서 사용할 데이터  
  card.json 그리고 user.json, promos.json 형태로 데이터를 넘길 수 있다면 서버는 어떤 언어나 프레임워크를 사용하더라도 OK  

## 4. Main 페이지 작성을 위한 3개의 컴포넌트를 위한 자바스크립트 파일을 src 디렉토리에 작성  
* Navigation.js  
* ProductCards.js  
* About.js  

## 5. 탐색 메뉴 만들기  
react-router-dom 패키지 설정: npm install –save react-router-dom  

### 1) Navigation.js 파일 작성 
```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';
//새로운 컴포넌트 생성
export default class Navigation extends React.Component {
  //뷰 생성
  render() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixedtop">
        <div className="container">
          <button type="button" className="navbar-brand order-1 btn btnsuccess"
          onClick={() => { this.props.showModalWindow();}}>Sign in</button>
          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/">Home</NavLink>
              <NavLink className="nav-item nav-link" to="/promos">Promotions</NavLink>
              <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}
```  

## 6. 상품페이지 만들기  
### 1) 상품 페이지 작성 - ProductsCards.js 파일 작성  
```javascript
import React from 'react';
class Card extends React.Component {
  render() {
    const priceColor = (this.props.promo) ? "text-danger" : "text-dark";
    const sellPrice = (this.props.promo) ? this.props.promotion : this.props.price;
    return (
      <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
        <div className="card mb-3">
          <img className="card-img-top" src={this.props.img}
          alt={this.props.imgalt} />
          <div className="card-body">
            <h4 className="card-title">{this.props.productname}</h4>
            Price: <strong className={priceColor}>{sellPrice}</strong>
            <p className="card-text">{this.props.desc}</p>
            <a className="btn btn-success text-white" onClick={() =>
            {this.props.showBuyModal(this.props.ID, sellPrice) }}>Buy</a>
          </div>
        </div>
      </div>
    );
  }
}
```  
### 2) 상품 페이지 작성 - ProductsCards.js 파일 작성  
```javascript
export default class CardContainer extends React.Component {
  constructor(props) {
  super(props);
  this.state = { cards: [] };
  }

  componentDidMount() {
    fetch(this.props.location).then(res => res.json()).then((result) => {
      this.setState({ cards: result });
  });
  }
  render() {
    const cards = this.state.cards;
    let items = cards.map(card => <Card key={card.id} {...card} promo={this.props.promo} showBuyModal={this.propsshowBuyModal}/>
    );
    return (
    <div>
      <div className="mt-5 row">
      {items}
      </div>
    </div>
    );
  }
}
```  

## 7.  About 페이지  
### 1) About 페이지 작성 - About.js 파일 작성  
```javascript
import React from 'react';
export default function About(props) {
return (
  <div className="row mt-5">
    <div className="col-12 order-lg-1">
      <h3 className="mb-4">About the Go Music Store</h3>
      <p>Go music is a modern online msucial instruments store</p>
      <p>Explore how you can combine the power of React and Go, to build a fast
      and beautiful looking online store.</p>
      <p>We will cover how to build this website step by step.</p>
    </div>
  </div>);
}
```  

## 8. 상품 주문 모달 윈도  
### 1) 모달을 위한 패키지 설치
```bash
npm install -–save reactstrap
```  

### 2) 상품 주문 모달 윈도 – modalwindow.js 파일을 src 디렉토리에 생성하고 작성  
```javascript
export function BuyModalWindow(props) {
return (
  <Modal id="buy" tabIndex="-1" role="dialog" isOpen={props.showModal}
  toggle={props.toggle}>
    <div role="document">
      <ModalHeader toggle={props.toggle} className="bg-success text-white">
        Buy Item
      </ModalHeader>
      <ModalBody>
        <CreditCardInformation user={props.user} seperator={false} show={true}
        productid={props.productid} price={props.price} operation="Charge" toggle={props.toggle} />
      </ModalBody>
    </div>
  </Modal>
  );
} 
```  

## 9. 신용카드 결제 처리  
* 신용카드 정보 입력 폼 구현은 간단해 보일 수 있지만 텍스트 입력 창이 전부가 아니며 실제 운영중인 서비스라면 신용카드 유효성을 검사하고 입력받은 정보를 안전하게 처리해야 하는데 신용카드 정보는 매우 민감한 정보이기 때문에 일반 데이터처럼 취급할 수 없음  
* 프론트 엔드에서 사용할 수 있는 다양한 신용카드 결제 서비스가 있는데 그 중 가장 많이 쓰이는 스트라이프 (https://stripe.com/)를 사용  
* 다른 유사한 서비스와 마찬가지로 웹 사이트에 접속해서 스트라이프 계정을 생성하고 API 키를 발급 받아야 하며 이 단계에서 결제액을 입금받을 은행 계좌도 입력해야 함  
* 개발과 테스트 용도로 제공하는 테스트 API를 사용  
* 스트라이프는 애플리케이션 내의 신용카드 결제에 필요한 모든 단계를 지원  
* 신용카드 번호의 유효성을 검사하고 입력된 승인 금액으로 결제를 요청한 후 최종적으로 결제액을 계좌로 입금  

### 1) 패키지 설치  
```bash
npm install @stripe/react-stripe-js @stripe/stripe-js
npm install --save react-stripe-elements
```  

### 2) 리액트 스트라이프 엘리먼트
* https://github.com/stripe-archive/react-stripe-elements  
* UI 엘리먼트는 신용카드 번호와 유효기간, CVC 번호, 우편번호 등의 신용카드 정보를 입력받음  
* 입력된 카드번호가 Master 또는 Visa인지 확인하는 등의 추가 데이터를 검증  
* 입력된 데이터를 검증하고 신용카드 정보를 나타내는 토큰 ID 값을 발급받고 해당 ID를 백엔드에 저장하고 사용  

### 3) 신용카드 결제 폼 작성 순서  
* 신용카드 결제 폼을 감싸는 컴포넌트를 생성 - 이 컴포넌트의 이름은 child  
* child 컴포넌트 안에 신용카드 정보를 입력하는 필드들을 포함하는 스트라이프 엘리먼트를 추가하는데 각 필드는 신용카드 번호와 유효기간 등을 입력 받는 일반적인 텍스트 입력 창  
* child 컴포넌트에 신용카드 토큰 ID를 백엔드로 전송하는 코드를 추가  
* 스트라이프 엘리먼트를 감싸는 컴포넌트의 부모 클래스를 정의  

### 4) 스트라이프 API 키를 처리하는 StripeProvider 컴포넌트를 호스트  

### 5) StripeProvider 컴포넌트 안에 child 컴포넌트를 추가  

### 6) 스트라이프 props와 함수를 child 컴포넌트에 전달하는데 injectStripe 메서드를 사용  

### 7) 신용카드 결제 처리 폼을 작성 – src/CreditCards.js 파일  
```javascript
import React from 'react';
import { injectStripe, StripeProvider, Elements, CardElement } from 'react-stripe-elements';
const INITIALSTATE = "INITIAL", SUCCESSSTATE = "COMPLETE", FAILEDSTATE = "FAILED";
class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
    value: '',
    status: INITIALSTATE
  };
}

  renderCreditCardInformation() {
    const style = {
    base: {
    'fontSize': '20px',
    'color': '#495057',
    'fontFamily': 'apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica
    Neue",Arial,sans-serif'
    }
  };
  const usersavedcard = <div>
    <div className="form-row text-center">
      <button type="button" className="btn btn-outline-success text-center mxauto">Use saved card?</button>
    </div>
    <hr />
  </div>
  const remembercardcheck = <div className="form-row form-check text-center">
    <input className="form-check-input" type="checkbox" value=""
    id="remembercardcheck" />
    <label className="form-check-label" htmlFor="remembercardcheck">
    Remember Card?
    </label>
  </div>;

  return (
    <div>
      {usersavedcard}
      <h5 className="mb-4">Payment Info</h5>
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-lg-12 form-group">
            <label htmlFor="cc-name">Name On Card:</label>
            <input id="cc-name" name='cc-name' className="form-control"
            placeholder='Name on Card' onChange={this.handleInputChange} type='text' />
          </div>
        </div>
        <div className="form-row">
          <div className="col-lg-12 form-group">
          <label htmlFor="card">Card Information:</label>
          <CardElement id="card" className="form-control" style={style} />
          </div>
        </div>
        {remembercardcheck}
        <hr className="mb-4" />
        <button type="submit" className="btn btn-success btnlarge" >{this.props.operation}</button>
      </form>
    </div>
  );

  renderSuccess() {
    return (
      <div>
        <h5 className="mb-4 text-success">Credit card payment processed.....</h5>
        <button type="submit" className="btn btn-success btn-large" onClick={() => { this.props.toggle() }}>Ok</button>
      </div>
    );
  }

  renderFailure() {
    return (
      <div>
        <h5 className="mb-4 text-danger"> Credit card information invalid, try again or exit</h5>
        {this.renderCreditCardInformation()}
      </div>
    );
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("Handle submit called, with name: " + this.state.value);
    let { token } = await this.props.stripe.createToken({ name: this.state.value });
    if (token == null) {
      console.log("invalid token");
      this.setState({ status: FAILEDSTATE });
      return;
    }
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        token: token.id,
        operation: this.props.operation,
      })
    });
    console.log(response.ok);
    if (response.ok) {
      console.log("Purchase Complete!");
      this.setState({ status: SUCCESSSTATE });
    }
    // document.getElementsByClassName('#modal').modal('hide');
    }
    handleInputChange(event) {
      this.setState({
        value: event.target.value
      });
    }

    render() {
      let body = null;
      switch (this.state.status) {
        case SUCCESSSTATE:
          body = this.renderSuccess();
          break;
        case FAILEDSTATE:
          body = this.renderFailure();
          break;
        default:
          body = this.renderCreditCardInformation();
      }
      return (
        <div>
          {body}
        </div>
      );
    }
  }
}

export default function CreditCardInformation(props) {
  if (!props.show) {
    return null;
  }
  const CCFormWithStripe = injectStripe(CreditCardForm);
  return (
    <div>
      {props.separator ? <hr /> : null}
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <Elements>
        <CCFormWithStripe operation={props.operation} />
        </Elements>
      </StripeProvider>
    </div>
  );
}
```  

## 10. 로그인 페이지  
### 1) 로그인 폼을 작성  
* src/modalwindow.js 파일  
```javascript
class SingInForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      errormessage: ''
    }
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  render() {
  let message = null;
  if (this.state.errormessage.length !== 0) {
   message = <h5 className="mb-4 text-danger">{this.state.errormessage}</h5>;
  }
  return (
    <div>
    {message}
    <form onSubmit={this.handleSubmit}>
      <h5 className="mb-4">Basic Info</h5>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" className="form-control"
        id="email" onChange={this.handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="pass">Password:</label>
        <input name="password" type="password" className="form-control"
        id="pass" onChange={this.handleChange} />
      </div>
      <div className="form-row text-center">
        <div className="col-12 mt-2">
         <button type="submit" className="btn btn-success btnlarge">Sign In</button>
        </div>
        <div className="col-12 mt-2">
          <button type="submit" className="btn btn-link text-info" onClick={() => this.props.handleNewUser()}> New User? Register</button>
        </div>
      </div>
      </form>
    </div>
    );
  }
}
```  
## 10. 회원 가입 페이지  
### 1) 회원 가입 폼을 작성 – src/modalwindow.js 파일  
```javascript
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { errormessage: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    let message = null;
    if (this.state.errormessage.length !== 0) {
      message = <h5 className="mb-4 text-danger">{this.state.errormessage}</h5>;
    }
    return (
      <div>
      {message}
      <form onSubmit={this.handleSubmit}>
        <h5 className="mb-4">Registration</h5>
        <div className="form-group">
          <label htmlFor="username">User Name:</label>
          <input id="username" name='username' className="form-control"
          placeholder='John Doe' type='text' onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' className="form-control"
          id="email" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Password:</label>
          <input type="password" name='pass1' className="form-control"
          id="pass1" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Confirm password:</label>
          <input type="password" name='pass2' className="form-control"
          id="pass2" onChange={this.handleChange} />
        </div>
        <div className="form-row text-center">
          <div className="col-12 mt-2">
            <button type="submit" className="btn btn-success btnlarge">Register</button>
          </div>
        </div>
        </form>
      </div>
    );
  }
}
```  
## 11. 가입 폼 과 로그인 폼을 포함하는 부모 모달 윈도우  
### 1) 부모 모달 윈도우 작성 – src/modalwindow.js 파일  
```javascript
export class SignInModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showRegistrationForm: false };
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  handleNewUser() {
    this.setState({ showRegistrationForm: true });
  }

  render() {
    let modalBody = <SingInForm handleNewUser={this.handleNewUser} />
    if (this.state.showRegistrationForm === true) {
     modalBody = <RegistrationForm />
    }

    return (
    <Modal id="register" tabIndex="-1" role="dialog" isOpen={this.props.showModal} toggle={this.props.toggle}>
      <div role="document">
        <ModalHeader toggle={this.props.toggle} className="bg-success textwhite">
          Sign in
        </ModalHeader>
        <ModalBody>
          {modalBody}
        </ModalBody>
      </div>
    </Modal>
    );
  }
}
```  

## 12. 주문 내역 페이지 - src/order.js파일을 생성하고 작성  
* 목록 페이지에서 buy를 눌렀을 때 보여지는 페이지  

### +)  
Javascript  : 객체 지향을 지원하지만 함수형 프로그래미언어의 특징을 강하게 소유  
Type script :  자바스크립트에 객체 지향의 개념을 추가한 개념  
react나 vue는 근본적으로 타입스크립트를 지원  

### 1) 주문 내역 페이지 – src/order.js  
```javascript
import React from 'react';
function Order(props) {
  return (
    <div className="col-12">
      <div className="card text-center">
        <div className="card-header"><h5>{props.productname}</h5></div>
        <div className="card-body">
          <div className="row">
            <div className="mx-auto col-6">
              <img src={props.img} alt={props.imgalt} className="img-thumbnail
              float-left" />
            </div>
            <div className="col-6">
              <p className="card-text">{props.desc}</p>
              <div className="mt-4">
              Price: <strong>{props.price}</strong>
              </div>
           </div>
          </div>
        </div>
        <div className="card-footer text-muted"> Purchased {props.days} days ago </div>
      </div>
      <div className="mt-3" />
    </div>
  );
}

export default class OrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: [] }; 
  }

  componentDidMount() {
    fetch(this.props.location).then(res => res.json()).then((result) => {
      this.setState({ orders: result.orders });
    });
  }

  render() {
    return (
    <div className="row mt-5">
      {this.state.orders.map(order => <Order {...order} />)}
    </div>
    );
  }
}
```  

## 13. 로그인 했을 경우 보여질 탐색 메뉴
### 1) Navigation.js 파일 수정  
```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Navigation extends React.Component {
  buildLoggedInMenu() {
    return (
      <div className="navbar-brand order-1 text-white my-auto">
        <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Welcome {this.props.user.name}
          </button>
          <div className="dropdown-menu">
            <a className="btn dropdown-item" role="button">Sign Out</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixedtop">
        <div className="container"> {this.props.user.loggedin ?
        /*<p className="navbar-brand order-1 text-white myauto">Welcome {this.props.user.name}</p>*/
          this.buildLoggedInMenu() : <button type="button" className="navbar-brand order-1 btn btn-success" 
          onClick={() => { this.props.showModalWindow();}}>Sign in</button>
        }
          <div className="navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav"> 
              <NavLink className="nav-item nav-link" to="/">Home</NavLink>
              <NavLink className="nav-item nav-link" to="/promos">Promotions</NavLink>
              {this.props.user.loggedin ? <NavLink className="nav-item navlink" to="/myorders">My Orders</NavLink> : null}
              <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}
```  
### 2) App.js 파일 수정  
```javascript
class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  user: {
  loggedin: false,
  name: "",
  }
  };
  this.showSignInModalWindow = this.showSignInModalWindow.bind(this);
  this.toggleSignInModalWindow = this.toggleSignInModalWindow.bind(this);
  this.showBuyModalWindow = this.showBuyModalWindow.bind(this);
  this.toggleBuyModalWindow = this.toggleBuyModalWindow.bind(this);
  }
  handleSignedIn(user) {
  this.setState({
  user: user
  });
  }
  showSignInModalWindow() {
  const state = this.state;
  const newState = Object.assign({}, state, { showSignInModal: true });
  this.setState(newState);
  }
  toggleSignInModalWindow() {
  const state = this.state;
  const newState = Object.assign({}, state, { showSignInModal: !state.showSignInModal });
  this.setState(newState);
  }
  showBuyModalWindow(id, price) {
  const state = this.state;
  const newState = Object.assign({}, state, { showBuyModal: true, productid: id, price:
  price });
  this.setState(newState);
  }
  toggleBuyModalWindow() {
  const state = this.state;
  const newState = Object.assign({}, state, { showBuyModal: !state.showBuyModal });
  this.setState(newState);
  }
  componentDidMount() {
  fetch('user.json')
  .then(res => res.json())
  .then((result) => {
  console.log('Fetch...');
  this.setState({
  user: result
  });
  });
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav user={this.state.user} showModalWindow={this.showSignInModalWindow} />
            <div className='container pt-4 mt-4'>
              <Route exact path="/" render={() => <CardContainer location='cards.json' showBuyModal={this.showBuyModalWindow} />} />
              <Route path="/promos" render={() => <CardContainer location='promos.json' promo={true} showBuyModal={this.showBuyModalWindow} />} />
              {this.state.user.loggedin ? <Route path="/myorders" render={() => <Orders location='user.json' />} /> : null}
              <Route path="/about" component={About} />
            </div>
            <SignInModalWindow showModal={this.state.showSignInModal} toggle={this.toggleSignInModalWindow} />
            <BuyModalWindow showModal={this.state.showBuyModal} toggle={this.toggleBuyModalWindow} user={this.state.user.ID} productid={this.state.productid} price={this.state.price} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
```  

## 14. 서비스 등록을 위한 페이지 작성  
### 1) src/registerServiceWorker.js 파일을 생성하고 작성  
```javascript
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match( /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/  )
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-reactapp/issues/2374
      return;
    }
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);
        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => { console.log('This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(registration => {
      registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
          // At this point, the old content will have been purged and
          // the fresh content will have been added to the cache.
          // It's the perfect time to display a "New content is
          // available; please refresh." message in your web app.
          console.log('New content is available; please refresh.');
          } else {
          // At this point, everything has been precached.
          // It's the perfect time to display a
          // "Content is cached for offline use." message.
          console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(error => { console.error('Error during service worker registration:', error);});
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
    // No service worker found. Probably a different app. Reload the page.
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister().then(() => { window.location.reload(); });
    });
    } else {
    // Service worker found. Proceed as normal.
    registerValidSW(swUrl);
    }
  }).catch(() => { console.log('No internet connection found. App is running in offline mode.');});
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
```  

## 15. index.js 수정
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```  

## 16. 실행  
```bash
npm start
```  

## 17. 배포하고자 하는 경우  
```bash
npm build run build
```  