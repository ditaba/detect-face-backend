FROM node:carbon

WORKDIR /home/dita/detect_face_backend

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
