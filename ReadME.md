# You can view an online demo [here](https://mydemo.herokuapp.com)

# Run the porject locally:

-   Get access to a running mongodb instance

-   Under `/server` create a `.env` and add the following

    ```
    MONGO_HOST={{YOUR_MONGODB_HOST}}
    MONGO_USER={{YOUR_MONGODB_USERNAME}}
    MONGO_PASS={{YOUR_MONGODB_PASSWORD}}
    MONGO_AUTH_SOURCE={{AUTH_DATABASE}}
    ```

-   Under `/server` run `yarn start` or `yarn dev` for watch mode

-   Under `/client` create a `.env.local` and add the following

    ```
    REACT_APP_API_HOST=http://localhost:8000
    ```

-   Under `/client` run `yarn start`
