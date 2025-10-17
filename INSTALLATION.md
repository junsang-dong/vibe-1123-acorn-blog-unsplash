# 🔧 Installation Instructions

## Option 1: Automated Setup (Recommended)

Run the setup script:

```bash
cd /Users/junsangdong/Desktop/vibe-1123-acorn-blog-unsplash

# Make script executable (if not already)
chmod +x setup.sh

# Run setup
./setup.sh
```

The script will:
1. ✅ Check Node.js installation
2. ✅ Install backend dependencies
3. ✅ Install frontend dependencies
4. ✅ Create .env file from template

After the script completes:
1. Edit `.env` and add your API keys
2. Run `npm run dev`
3. Open http://localhost:5173

## Option 2: Manual Setup

### Step 1: Navigate to Project

```bash
cd /Users/junsangdong/Desktop/vibe-1123-acorn-blog-unsplash
```

### Step 2: Install Backend Dependencies

```bash
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

### Step 4: Create Environment File

```bash
cp env.template .env
```

Then edit `.env` and add your API keys:

```env
OPENAI_API_KEY=your_actual_key_here
UNSPLASH_ACCESS_KEY=your_actual_key_here
PORT=3001
```

### Step 5: Start the Application

```bash
# Start both servers
npm run dev

# OR start them separately:
# Terminal 1
npm run server

# Terminal 2
npm run client
```

### Step 6: Open in Browser

Navigate to: http://localhost:5173

## Verification Steps

### 1. Check Server is Running

Backend: http://localhost:3001/api/health

Should return:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

### 2. Check Frontend is Running

Frontend: http://localhost:5173

Should see the Blog Content Generator interface

### 3. Test Content Generation

1. Enter a keyword (e.g., "Technology")
2. Click "Generate Content"
3. Wait for results (~10-15 seconds)
4. Should see blog content + images

## Troubleshooting Installation

### Node.js Not Found

```bash
# Install Node.js from nodejs.org
# Or using homebrew (macOS)
brew install node

# Verify installation
node -v
npm -v
```

### Permission Denied

```bash
# If setup.sh permission denied:
chmod +x setup.sh

# If npm permission issues:
sudo npm install -g npm@latest
```

### Port Already in Use

```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Module Not Found

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules
rm -rf client/node_modules

# Reinstall
npm install
cd client && npm install && cd ..
```

### API Key Issues

1. **Invalid API Key Error**
   - Verify keys are correct in `.env`
   - Check no extra spaces or quotes
   - Ensure keys are active in dashboards

2. **Rate Limit Error**
   - Wait for rate limit to reset
   - Check your API usage limits

3. **Insufficient Credits (OpenAI)**
   - Add payment method at platform.openai.com
   - Check account billing

## System Requirements

### Minimum Requirements
- Node.js 16.x or higher
- npm 7.x or higher
- 2GB RAM
- Internet connection

### Recommended Requirements
- Node.js 18.x or higher
- npm 9.x or higher
- 4GB+ RAM
- Fast internet connection

### Operating Systems
- ✅ macOS (tested)
- ✅ Linux
- ✅ Windows (WSL recommended)

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `OPENAI_API_KEY` | Yes | OpenAI API key | `sk-proj-...` |
| `UNSPLASH_ACCESS_KEY` | Yes | Unsplash access key | `abc123...` |
| `PORT` | No | Backend server port | `3001` |

## API Limits

### OpenAI
- **Free Tier**: $5 credit, 3 RPM
- **Tier 1**: 500 RPM
- **Cost**: ~$0.01-0.05 per article

### Unsplash
- **Development**: 50 requests/hour
- **Production**: Need approval
- **Cost**: Free

## Next Steps After Installation

1. ✅ Test with a simple keyword
2. ✅ Review generated content quality
3. ✅ Customize styling if needed
4. ✅ Adjust GPT prompts for your needs
5. ✅ Consider production deployment

## Getting API Keys

### OpenAI API Key

1. Go to https://platform.openai.com
2. Sign up/Login
3. Navigate to API Keys
4. Create new secret key
5. Copy and paste into `.env`

**Cost**: ~$0.01-0.05 per blog post

### Unsplash Access Key

1. Go to https://unsplash.com/developers
2. Sign up/Login
3. Create new application
4. Copy Access Key
5. Paste into `.env`

**Cost**: Free (50 req/hour)

## Production Deployment

For production use:

1. **Environment Variables**
   - Set in hosting platform
   - Never commit `.env` to git

2. **Build Frontend**
   ```bash
   cd client
   npm run build
   ```

3. **Serve Static Files**
   - Use Express to serve `client/dist`
   - Or deploy frontend separately (Vercel, Netlify)

4. **Backend Hosting**
   - Deploy to Heroku, Railway, or AWS
   - Ensure environment variables are set

5. **Rate Limiting**
   - Add rate limiting middleware
   - Monitor API usage

6. **Error Tracking**
   - Add Sentry or similar
   - Log errors properly

## Support Resources

- 📖 **Full Documentation**: README.md
- ⚡ **Quick Start**: QUICKSTART.md
- 🔑 **API Setup**: ENV_SETUP.md
- 📊 **Project Details**: PROJECT_OVERVIEW.md

---

Need help? Check the troubleshooting sections in README.md

