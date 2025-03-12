from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(title='Stanislaw API',summary='',description='',version='0.0.1',)

origins = ['http://localhost','http://localhost:8000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
