package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"snap-insta/server/internal/handlers"
)

func main() {

	log.SetFlags(log.LstdFlags | log.Lshortfile)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", handlers.HealthCheckHandler)
	mux.HandleFunc("/api/download", handlers.DownloadHandler)

	handler := handlers.CORSMiddleware(
		handlers.LoggerMiddleware(mux),
	)

	server := &http.Server{
		Addr:         ":" + port,
		Handler:      handler,
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 60 * time.Second,
	}

	fmt.Printf("http://localhost:%s\n", port)
	log.Fatal(server.ListenAndServe())
}
