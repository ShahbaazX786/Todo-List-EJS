# Todo List App V3 (MEEN stack)
> Made with HTML, CSS, Javascript, Node, ExpressJS, and EJS(Embedded Javascript).
inshort MEEN stack lol.
- M --> MongoDB
- E --> ExpressJS
- E --> EJS
- N --> NodeJS

##### [Link to the deployed version](https://todolistusingejs2022.herokuapp.com/)
>Note: Link available only upto November 2022 due to heroku free tier decesions.

### EJS

EJS is a templating language which partitions our heavy html websites into smaller chunks/components(EJS files) which can be later loaded as templates dynamically (similar to modern frameworks like angular).

- We can reuse code as templates (by using partitions/layouts).
- We can reduce complexity thereby making it easier to debug.
- We can reduce code size.
- Simple syntax.

- We have to use scriplets(<% %>) only when we are using conditional statements(if,else,for,while,do-while etc).
- Can pass data from server(app.js) to view(index.ejs) via (<%= variable-name %>) and res.render("index",variable-name:"Hello Boii") by using get method and redirecting to home route('/').
- Can pass data from view(index.ejs) to server(app.js) via form(in index.ejs) and post method(in app.js).
### Important rules:
- We must place all our ejs files in view folder else you'll face error.
- We must set the view engine to ejs in express file(app.js).
Using :```app.set("view engine", "ejs");```
- Place all the static files like styles.css, assets(images, icons, svgs etc) in a public folder and serve those files aswell with your express server(app.js) to get the styles applied correctly.
Using:```app.use(express.static("public"));``` 

#### 1. Home List Page
![Screenshot-1](./public/css/assets/Readme%20screenshots/1.png)

#### 2. Adding tasks to list
![Screenshot-2](./public/css/assets/Readme%20screenshots/2.png)

#### 3. Work List
![Screenshot-3](./public/css/assets/Readme%20screenshots/3.png)

#### 4. Get Day function using an exported module
![Screenshot-4](./public/css/assets/Readme%20screenshots/4.png)

PS: You are free to contribute to this project via a PR.

#### 5. Using MongoDB for persistent storage
Used MongoDB atlas free tier to host our database and also to manage data need.(Adding,deleting the tasks from the list also maintaining other dynamic routing pages.)
![Screenshot-5](./public/css/assets/Readme%20screenshots/5.png)

#### 6. Using Heroku for server(nodejs app)
Used Heroku to host our node app (server environment) which returns response when we send some requests to our app.
![Screenshot-6](./public/css/assets/Readme%20screenshots/6.png)