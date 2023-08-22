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

COPY ./pb /pocketbase

# make pocketbase executable
RUN chmod +x /pocketbase/pocketbase

# Set working directory
WORKDIR /pocketbase

# cmd to keep container running
CMD ["/pocketbase/pocketbase", "serve", "--http=0.0.0.0:8090"]