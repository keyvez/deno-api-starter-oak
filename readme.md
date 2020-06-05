# Deno REST API using OAK

<img src="https://deno.land/images/deno_logo.png" alt="logo" width="300"/>

[oak](https://github.com/oakserver/oak) is a middleware framework and router middleware for DENO, inspired by popular node.js framework [Koa](https://koajs.com/) and [@koa/router](https://github.com/koajs/router/). This is a starter project to create deno rest API using oak. 

## Important links
 1) [Setup](#setup)
 2) [Migration](#migration)
 3) [Modules](#modules)
 4) [ToDo](#todos)

## Setup
We can run the project **with/ with out docker**. 
- **Pre-requisited**
    - For dockerized environment we need 
        - docker, 
        - docker-compose installed.
    - To run api server with out docker we need
        - mysql server running &
        - deno run time intstalled
- **Configuration**
    - In application root, rename example env file `env.example` to `.env`.
    - Example env file contains mysql credentials for dockerized environment. For non-docker setup, **update mysql credentials** here.
- **Run API**
    - **For docker**: Up docker-compose, this will create a docker container with the database with the given name in env. 
    ``` 
    $ docker-compose up --build
    ```

    - For non docker run api server with deno run timeß
    ```
    $ deno run --allow-read --allow-net app.ts
    ```
- **API** 
    - Browse `api` at [http://localhost:8000](http://localhost:8000)
    - Browse (for docker only) db `adminer` at [http://localhost:8080](http://localhost:8080)

### Migration 
We use [nessie](https://deno.land/x/nessie) to manage database migration. 
- In the application root, we have `nessie.config.ts`. Make sure to update this with the DB credentials. 
- Run the following command to run the migration. Migration should create necessary tables and dump the data.
```
$ deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate
```
With this, the user table should be created and dumped with some user list.

- Further, To add new migration, for example to create new product table run
```
deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts make create_product
```

## Modules


| Package  | Purpose |
| ---------|---------|
|[oak@v5.0.0](https://deno.land/x/oak@v5.0.0/mod.ts)| Deno middleware framework|
|[dotenv@v0.4.2](https://deno.land/x/dotenv@v0.4.2/mod.ts)| Read env variables|
|[mysql@2.2.0](https://deno.land/x/mysql@2.2.0/mod.ts)|MySQL driver for Deno|
|[nessie](https://deno.land/x/nessie/mod.ts)| DB migration tool for Deno|

## Middlewares
- Middlewares are defined in `middlewares/` folder.
- Sample middleware added
    - [Logger Middleware](/middlewares/logger.middleware.ts)
    - [Timing Middleware](/middlewares/timing.middleware.ts)
    - [Error Middlerware](/middlewares/error.middleware.ts)
- [More details on writing middleware](https://deno.land/x/oak#application-middleware-and-context).

## ToDo

- [ ] Open API integration
- [ ] Unit Testing
- [ ] API Doc
- [ ] Validation
- [ ] JWT Auth
- [ ] Logger
