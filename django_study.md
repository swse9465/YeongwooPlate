# django

> 파이썬 웹 프레임워크

* MTV 패턴

  <img src="md-images/image-20200326111333662.png" alt="image-20200326111333662" style="zoom:33%;" />


## 기초 내용

### 설치

```bash
$ pip install django==2.1.15
```

* 수업에서는 `2.1.15` 를 기준으로 진행 예정입니다.



### django 프로젝트 시작

#### 프로젝트 생성

```bash
$ django-admin startproject {프로젝트명}
```

#### 서버실행

* `django_intro` 폴더의 `settings.py` 파일에 아래와 같이 수정한다.

  ```python
  # 28번째 라인
  ALLOWED_HOSTS = ['*']
  ```

* 반드시 서버 실행시 명령어가 실행되는 디렉토리를 확인할 것.

```bash
~/ $ cd django_intro/
~/django_intro/ $ python manage.py runserver 8080
```

* 실행된 서버는 우측의 영역의 url을 클릭한다.

  ![Screen Shot 2020-03-26 at 오전 10.27](md-images/Screen Shot 2020-03-26 at 오전 10.27.png)

* 서버 종료는 터미널에서 `ctrl + c` 함께 입력한다.

#### 리눅스 명령어

* `cd` : change directory

  ```bash
  #  django_intro 폴더로 이동
  ~/ $ cd django_intro/
  ~/django_intro $
  # 상위 디렉토리로 이동
  ~/django_intro $ cd ..
  ~/ $
  # ~/ 로 이동
  home/ $ cd
  ~/ $
  ```

* `ls` : 현재 디렉토리 파일 목록

  ```bash
  ~/django_intro $ ls
  db.sqlite3  django_intro/  manage.py*
  ```

#### App 생성

* django는 여러개의 앱을 가진 하나의 프로젝트로 구성된다.
  * 커뮤니티를 만든다.
    * 회원과 관련된 app - `accounts`
    * 게시글과 관련된 app -`posts`

```bash
$ python manage.py startapp {app이름}
```

* app을 생성하고 반드시 `settings.py` 의 `INSTALLED_APPS` 에 등록한다.

  ```python
  INSTALLED_APPS = [
      ...
      'pages',
  ]
  ```



### 기본 흐름

#### 1. `urls.py`

```python
# django_intro/urls.py
from pages import views

urlpatterns = [
    path('lotto/', views.lotto),
]
```

* path에 url은 항상 `/` 로 닫아준다.

#### 2. `views.py`

```python
# pages/views.py
import random

def lotto(request):
    pick = random.sample(range(1, 46), 6)
    context = {
        'pick': pick
    }
    return render(request, 'lotto.html', context)
```

* 함수를 정의할 때, 항상 첫번째 인자는 `request`로 작성해둔다.
  * 내부적으로 요청을 처리할 때, 함수 호출 시 요청 정보가 담긴 객체를 넣어준다.

* `render` 함수를 통해서 반환한다.
  * 첫번째 인자 : `request`
  * 두번째 인자 : 템플릿 파일(`html`)
  * 세번째 인자 : dictionary, 템플릿에서 활용을 하려고 하는 값들을 전달

#### 3. `template` 파일 생성

* 반환할 `html` 파일은 항상 `templates`  폴더 안에 생성한다.

```html
<!-- pages/templates/lotto.html -->
<p>{{ pick }} </p>
```

* context 딕셔너리의 key 값을 적으면 출력된다.

## URL 설정

### Variable routing

> url의 특정 위치의 값을 변수로 활용

#### 1. urls.py

```python
# django_intro/urls.py
path('hi/<str:name>/', views.hi),
path('add/<int:a>/<int:b>/', views.add),
```

#### 2. views.py

```python
# pages/views.py
def hi(request, name):
    context = {
        'name': name
    }
    return render(request, 'hi.html', context)
```

#### 3. template

```html
<!-- pages/templates/hi.html-->
<h1>
    안녕, {{name}}
</h1>
```



## Template

### DTL

> 템플릿파일(html)은 django template language를 통해 구성된다.

#### 기본문법

1. 출력 `{{ }}`

   ```html
   {{ menu }}
   {{ menu.0 }}
   ```

2. 문법 `{% %}`

    ```html
    {% for menu in menupan %}

    {% endfor %}
    ```

3. 주석 `{# #}`

   ```html
   {# 주석입니다. #}
   ```

#### 반복문

```html
{% for reply in replies %}
	<li>{{ reply }}</li>
{% endfor %}
```

* `{{ forloop.counter }}`
* `{{ forloop.counter0 }}`
* `{% empty %}`



#### 조건문

```html
{% if user == 'admin' %}
	<p>관리자 입니다.</p>
{% else %}
	<p>권한이 없습니다.</p>
{% endif %}
```



#### built-in tag, filter

* 공식문서를 반드시 확인 부탁드립니다.

```html
{{ content|length }}
{{ content|truncatechars:10 }}
```



### Template 확장

```html
 <!-- pages/templates/base.html -->
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Django 기초 - pages</title>
    {% block css %}
    {% endblock %}
</head>
<body>
    <h1>Django 기초 문법 학습</h1>
    {% block body %}
    {% endblock %}
</body>
</html>
```

```html
{% extends 'base.html' %}

{% block css %}
<style>
    h1 {
        color: blue;
    }
</style>
{% endblock %}

{% block body %}
	<h1>페이지</h1>
{% endblock %}
```

### Template 설정

```python
# django_intro/settings.py Line#55
TEMPLATES = [
    {
        # DTL 엔진을 활용. jinja2 등으로 변경 가능함.
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # APP 내에 있는 폴더가 아닌 추가적으로 템플릿으로 활용하고 싶은 경로.
        'DIRS': [
            os.path.join(BASE_DIR, 'django_intro', 'templates')
        ],
        # APP_DIRS: True 인경우, 등록된 app(INSTALLED_APPS)의 디렉토리에 있는 templates 폴더를 템플릿 폴더로 활용하겠다.
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

* `DIRS` 리스트에 경로 정의는 폴더 구조를 통해 확인하자.

  ```
  00_django_intro/ <- BASE_DIR
  	django_intro/
  		templates/
  ```



## Multiple app을 위한 설정

> 앞으로는 항상 app을 생성하면 다음과 같은 폴더 구조를 가진다.

```
app1/
	templates/
		app1/
			index.html
			a.thml
    urls.py
    views.py
    ...

app2/
	templates/
		app2/
			index.html
			b.thml
    urls.py
    views.py
    ...
```

### 1. url 설정 분리

> 각각의 app 별로 url을 관리한다.

* 프로젝트 폴더 urls.py 정의

  ```python
  # django_intro/urls.py
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('pages/', include('pages.urls')),
      path('boards/', include('boards.urls')),
  ]
  ```

* 각 프로젝트별 urls.py  정의

  ```python
  from django.urls import path
  from . import views

  urlpatterns = [
      # /boards/
      path('', views.index),
      # /boards/new/
      path('new/', views.new),
      # /boards/complete/
      path('complete/', views.complete),
  ]
  ```

### 2.  templates 폴더 구조

* template 파일을 반환하기 위해서 django는 아래의 폴더들을 탐색한다.
  * `DIRS` 에 정의된 경로의 하위 디렉토리
  * `INSTALLED_APPS` 디렉토리의 `templates` 폴더의 하위 디렉토리 탐색
* 이 과정에서 중복된 파일이 있는 경우, 예상치 못한 결과가 나타날 수 있다.
* 따라서, 앞으로 다음과 같은 구조를 유지한다.

```
app1/
	templates/
		app1/
app2/
	templates/
		app2/
```



## Form을 통한 요청 처리

### 개요

1. 사용자들로부터 값을 받아서 (`boards/new/`)
2. 이를 단순 출력하는 페이지 구성 (`boards/complete/`)

### 1. 사용자에게 form 양식 제공

1. url 지정

    ```python
    # boards/urls.py
    path('new/', views.new),
    ```

2. view 함수 생성

   ```python
   # boards/views.py
   def new(request):
       return render(request, 'boards/new.html')
   ```

3. template

   ```html
   <!-- boards/templates/boards/new.html -->
   <form action="/boards/complete/">
       제목 : <input type="text" name="title">
   </form>
   ```

   * form 태그에는 `action` 속성을 정의한다.
     * 사용자로부터 내용을 받아서 처리하는 url
   * input 태그에는 `name` 속성을 통해 사용자가 입력한 내용을 담을 변수 이름을 지정한다.
   * url 예시 :  `/boards/complete/?title=제목제목`

### 2. 사용자 요청 처리

1. urls.py 정의

   ```python
   # boards/urls.py
   path('complete/', views.complete)
   ```

2. views.py

   ```python
   # boards/views.py
   def complete(request):
       title = request.GET.get('title')
       context = {
   		'title': title
       }
       return render(request, 'boards/complete.html', context)
   ```

   * `request` 에는 요청과 관련된 정보들이 담긴 객체가 저장되어 있다.

3. template

   ```html
   <!-- boards/templates/boards/complete.html -->
   {{ title }}
   ```


