FROM ruby:2.7.2
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV APP=/var/www
ENV HOME=/home/devel

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    openssh-server \
    sudo \
    cmake \
    locales \
    graphviz \
    libssl-dev \
    htop \
    libpq-dev \
    # mysql-client \
    postgresql-client \
    default-libmysqlclient-dev \
    libgdbm-dev \
    libmagic-dev \
    imagemagick \
    poppler-utils \
    nano \
    nodejs

RUN locale-gen en_US.UTF-8 && \
  localedef -c -i en_US -f UTF-8 en_US.UTF-8
ENV LANG=en_US.UTF-8 \
  LANGUAGE=en_US:en \
  LC_ALL=en_US.UTF-8

# skip installing gem documentation
RUN chmod 777 /usr/local/bundle && mkdir -p /usr/local/etc && { echo 'install: --no-document'; echo 'update: --no-document'; } >> /usr/local/etc/gemrc

RUN adduser --disabled-password --gecos '' devel \
  && usermod -a -G sudo devel \
  && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers \
  && echo 'devel:devel' | chpasswd

RUN mkdir -p $HOME \
    && mkdir -p $APP \
    && chown -R devel:devel $HOME \
    && chown -R devel:devel $APP

USER devel:devel
WORKDIR $APP


# GEM
RUN echo "gem: --no-document" > ~/.gemrc

# RUN gem install nokogiri -v 1.10.10
# RUN gem install rdoc:3.12.2
# RUN gem install pagseguro-oficial:2.6.0
# RUN gem install twitter:5.9.0

# DOWNLOAD ELASTICSEARCH
# RUN wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-0.17.7.zip -O /tmp/elasticsearch.zip
# RUN mkdir ~/lib
# RUN unzip /tmp/elasticsearch.zip -d ~/lib
# RUN sudo apt-get install openjdk-8-jdk -y

# Expose ports.
EXPOSE 3000
# EXPOSE 9200
# EXPOSE 9292

CMD /bin/bash
