package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type MouseEvent struct {
	X int   `json:"x"`
	Y int   `json:"y"`
	T int64 `json:"t"`
}

type TelemetryData struct {
	Events []MouseEvent `json:"events"`
}

func ingestHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var data TelemetryData
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		fmt.Println("Error devocing JSON:", err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Printf("Received %d events from the frontend\n", len(data.Events))

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status":"captured"}`))
}

func main() {
	http.HandleFunc("/ingest", ingestHandler)

	port := ":8080"
	fmt.Println("Backend Ingestor running on :8000")
	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Println("Server failed: ", err)
	}
}
