# WanderLust
A full-stack travel listings web application where users can browse, create, edit, and manage property listings.

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Templating: EJS, EJS-Mate
- Other: Method-Override (for PUT/PATCH/DELETE via forms)

## Features
- Browse all listings
- View detailed information about a single listing
- Create a new listing
- Edit an existing listing
- Reusable navbar and footer using EJS partials

## Project Structure
WanderLust/
├── init/ # Sample data and DB seeding script
├── models/ # Mongoose schemas
├── public/css/ # Stylesheets
├── views/
│ ├── includes/ # Navbar, footer partials
│ ├── layouts/ # Boilerplate layout
│ └── listings/ # Index, show, new, edit pages
└── app.js # Entry point


## Getting Started
1. Clone the repository

git clone https://github.com/Pankaj2004s/WanderLust.git

2. Install dependencies

npm install

3. Set up a `.env` file with your MongoDB connection string
4. Run the seeding script (optional)

node init/index.js

5. Start the server

node app.js


## Roadmap
- User authentication
- Image upload support
- Flash messages
- Map integration
- Reviews and ratings

## Author
Pankaj Sharma