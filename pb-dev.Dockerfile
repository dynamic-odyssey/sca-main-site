FROM golang:latest

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    zip \
    vim \
    unzip \
    git \
    curl \
    && apt-get clean

RUN mkdir /pocketbase /pb-dev

# Set working directory
WORKDIR /pb-dev

# cmd to keep container running
CMD tail -f /dev/null