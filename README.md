# 🚀 Blog Content Generator

AI-powered blog content generation web app using GPT-4 and Unsplash API. Generate SEO-optimized blog posts with beautiful thumbnail images in seconds!

## ✨ Features

- **AI-Powered Content Generation**: Uses OpenAI's GPT-4 to create professional blog content
- **SEO Optimized**: Generates SEO-friendly titles and well-structured content
- **Complete Blog Structure**: 
  - Engaging title
  - Introduction, body, and conclusion
  - One-sentence summary
  - 5 relevant hashtags
  - Image description for thumbnails
- **Visual Content**: Integrates Unsplash API to find perfect thumbnail images
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Easy to Use**: Simple keyword input generates complete blog content

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Axios
- Modern CSS with animations

### Backend
- Node.js
- Express
- OpenAI API (GPT-4)
- Unsplash API

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key ([Get it here](https://platform.openai.com/api-keys))
- Unsplash API access key ([Get it here](https://unsplash.com/developers))

## 🚀 Getting Started

### 1. Clone or Download

```bash
cd vibe-1123-acorn-blog-unsplash
```

### 2. Install Dependencies

Install both backend and frontend dependencies:

```bash
npm run install-all
```

Or manually:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file and add your API keys:

```env
# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key_here

# Unsplash API Key
UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here

# Server Port (optional)
PORT=3001
```

#### Getting API Keys

**OpenAI API Key:**
1. Go to [OpenAI Platform](https://platform.openai.com)
2. Sign up or log in
3. Navigate to [API Keys](https://platform.openai.com/api-keys)
4. Click "Create new secret key"
5. Copy and save your key

**Unsplash Access Key:**
1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Sign up or log in
3. Create a new application
4. Copy your "Access Key"

### 4. Run the Application

Start both backend and frontend servers:

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:3001`
- Frontend dev server on `http://localhost:5173`

Or run them separately:

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

### 5. Open in Browser

Navigate to `http://localhost:5173` in your web browser.

## 💻 Usage

1. **Enter a Keyword**: Type a topic keyword in the input field (e.g., "AI Technology", "Travel Tips", "Healthy Lifestyle")

2. **Generate Content**: Click the "Generate Content" button

3. **View Results**: 
   - SEO-optimized blog title
   - Complete blog post with introduction, body, and conclusion
   - Summary and hashtags
   - Related thumbnail images from Unsplash

4. **Select Image**: Click on any thumbnail image to view it in full size

## 📁 Project Structure

```
vibe-1123-acorn-blog-unsplash/
├── client/                      # Frontend React app
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── KeywordInput.jsx
│   │   │   ├── ContentDisplay.jsx
│   │   │   └── ImageGallery.jsx
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/                     # Backend Express server
│   └── index.js               # API routes and server setup
├── .env                       # Environment variables (create this)
├── .env.example              # Example environment file
├── .gitignore
├── package.json
└── README.md
```

## 🔧 API Endpoints

### Backend API

**Generate Content**
```
POST /api/generate-content
Body: { "keyword": "your topic" }
Response: { 
  "success": true, 
  "data": { 
    title, introduction, body, 
    conclusion, summary, hashtags, imagePrompt 
  } 
}
```

**Search Images**
```
POST /api/search-images
Body: { "query": "search term" }
Response: { 
  "success": true, 
  "data": [array of image objects] 
}
```

**Health Check**
```
GET /api/health
Response: { "status": "ok", "message": "Server is running" }
```

## 🎨 Customization

### Changing GPT Model

Edit `server/index.js` and modify the model parameter:

```javascript
const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini', // Change to 'gpt-4', 'gpt-3.5-turbo', etc.
  // ... other parameters
});
```

### Adjusting Image Results

Edit the `per_page` parameter in `server/index.js`:

```javascript
params: {
  query: query,
  per_page: 9, // Change number of images returned
  orientation: 'landscape',
}
```

### Styling

Modify CSS files in `client/src/` and `client/src/components/` to customize the look and feel.

## 🐛 Troubleshooting

**Issue: "Failed to generate content"**
- Check if your OpenAI API key is valid
- Ensure you have sufficient API credits
- Check the server console for detailed error messages

**Issue: "Failed to search images"**
- Verify your Unsplash Access Key
- Check if you've exceeded Unsplash API rate limits (50 requests/hour for free tier)

**Issue: Server won't start**
- Make sure port 3001 is not in use
- Check if all dependencies are installed
- Verify `.env` file exists and is properly formatted

**Issue: Frontend can't connect to backend**
- Ensure both servers are running
- Check that backend is running on port 3001
- Verify proxy settings in `client/vite.config.js`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

If you have any questions or feedback, feel free to reach out!

## 🙏 Acknowledgments

- [OpenAI](https://openai.com) for the GPT API
- [Unsplash](https://unsplash.com) for the beautiful images
- [Vite](https://vitejs.dev) for the blazing fast build tool
- [React](https://react.dev) for the UI framework

---

Made with ❤️ and AI

