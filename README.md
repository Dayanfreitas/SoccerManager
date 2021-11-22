##DOCKER

```
$ docker-compose up -d
```

## FRONT
```
$ docker exec -it front /bin/bash

$ cd my-app
$ npm start
```

## BACK

```
$ docker exec -it back /bin/bash
$ cd futapi
$ rails s -b 0.0.0.0
```
