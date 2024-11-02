Node.js Setup & Dependencies Guide
Basic Commands
Initialize Project
bashCopy# Create package.json (with questions)
npm init

# Create package.json with default values
npm init -y
Installing Dependencies
bashCopy# Install common dependencies
npm i cors morgan express mongoose dotenv colors
Dependencies Explained
CORS

Enables secure communication between different domains/ports
Essential for frontend-backend communication

Example Scenario:

Frontend: http://localhost:3000 (React app)
Backend: http://localhost:5000 (Express server)

Without CORS, browser error:
Copy🚫 Error: Access to fetch at 'http://localhost:5000/api/users' 
from origin 'http://localhost:3000' has been blocked by CORS policy
Basic Setup:
javascriptCopyconst express = require('express')
const cors = require('cors')
const app = express()

// Development - Allow all origins
app.use(cors())

// Production - Specific origin
app.use(cors({
  origin: 'http://localhost:3000'
}))
Morgan

HTTP request logger middleware
Tracks API requests and responses
Helps in debugging and monitoring

Basic Setup:
javascriptCopyconst express = require('express')
const morgan = require('morgan')
const app = express()

// Development logging
app.use(morgan('dev'))
Output Format:
bashCopyGET /api/users 200 10.231 ms - 1024
POST /api/login 401 3.428 ms - 89
More Dependencies

express: Web framework for Node.js
mongoose: MongoDB object modeling tool
dotenv: Loads environment variables
colors: Adds colors to console outputs

Getting Started

Clone repository
Run npm install
Create .env file
Run npm start

Contributing
Feel free to contribute to this project
License
MIT