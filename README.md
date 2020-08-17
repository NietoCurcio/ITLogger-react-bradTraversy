# ITLogger

A project do deal with logs about technical problems or situations that require attention.

## Server side

The server side is made with [json-server](https://github.com/typicode/json-server) package to get a full fake REST API (mock API), then we have the following JSON in a db.json file

```json
{
  "logs": [
    {
      "message": "Change network card in server 007",
      "attention": false,
      "tech": "Sam Smith",
      "date": "2020-06-26T02:26:10.113Z",
      "id": 1
    },
    {
      "id": 2,
      "message": "fixed hard drive on workstation 002",
      "attention": false,
      "tech": "Legolas Elf",
      "date": "2020-06-26T02:55:08.201Z"
    },
    {
      "message": "1122 wireless down",
      "attention": true,
      "tech": "Legolas Elf",
      "date": "2020-06-26T02:26:47.121Z",
      "id": 3
    }
  ],
  "techs": [
```

## Client side

Client side is a react app and to handle state we use Redux state management

![]()

On the front end we have [materiazecss](https://materializecss.com/) library to deal with [modals](https://materializecss.com/modals.html) and [toasts](https://materializecss.com/toasts.html)

![]()

### Getting started

```sh
npm install
```
And then
```sh
npm run dev
```
To run server and client [oncurrently](https://github.com/kimmobrunfeldt/concurrently)
