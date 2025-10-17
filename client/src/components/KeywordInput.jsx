import { useState } from 'react'
import axios from 'axios'
import './KeywordInput.css'

function KeywordInput({ setContent, setImages, loading, setLoading, error, setError }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!keyword.trim()) {
      setError('Please enter a keyword')
      return
    }

    setLoading(true)
    setError(null)
    setContent(null)
    setImages([])

    try {
      // Generate content with GPT
      const contentResponse = await axios.post('/api/generate-content', {
        keyword: keyword.trim(),
      })

      if (contentResponse.data.success) {
        setContent(contentResponse.data.data)

        // Search images with Unsplash
        try {
          const imageResponse = await axios.post('/api/search-images', {
            query: contentResponse.data.data.imagePrompt || keyword,
          })

          if (imageResponse.data.success) {
            setImages(imageResponse.data.data)
          }
        } catch (imgError) {
          console.error('Image search error:', imgError)
          // Continue even if image search fails
        }
      }
    } catch (err) {
      console.error('Error:', err)
      setError(err.response?.data?.message || 'Failed to generate content. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="keyword-input-container">
      <form onSubmit={handleSubmit} className="keyword-form">
        <div className="input-group">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter a topic keyword (e.g., 'AI Technology', 'Travel Tips')"
            className="keyword-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="generate-button"
            disabled={loading}
          >
            {loading ? 'Generating...' : '🚀 Generate Content'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default KeywordInput

