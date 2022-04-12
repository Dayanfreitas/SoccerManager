## DOCKER
Comando para levantar os serviços

```
$ docker-compose up -d
```

### APP

Acessar o aplicativo
```
$ docker exec -it <name_front> /bin/bash

$ cd my-app
$ npm start
```

### SERVICE

Acessar o serviço de back-end
```
$ docker exec -it <name_back> /bin/bash
$ cd futapi
$ rails s -b 0.0.0.0
```
