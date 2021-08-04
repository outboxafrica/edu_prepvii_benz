FROM gitpod/workspace-full
USER gitpod

RUN mkdir -p /tmp/mongodb && \
    cd /tmp/mongodb && \
    wget -qOmongodb.tgz https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2004-4.4.2.tgz && \
    tar xf mongodb.tgz && \
    cd mongodb-* && \
    sudo cp bin/* /usr/local/bin/ && \
    rm -rf /tmp/mongodb && \
    sudo mkdir -p /data/db && \
    sudo chown gitpod:gitpod -R /data/db
    
#Install Google key
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 

RUN sudo apt-get update && \
    sudo apt-get install -y zsh

# set the zsh theme 
ENV ZSH_THEME cloud


#install NG CLI
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN npm i npm -g

RUN wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh

RUN sh install.sh

RUN curl https://cli-assets.heroku.com/install.sh | sh
