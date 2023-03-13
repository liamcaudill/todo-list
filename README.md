TODO LIST
---------

### How to build docker images


This will build a docker image with the tag (-t) named `todo-list` and be available to run locally
`docker build -t todo-list .`

You can view all images by saying `docker images`

```
REPOSITORY                                                TAG                                                                          IMAGE ID       CREATED         SIZE
todo-list                                                 latest                                                                       4eb49290971a   2 minutes ago   182MB
```

In order to run the image, which makes it a container you can say 
`docker run todo-list:latest`