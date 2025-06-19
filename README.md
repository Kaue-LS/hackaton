# hackaton

## 1. Crie e ative um ambiente virtual

python -m venv venv

## Windows

venv\Scripts\activate

## 2. Atualize o pip

python -m pip install --upgrade pip

## 3. Instale as dependências

python -m pip install -r requirements.txt

## 4. Rode o projeto localmente com Flask (modo desenvolvimento)

python app.py

## ou se você tiver o FLASK_APP configurado:

## flask run

## 5. Ou rode com Gunicorn (modo produção)

gunicorn app:app
