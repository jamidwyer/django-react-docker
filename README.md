# Django and React Boilerplate with Docker

Built from https://saasitive.com/tutorial/django-react-boilerplate-saas/

## Setup

I'm building this in part because I want to learn more Python (the other part is I can't get Strapi to be the CMS I want (yet?)), so because I don't totally know what I'm doing (what's venv?), some of my instructions may be clunky.

To set up the Django backend after cloning the tutorial, I had to do:

```sh
git clone https://github.com/saasitive/django-react-boilerplate.git django-react-docker
cd django-react-docker/
cd backend/
virtualenv venv
source venv/bin/activate
pip install django
django-admin startproject server
cd server/
pip install djangorestframework
/var/www/html/django-react-docker/backend/venv/bin/python -m pip install --upgrade pip
pip install djangorestframework
pip install djoser
pip install django-cors-headers
```

## Development

backend:

```sh
cd /backend/server
python manage.py runserver
python manage.py migrate
```

frontend:

```sh
cd frontend
nvm use
npm install
npm start
```
