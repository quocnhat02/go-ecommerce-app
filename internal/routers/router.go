package routers

import "github.com/gin-gonic/gin"

func NewRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/ping/:name", Pong)
	return r
}

func Pong(c *gin.Context) {
	uid := c.DefaultQuery("uid", "123")
	name := c.Param("name")
	c.JSON(200, gin.H{
		"message": "pong" + name,
		"uid":     uid,
	})
}
