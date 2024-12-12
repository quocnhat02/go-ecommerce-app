package main

import "github.com/quocnhat02/go-ecommerce-app/internal/routers"

func main() {
	r := routers.NewRouter()
	r.Run(":8002")
}
