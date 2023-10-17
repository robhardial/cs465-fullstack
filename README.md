1.Compare and contrast the types of front-end development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). 

Each route in the Express application corresponded to a separate HTML file. Navigation between pages required full page reloads, with each navigation triggering a new request to the server. 

JavaScript with Handlebars uses client-side rendering. The initial HTML page was loaded, and then JavaScript fetched data from the server and uses Handlebars templates to update the page content. 

The admin SPA loaded a single HTML page initially and then dynamically updated content through JavaScript. It used client-side routing to navigate between different components. 

2. Why did the backend use a NoSQL MongoDB database? 

The backend used a MongoDB database because you can store data without a predefined structure. This flexibility allows the type of stored data to change over time and store different types of data in the same database.  

3. How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? 

JSON is a data format for structuring data and JavaScript is a programming language. JSON is used for storing data in NoSQL databases such as MongoDB. JSON ties together the frontend and backend because it is used for exchanging data between the web server and the web page. The server sends JSON data to the client side, which the client can then parse and use.  

4. Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components. 

An instance in the full stack process when I refactored code to improve functionality was when I implemented Handlebars for loading the client-side page. Handlebars allows you to implement dynamic content into your HTML templates. This allowed me to pass data from the server to my templates and easily display it. This promotes code modularity and reduces redundancy. In plain HTML you would need to manually copy and paste code making updates more challenging. 

5. Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application. 

The HTTP methods we used in the application included GET, PUT, POST, and DELETE. These methods define the actions that clients can perform on the server. Endpoints are specific routes on the server that are associated with specific resources or functions. Security in a full stack application protect against various threats and ensure data integrity and user privacy. In the application we implemented user authentication in the single page application to prevent unauthorized access to editing and creating new trips. 

6. How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field? 

Taking this full stack course has been incredibly beneficial for my professional development and has significantly enhanced my experience. This course has provided me with a skill set that covers both front-end and back-end development. I've become proficient in using Express.js for backend development and Angular.js for frontend development. It has also equipped me with the knowledge to work with databases effectively. In conclusion, this full-stack course has been a great experience for me. It has not only given me the technical skills required to excel in my career but has also provided me with the confidence and expertise to take on a variety of exciting projects. 
