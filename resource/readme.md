# Upskilling Mini Project Challenge Phase 1
## 1. Pre-requisite
1. Install Node.js (can skip if already have Node.js installed)
    - Go to [Node.js](https://nodejs.org/en/download/) download page
2. Open command prompt or terminal in Visual Studio Code, install `live-preview` from `npm` as below
    ```sh
    npm install -g live-server
    ```

## 2. Run web server

1. Open terminal in Visual Studio Code. Make sure Visual Studio Code is opened in `\resource` folder.

    ```sh
    live-server --host=localhost --port=51632
    ```

**or**

2. Windows Command Prompt, type command as below

    ```sh
    cd [path to resource folder]
    live-server --host=localhost --port=51632
    ```

Example:

```sh
cd D:\Project\Upskilling\resource\
live-server --host=localhost --port=51632
```

## 3. Run API server
1. Open another terminal in Visual Studio Code or Windows command prompt, change directory to API folder
    ```sh
    cd [API Jar folder path]
    ```

2. Run following command
    ```sh
    java -jar "upskilling-0.0.1-SNAPSHOT.jar"
    ```

Example:
```sh
cd D:\Project\Upskilling\backend\
java -jar "upskilling-0.0.1-SNAPSHOT.jar"
```

## 4. What's next
Open a browser and enter [http://localhost:51632](http://localhost:51632) in the address bar. You should see main empty page of this project.

You can start make changes in `dashboard.html` and  `forms.html` files. All javascript functionality should be added inside `<script>` tag in respective html files. 

Custom styling (CSS) can be included in `assets\css\custom.css`.

`index.html` just served as main page to the application, no change is needed in this file.

## 5. Additional info
1. Bootstrap 4 reference
    - [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
2. Chart.js reference
    - [Chart.js](https://www.chartjs.org/docs/latest/)
3. `live-server` reference
    - [live-server](https://www.npmjs.com/package/live-server)
    - `live-server` usage is just to avoid CORS issue by the browser when querying the API