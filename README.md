# Todo List App
> Made with HTML, CSS, Javascript, Node, ExpressJS, and EJS(Embedded Javascript).

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
![Screenshot-1](./public/css/assets/Readme%20screenshots/Screenshot%20(1135).png)

#### 2. Adding tasks to list
![Screenshot-2](./public/css/assets/Readme%20screenshots/Screenshot%20(1137).png)

#### 3. Work List
![Screenshot-3](./public/css/assets/Readme%20screenshots/Screenshot%20(1139).png)

#### 4. Get Day function using an exported module
![Screenshot-4](./public/css/assets/Readme%20screenshots/Screenshot%20(1142).png)

PS: You are free to contribute to this project via a PR.