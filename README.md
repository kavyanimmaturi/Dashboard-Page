# Title:
     Dashboard Page [Front-End Design]

## Objective:
    
    Develop a dashboard page with specific functionalities like focus on front-end development,
    emphasize user interface design,data handling, and client-side data persistence.

## Links:

      Github Link - https://github.com/kavyanimmaturi/Dashboard-Page.git
      Project Link - https://dashboard-page-beryl.vercel.app/

## Platform Used:
       Visual Studio

## Tech Stack: 

     * ReactJs - For developing the user interface.
     * CSS - For styling the page.   

## Project Structure: 
    
     1. Profile Screen: Displays the first record from the user's dummy api.
              User's Dummy Api -> [https://jsonplaceholder.typicode.com/users]
             
     2. Comments Dashboard: Display all the comments from the comments dummy api.
             Comments Dashboard Api -> [https://jsonplaceholder.typicode.com/comments]

### How to Start:
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Profile Screen Route -> [http://localhost:3000/] 
Comments Dashboard -> [http://localhost:3000/dashboard]

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Functionality:
    
      1.Profile Screen: 
           * Load's the user's data from the dummy users api.And use the first record from that
           * The Screen is not editable
           * Functionality has been added to go back to the dashboard page
           * Integrated proper routing between profile -> dashboard page
      
      2.Comments Screen: 
           * Get the 500 records of data population from the dummy comments api, and represent them 
             as a paginated data grid. The page options are 10, 50, 100.
           * Implemented search logic for name,email and comments.
           * When we refresh the page it persists the search, sort, page and page size filters.
