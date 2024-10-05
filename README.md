# Sentiment Analyzer

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Overview
**Sentiment Analyzer** is a web application that allows users to input text and analyze its sentiment. The app also fetches a random inspirational quote along with the author's name each time it loads, providing users with motivation. The sentiment analysis categorizes the input as **Positive**, **Negative**, or **Neutral**, with a detailed breakdown of positive and negative words used.

## Features
- **Daily Quote**: Fetches a random quote and displays it with the author’s name.
- **Sentiment Analysis**: Detects the sentiment of user-inputted text (Positive, Negative, or Neutral).
- **Word Count**: Shows the number of positive and negative words in the input.
- **Interactive UI**: A clean and user-friendly interface with real-time analysis.

## Technologies Used

### Frontend:
- **React**: A JavaScript library for building user interfaces.
- **CSS**: For designing and styling the application.

### Backend:
- **Node.js**: JavaScript runtime for the server-side.
- **Express.js**: Web framework for Node.js.
- **node-fetch**: Fetch API for Node.js to retrieve external data.
- **Quotable API**: Used to fetch random quotes for display.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Ritika8081/Health.git
cd Health
```
### 2. Install dependencies
Frontend:
```
npm install
```

Backend:
```
cd backend
npm install
```

### 3. Start the servers
   
Frontend (React):

```
npm start
```

Backend (Express):

```
node server.js
```

### Contribution

If you'd like to contribute to this project, feel free to open a pull request with your proposed changes.
