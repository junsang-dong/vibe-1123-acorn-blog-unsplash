import { useState } from 'react'
import KeywordInput from './components/KeywordInput'
import ContentDisplay from './components/ContentDisplay'
import ImageGallery from './components/ImageGallery'
import './App.css'

function App() {
  const [content, setContent] = useState(null)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">✨ Blog Content Generator</h1>
          <p className="subtitle">AI-powered blog content creation with GPT and Unsplash</p>
        </header>

        <KeywordInput 
          setContent={setContent}
          setImages={setImages}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
        />

        {error && (
          <div className="error-message">
            <p>❌ {error}</p>
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Generating amazing content...</p>
          </div>
        )}

        {content && !loading && (
          <>
            <ContentDisplay content={content} />
            <ImageGallery images={images} imagePrompt={content.imagePrompt} />
          </>
        )}
      </div>
    </div>
  )
}

export default App

