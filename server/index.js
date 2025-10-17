import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Generate blog content with GPT
app.post('/api/generate-content', async (req, res) => {
  try {
    const { keyword } = req.body;

    if (!keyword) {
      return res.status(400).json({ error: 'Keyword is required' });
    }

    const prompt = `You are a professional blog content writer. Create comprehensive blog content based on the following keyword: "${keyword}"

Please provide the response in the following JSON format:
{
  "title": "SEO-optimized blog title",
  "introduction": "Engaging introduction paragraph",
  "body": "Main content with detailed information",
  "conclusion": "Strong conclusion paragraph",
  "summary": "One sentence summary of the entire blog post",
  "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"],
  "imagePrompt": "Detailed description for generating a thumbnail image"
}

Make sure the content is:
- SEO optimized with relevant keywords
- Well-structured and engaging
- Professional and informative
- The body section should be substantial (at least 3-4 paragraphs)
- Hashtags should be relevant and popular
- Image prompt should be descriptive for finding the perfect thumbnail`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a professional blog content writer. Always respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const content = JSON.parse(completion.choices[0].message.content);

    res.json({
      success: true,
      data: content,
    });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({
      error: 'Failed to generate content',
      message: error.message,
    });
  }
});

// Search Unsplash images
app.post('/api/search-images', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: query,
        per_page: 9,
        orientation: 'landscape',
      },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    res.json({
      success: true,
      data: response.data.results,
    });
  } catch (error) {
    console.error('Error searching images:', error);
    res.status(500).json({
      error: 'Failed to search images',
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

