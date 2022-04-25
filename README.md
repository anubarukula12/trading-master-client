# <span style="color:gray">**TradingMaster** Anuradha Barukula

---

# <span style="color:grey"> _Technologies Used_

## TradingMaster is a full-stack MERN application.The MERN stack is a webdevelopment framework made up of the stack of MongoDB, Express.js, React.js, and Nodejs.

# <span style="color:grey">_Description_

In TradingMaster the user registers and logins to see his stocks,portfolio,portfolioperfrmonance and EOD stock data.

- The admin has access to create stocks if does't exists,create record,upload the EOD stocks excel file to teh database.Admin has access to update the stocks to the database.
- User Authentication-JWT
  -
  ***

# <span style="color:grey">_Project structure_

## trading-master-client- **Holds the client application**

- public-This holds all our static files
  -
- src
  -
  * **<span style="color:green">assests**-This folder holds images and css files
    -
  * **<span style="color:green">components**-This folder holds all of the components that will make up our views
    -
  * **<span style="color:green">routes**-This folder holds all of our HTTP to URL path associations for each unique url
    -
  * **<span style="color:green">App.js**-This is what renders all of our browser routes and renders views
    -
  * **<span style="color:green">index.js**-This is what renders the react app by rendering App.js,should not change 
    -
    **<span style="color:green">package.json**-Defines npm behaviors and packages for the client
    -
   ***

## trading-master-server-**Holds the server application**

- **<span style="color:green">config**-Defines npm behaviors and packages for the client
  -
- **<span style="color:green">controllers** - These hold all of the callback functions that each route will call
  -
- ## **<span style="color:green">models** - This holds all of our data models
- ## **<span style="color:green">routes** - This holds all of our HTTP to URL path associations for each unique url
- **<span style="color:green">server.js** - Defines npm behaviors and packages for the client
    -
  **<span style="color:green">package.json** - Defines npm behaviors and
 the scripts
    -
 ---

# <span style="color:grey"> _Run the Application_

- **Client-side usage(PORT: 3000)**
    -
  * **$cd trading-master-client** (go to the client folder)
  * **$npm i** (npm install packages)
  * **$npm start**

  ***

- **Server-side usage(PORT: 5000)**
  -
  * **$cd trading-master-server** (go to the client folder)
  * **$npm i** (npm install packages)
  * **$npm run serve**
  ***
# <span style="color:grey"> _Dependencies_
  | Client-side                       | Server-side             |
  | :-------------------------------- | :---------------------- |
  | axios : "^0.26.1"                 | bcrypt                  |
  | react : "^18.00"                  | cors : "^2.8.5"         |
  | react-dom : "^1.1.0"              | dotenv : "^16.0.0"      |
  | react-excel-renderer:"1.1.0"      | express : "^4.17.3"     |
  | recat-hook-form:"^7.29.0"         | jsonwebtoken : "^8.5.1" |
  | react-icons:"^4.3.1"              | mongoose : "^6.2.10"    |
  | react-bootstrap:"^0.26.1"         | nodemon : "^2.0.15"     |
  | react-router-dom:"^6.2.2"         |
  | react-scripts:"5.0.0"             |
  | react-social-login-buttons:"3.6.0 |

---

# <span style="color:grey"> _License_

## Copyright © 2022 Anuradha Barukula
