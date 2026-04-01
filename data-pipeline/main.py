from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class MouseEvent(BaseModel):
    x: int
    y: int
    t: int

class Telemetry(BaseModel):
    events: List[MouseEvent]

@app.post("/ingest")