package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	// 파라미터 생성
	requestBody := bufio.newReader()

	//첫번째 매개변수를 URL 두번째 매개변수는 파라미터 형식 세번째 매개변수는 파라미터
	res, err := http.Post(
		"http://dumy.restapiexample.com/api/v1/create",
		"application.json;charset=UTF-8",
		requestBody,
	)

	if err != nil {
		log.Fatal(err)
	}

	data, _ := ioutil.ReadAll(res.Body)

	res.Body.Close()

	fmt.Printf("%s\n", data)
}
