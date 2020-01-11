## Kong Micro Front End Example
An example implementation of Micro Front Ends using kong to route to the different front ends.

#### Getting started

Before running anythign make sure you are on the correct node version. There is a .nvmrc file so you can run `nvm use` if you have it installed. Next install all the dependencies by running `npm install` in the root directory.

A docker-compose file is provided in the root of this project. Install Docker and run `dockegitr-compose up -d` inside this project. Only Kong is exposed by docker and it is available at <http://localhost:8000/>.

#### Archectecture

The book data is provided by `book-api` which is used by both front ends. The root list view and the book detail view are both seporate applications called `book-list` and `book-detail` respectivly. Both view services have a footer component, this is provided by `footer`. `footer` returns partial HTML, services request this content and embed it in their response HTML.

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbkEoQnJvd3NlcikgLS0-IEJbS29uZ11cbkIgLS0-IENbYm9vay1saXN0XVxuQyAtLT4gRVtmb290ZXJdXG5DIC0tPiBGW2Jvb2stYXBpXVxuQiAtLT4gRFtib29rLWRldGFpbF1cbkQgLS0-IEVcbkQgLS0-IEZcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbkEoQnJvd3NlcikgLS0-IEJbS29uZ11cbkIgLS0-IENbYm9vay1saXN0XVxuQyAtLT4gRVtmb290ZXJdXG5DIC0tPiBGW2Jvb2stYXBpXVxuQiAtLT4gRFtib29rLWRldGFpbF1cbkQgLS0-IEVcbkQgLS0-IEZcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In19)