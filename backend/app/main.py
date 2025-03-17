from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import ContactModel

app = FastAPI(title='Stanislaw API', summary='', description='', version='0.0.1')

origins = [
    "http://localhost:3000",   # for local
    "http://spashkov.ru",      # for production
    "https://spashkov.ru"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/api/contact')
async def contact(form: ContactModel):
    return {f'{form.name}': 'Hi mum!'}

