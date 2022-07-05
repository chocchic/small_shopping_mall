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
