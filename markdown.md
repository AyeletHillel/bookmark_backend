### Bookmark API Backend

##### Links
- GitHub: https://github.com/AyeletHillel/bookmark_backend
- Render: https://bookmar-app-backend.onrender.com/

##### Dependencies
- Node
- Express
    - dotenv
    - Mongoose
    - Express
    - Cors
    - Morgan

##### BookMark Mongoose Database Model 
-   database name:  
        BookMark  
-   Schema
        title: {type: String},
        url: {type: String}

#### Routes 

| Routes | Method | EndPoints | Expected Result |
|--------|--------|-----------|-----------------|
| Index | GET | /bookmark | Gets all entries |
| Create | POST | /bookmark | Creates a new entry |
| Show | GET | /bookmark:id | Gets 1 entry
| Update | PUT | /bookmark:id | Updates Existing Entry |
| Delete | DELETE | /bookmark:id | Removes entry from database
