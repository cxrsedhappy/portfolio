from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title='Stanislaw API', summary='', description='', version='0.0.1')

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Contact(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.post('/api/contact')
async def contact(form: Contact):
    return {f'{form.name}': 'Hi mum!'}
