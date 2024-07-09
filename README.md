Developed by Aman Hiran Purohit (@purohitamann)
Time spent: **👉🏿 18** hours

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ... 👉🏿 GIPHY

# Creatorverse

Creatorverse is a dynamic web application built to showcase and manage a collection of your favorite content creators, including Twitch streamers, YouTube channels, Instagram personalities, TikTok accounts, and more. This app allows users to create, read, update, and delete (CRUD) content creators, offering a comprehensive platform for organizing and sharing creators worth following.

## Tech Stack

- **Frontend Framework**: React
- **Routing**: React Router
- **Database**: Supabase
- **API Calls**: Axios or Fetch with async/await pattern
- **Styling**: Optional usage of PicoCSS for enhanced styling
- **State Management**: React Hooks (useState, useEffect)

## Features

### Core Features

1. **Logical Component Structure**: The app is built using a modular component structure in React, ensuring maintainability and scalability.
2. **Home Page Display**: Displays at least five content creators with the following details:
   - Name
   - URL (link to their channel or page)
   - Description of their content
3. **Content Creator Details Page**: Each content creator has a unique URL, leading to a details page that includes their name, URL, and description.
4. **CRUD Operations**:
   - **Create**: Users can add new content creators by entering their name, URL, description, and optionally an image URL.
   - **Read**: View a list of all content creators on the homepage and detailed information on individual pages.
   - **Update**: Users can edit a content creator's name, URL, and description.
   - **Delete**: Users can delete a content creator from the list.
5. **Async API Calls**: Utilizes async/await pattern for API calls to the Supabase backend to handle data storage and retrieval efficiently.

### Stretch Features

1. **PicoCSS Styling**: styled HTML elements using PicoCSS for a modern and clean user interface.
2. **Creative Content Display**: Content creator items can be displayed in a card format instead of a list for a more engaging user experience.
3. **Image Display**: Shows an image of each content creator on their content creator card.

## How to Use

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/creatorverse.git
cd creatorverse

## License

Copyright [👉🏿 2024] [👉🏿 Aman Hiran Purohit]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
```
