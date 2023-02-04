FROM mongo

COPY vise.json /vise.json
COPY visenovi.json /visenovi.json
COPY users.json /users.json
COPY pendingoffers.json /pendingoffers.json

CMD mongoimport 'mongodb://mongodb:27017/test' --collection offers --drop --jsonArray --file /vise.json &&  \
     mongoimport 'mongodb://mongodb:27017/test' --collection offers  --jsonArray --file /visenovi.json &&    \
     mongoimport 'mongodb://mongodb:27017/test' --collection users  --drop --jsonArray --file /users.json &&   \
     mongoimport 'mongodb://mongodb:27017/test' --collection pendingoffers  --drop --jsonArray --file /pendingoffers.json 


