FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    zip \
    vim \
    unzip \
    git \
    curl \
    && apt-get clean

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# source nvm. Install and use node v18.12.1
RUN /bin/bash -c "source $HOME/.nvm/nvm.sh && nvm install v18.12.1 && nvm use v18.12.1"

# Set working directory
WORKDIR /app

# cmd to keep container running
CMD tail -f /dev/null