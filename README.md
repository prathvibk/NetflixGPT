# 🎬 NetflixGPT

A Netflix-inspired streaming platform with AI-powered movie search.

## 🚀 Live Demo
[View Live](your-netlify-link-here)

## ✨ Features
- 🔐 User Authentication (Sign Up / Sign In / Sign Out)
- 🎥 Browse Movies (Now Playing, Popular, Top Rated)
- 🤖 AI-powered Movie Search using Gemini AI
- 🎬 Hero Banner with featured movie
- 📱 Responsive UI
- 🔄 Session Persistence

## 🛠️ Tech Stack
| Technology | Purpose |
|---|---|
| React.js | Frontend Library |
| Redux Toolkit | State Management |
| Tailwind CSS | Styling |
| Firebase Auth | Authentication |
| TMDB API | Movie Data |
| Gemini AI | AI Movie Search |
| Vite | Build Tool |

## 📁 Project Structure
src/
├── components/
│   ├── Login.jsx
│   ├── Browse.jsx
│   ├── HeroBanner.jsx
│   └── GPTSearch.jsx
├── hooks/
│   ├── useNowPlayingMovies.js
│   ├── usePopularMovies.js
│   └── useTopRatedMovies.js
├── store/
│   ├── appStore.js
│   ├── userSlice.js
│   ├── moviesSlice.js
│   └── gptSlice.js
└── utils/
├── firebase.js
└── constants.js

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/netflixgpt.git
cd netflixgpt
```

2. Install dependencies
```bash
npm install
```

3. Create `src/utils/constants.js` and add your API keys:
```js
export const TMDB_API_KEY = "your_tmdb_api_key";
export const GEMINI_API_KEY = "your_gemini_api_key";
```

4. Create Firebase project and add config to `src/utils/firebase.js`

5. Run the app
```bash
npm run dev
```

## 🔑 Environment Variables Required
- TMDB API Key → [themoviedb.org](https://www.themoviedb.org)
- Gemini API Key → [aistudio.google.com](https://aistudio.google.com)
- Firebase Config → [firebase.google.com](https://firebase.google.com)

## 📸 Screenshots
![Login Page](screenshots/login.png)
![Browse Page](screenshots/browse.png)
![GPT Search](screenshots/gpt-search.png)

## 🙏 Acknowledgements
- [TMDB](https://www.themoviedb.org) for movie data
- [Firebase](https://firebase.google.com) for authentication
- [Google Gemini](https://aistudio.google.com) for AI search

## 📄 License
MIT License

