# Go Web Server 
## 1. GO 설정  
* 프로젝트를 생성하면 src, pkg, bin 디렉토리를 생성  
* 프로젝트 디렉토리를 GOPATH라는 환경변수에 등록  
  확인은 go env 명령이나 windows는 set 명령을 수행  
  mac은 터미널에서 cd $GOPATH 명령으로 GOPATH 명령을 설정한 곳으로 이동하는 지 확인  
### 1) main.go 작성 
```go
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	// 접속할 url 생성
	url := "http://golang.org"
	// GET방식으로 요청
	// 에러가 있으면 err에 에러가 저장되고 에러가 없으면 err은 nill
	res, err := http.Get(url)

	if err != nil {
		panic(err)
	}

	defer res.Body.Close()

	html, err2 := ioutil.ReadAll(res.Body)

	if err2 != nil {
		panic(err2)
	}

	fmt.Println(string(html))
}
```  

### +) 개발 방식에 대하여  
  GET 요청이나 POST 요청을 전송 : Java, Node, Go로 해도 됩니다.  
  Web Server를 만드는 부분도 Java, Java+Spring, Node, Go로 해도 됩니다.  

* FrontEnd
  Responsive Web : 반응형 웹 - 디바이스나 화면 크기에 상관없이 동일한 컨텐츠를 사용할 수 있어야 한다.  
  Progressive Web : 자주 사용하는 UI를 모든 곳에 적용  
  Single Page Application : 하나의 페이지로 애플리케이션을 제작  
    react나 vue가 대표적인 라이브러리  
  Web App(웹 페이지를 생성해서 기기의 웹 브라우저로 접속 - 디바이스의 모든 기능을 사용하지는 못하지만 구현이 쉽고 업데이트가 빠르게 적용됨) & Native App(운영체제에 설치하는 애플리케이션 - 디바이스의 모든 기능을 사용할 수 있음)  

* Back End  
  데이터베이스 연동 + ORM  
  Security : 데이터 암호화, https  
  Transcation : 하나의 거래  
  REST API(RESTful)  

## 3. Go로 Web Server를 제작하기 위한 프레임워크  
* Gin 프레임워크 : http://github.com/gin-gonic/gin  

## 4. Model 생성  
* Model : 데이터베이스에 저장된 데이터를 표현하는 자료구조  
  Entity라고 해도 됩니다.  
  ORM을 사용할 때는 명확하게 분리를 해서 사용해야 합니다.  
  대부분의 ORM은 in Memeory DB의 형태로 사용이 되기 때문에 Entity를 Repository가 아닌 곳에서 접근하면 문제가 발생할 가능성이 높습니다. Go, node같은 애들도 in Memory는 있지만 두 언어의 강점이 간단하다이기 때문에 강조하지 않음  

* DTO(Data Transfer Object) : 데이터를 주고받기 위해서 만든 자료구조  
  Client와 Server간 또는 Server내에서 Layer간에 데이터를 주고 받기 위한 자료구조  
  이와 비슷한 용어로 VO(Variable Object)라는 용어를 사용하기도 합니다.  

* 3가지 Model 필요 - Product, Customer, Order  
