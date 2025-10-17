# 🔑 Environment Variables Setup Guide

This file contains instructions for setting up the required environment variables.

## Required API Keys

### 1. OpenAI API Key

**What it's for:** Generates blog content using GPT-4

**How to get it:**

1. Go to [OpenAI Platform](https://platform.openai.com)
2. Sign up for an account or log in
3. Navigate to [API Keys page](https://platform.openai.com/api-keys)
4. Click "Create new secret key"
5. Give it a name (e.g., "Blog Generator")
6. Copy the key (you won't be able to see it again!)
7. Paste it in your `.env` file

**Pricing:**
- GPT-4o-mini: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- GPT-4: ~$30 per 1M input tokens, ~$60 per 1M output tokens
- New accounts get $5 in free credits

**Rate Limits:**
- Free tier: 3 RPM (requests per minute)
- Tier 1: 500 RPM
- Check your limits at [OpenAI Usage](https://platform.openai.com/usage)

### 2. Unsplash Access Key

**What it's for:** Searches for beautiful thumbnail images

**How to get it:**

1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Sign up for an account or log in
3. Click "Your apps" → "New Application"
4. Accept the terms and conditions
5. Fill in the application details:
   - Application name: "Blog Content Generator"
   - Description: "AI-powered blog content generator"
6. Click "Create application"
7. Copy your "Access Key"
8. Paste it in your `.env` file

**Rate Limits:**
- Demo (Development): 50 requests per hour
- Production: Apply for higher limits after demonstrating your app

## Setting Up .env File

1. Copy the example file:
```bash
cp .env.example .env
```

2. Open `.env` in your text editor

3. Replace the placeholder values:
```env
# OpenAI API Key
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxx

# Unsplash API Key
UNSPLASH_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxx

# Server Port (optional, defaults to 3001)
PORT=3001
```

4. Save the file

## Security Notes

⚠️ **IMPORTANT:**

- Never commit your `.env` file to version control
- Never share your API keys publicly
- The `.env` file is already in `.gitignore`
- If you accidentally expose a key, revoke it immediately and generate a new one

## Testing Your Setup

After setting up your `.env` file, test the APIs:

1. Start the server:
```bash
npm run dev
```

2. Check the console for any errors
3. Try generating content with a simple keyword
4. If you see errors, check:
   - API keys are correct
   - No extra spaces or quotes in `.env` file
   - You have internet connection
   - API services are not down

## Troubleshooting

**"Invalid API key"**
- Double-check you copied the entire key
- Make sure there are no spaces before or after the key
- Verify the key is active in your OpenAI/Unsplash dashboard

**"Rate limit exceeded"**
- You've made too many requests
- Wait for the rate limit to reset (usually 1 hour for Unsplash)
- Consider upgrading your plan for higher limits

**"Insufficient credits"**
- Your OpenAI account needs to be funded
- Add a payment method at [OpenAI Billing](https://platform.openai.com/account/billing)

## Free Alternatives

If you don't want to use paid APIs immediately:

**For Testing GPT:**
- Use `gpt-3.5-turbo` (cheaper than GPT-4)
- OpenAI gives $5 free credit to new accounts
- Or use mock data during development

**For Unsplash:**
- 50 requests/hour should be enough for testing
- For production, apply for production access (free but needs approval)

## Additional Resources

- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference/introduction)
- [OpenAI API Pricing](https://openai.com/api/pricing/)
- [Unsplash API Documentation](https://unsplash.com/documentation)
- [Unsplash API Guidelines](https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines)

