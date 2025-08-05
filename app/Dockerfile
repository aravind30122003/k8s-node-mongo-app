# base image 
FROM node:14 
                    
# working directory
WORKDIR /app

#copy the path
COPY server.js .                 

# packages installation
RUN npm install express mongoose 

# port 
EXPOSE 3000                       

# entry point
CMD ["node", "server.js"]        
