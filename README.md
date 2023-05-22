# Git

## 1 - Configuração do usuário das alterações

Fonte: [Configuração do git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

### 1.1. Setando o nome

```js
git config --global user.name "Fulano de Tal"
```
### 1.2. Setando o email

```js
git config --global user.email fulanodetal@exemplo.br
```

## Subir alterações para o repositório remoto

### 1 - Verficar as alterações:
```js
git status
```
### 2 - Adiconar as alterações que serão enviadas

```js
git add .
```

### 3 - Conferir as alterações enviadas

```js
git status
```
### 4 - Preparar as alterações para serem enviadas

```js
git commit -m "comentario"
```
### 5 - Conferir a preparação

```js
git status
```
### 6 - Envia as alterações:

```js
git push
```

## 2 - Subir ptojeto react com vite a partir de um repositório remoto (GitHub)

### 2.1 - Inicializar o repositório local

```js
git init
```

### 2.2 - Adicionar link do repositório remoto

Deve-se criar o repositório no GitHub

```js
git remote add origin [link do repositório GitHub]
```
### 2.3 - Setar o link da branch com o link do repositório

Deve-se criar o repositório no GitHub

```js
git push --set-upstream origin master
```
![image]()

### 2.4 - Repetir a partir do item: 2 - Adiconar as alterações que serão enviadas
