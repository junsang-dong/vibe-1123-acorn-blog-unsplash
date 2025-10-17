# ⚡ Quick Start Guide

Get your Blog Content Generator up and running in 5 minutes!

## Step-by-Step Setup

### 1️⃣ Install Dependencies (2 minutes)

```bash
npm run install-all
```

This installs all required packages for both backend and frontend.

### 2️⃣ Set Up API Keys (2 minutes)

Create a `.env` file:

```bash
# Copy the template
cp env.template .env

# Open in your editor
nano .env
# or
open .env
```

Add your API keys:
- **OpenAI**: Get from https://platform.openai.com/api-keys
- **Unsplash**: Get from https://unsplash.com/developers

Your `.env` should look like:
```env
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxx
UNSPLASH_ACCESS_KEY=xxxxxxxxxxxxxxxx
PORT=3001
```

### 3️⃣ Start the App (30 seconds)

```bash
npm run dev
```

This starts both the backend server (port 3001) and frontend dev server (port 5173).

### 4️⃣ Use the App

1. Open http://localhost:5173 in your browser
2. Enter a keyword (e.g., "Artificial Intelligence")
3. Click "Generate Content"
4. Wait ~10-15 seconds for AI to work its magic
5. Enjoy your generated blog content and images!

## Example Keywords to Try

- "Artificial Intelligence"
- "Healthy Lifestyle"
- "Travel Tips"
- "Digital Marketing"
- "Climate Change"
- "Productivity Hacks"
- "Sustainable Living"
- "Remote Work"

## Common Issues

**Can't start the server?**
```bash
# Make sure port 3001 isn't in use
lsof -ti:3001 | xargs kill -9

# Try again
npm run dev
```

**API errors?**
- Check your `.env` file has correct API keys
- Make sure there are no spaces around the `=` sign
- Verify API keys are valid in your OpenAI/Unsplash dashboards

**Need to run separately?**
```bash
# Terminal 1
npm run server

# Terminal 2  
npm run client
```

## What's Next?

- Read the full [README.md](README.md) for detailed information
- Check [ENV_SETUP.md](ENV_SETUP.md) for API key help
- Customize the UI by editing files in `client/src/`
- Modify GPT prompts in `server/index.js`

## Need Help?

1. Check the console for error messages
2. Read the troubleshooting section in README.md
3. Verify your API keys are correct
4. Make sure you have internet connection

## Demo Flow

1. **Enter**: "Travel Photography"
2. **Get**: 
   - Title: "The Ultimate Guide to Travel Photography: Capture Memories That Last Forever"
   - Full blog post with intro, body, conclusion
   - Summary line
   - 5 hashtags
   - 9 beautiful travel photos from Unsplash

---

Happy blogging! 🎉

