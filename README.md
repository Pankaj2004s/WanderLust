# WanderLust

A full-stack travel listings web application where users can discover, add, and review travel destinations. Built with Node.js, Express, and MongoDB.

Live Demo: https://wanderlust-69pi.onrender.com

## Features

- Browse travel listings with images, location, price, and description
- Create, edit, and delete your own listings with image upload via Cloudinary
- User authentication — register, login, logout using Passport.js
- Leave reviews with star ratings on any listing
- Authorization — only the owner can edit or delete a listing or review
- Flash messages for success and error feedback
- Form validation using Joi on the server side and Bootstrap on the client side
- MVC folder structure for clean code organization

## Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Templating: EJS, EJS-Mate
- Authentication: Passport.js (Local Strategy)
- Image Upload: Cloudinary + Multer
- Validation: Joi
- Frontend: Bootstrap 5, custom CSS
- Other: Method-Override, Connect-Flash, Express-Session

## Installation

1. Clone the repository

git clone https://github.com/Pankaj2004s/WanderLust.git
cd WanderLust

2. Install dependencies

npm install

3. Create a .env file in the root directory and add the following variables

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
SECRET=your_session_secret
ATLASDB_URL=your_mongodb_atlas_connection_string
SEED_OWNER_ID=your_mongodb_user_id_for_seeding

Note: SEED_OWNER_ID is only needed when running the seed script to populate sample data.

4. Run the app

node app.js

5. Open your browser and go to http://localhost:8080

## Future Work

- Add Mapbox integration to show listing location on an interactive map
- Improve overall UI/UX and responsive layout
- Add search and filter functionality by location, price, and category
- Add a user profile page showing all listings and reviews by that user
- Implement a booking or enquiry feature for listings

## Author
Pankaj Sharma