 docker build --target dev . -t server 
 docker run -it -v ${PWD}:/app server sh