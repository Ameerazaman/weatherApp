A mobile-friendly weather application built with React.js, Tailwind CSS, Node.js, axios that fetches weather data from the OpenWeatherMap API. The app displays the current weather, stores historical weather data in a database, and allows users to filter and view past weather data for selected locations.

Tech Stack

Frontend: React.js, Tailwind CSS, Axios, axios interceptors Backend: Node.js, express Database: MongoDB API: OpenWeatherMap API (Free API key required) State Management: useState Styling: Tailwind CSS

Features

Repostry Pattern: The business logic is kept separate from the data access code, leading to better organization and easier maintenance. Weather Data: Fetch and display the current temperature, weather description, and a corresponding weather icon from the OpenWeatherMap API. Responsive UI: Clean, mobile-friendly interface designed with Tailwind CSS. Error Handling: Proper error handling for network requests and failed API calls. Location Filter: Filter and display weather data for historical locations: Delhi, Moscow, Paris, New York, Sydney, and Riyadh. Date Range Filter: Users can filter weather data by selecting a "From" and "To" date range. The date range is validated (max 30 days). Historical Data: View past weather data stored in a database, organized and presented in a table.