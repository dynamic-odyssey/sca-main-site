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

COPY ./pb /pb-dev

RUN cd /pb-dev && bash ./scripts/build.sh

# Set working directory
WORKDIR /pocketbase

# cmd to keep container running
CMD ["/pocketbase/pocketbase", "serve", "--http=0.0.0.0:8090"]