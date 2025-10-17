import './ContentDisplay.css'

function ContentDisplay({ content }) {
  if (!content) return null

  return (
    <div className="content-display">
      <div className="content-card">
        <div className="content-section title-section">
          <h2 className="section-label">📝 Title</h2>
          <h1 className="blog-title">{content.title}</h1>
        </div>

        <div className="content-section summary-section">
          <h3 className="section-label">📌 Summary</h3>
          <p className="summary">{content.summary}</p>
        </div>

        <div className="content-section">
          <h3 className="section-label">📖 Introduction</h3>
          <div className="content-text">{content.introduction}</div>
        </div>

        <div className="content-section">
          <h3 className="section-label">💡 Body</h3>
          <div className="content-text">{content.body}</div>
        </div>

        <div className="content-section">
          <h3 className="section-label">✅ Conclusion</h3>
          <div className="content-text">{content.conclusion}</div>
        </div>

        <div className="content-section hashtags-section">
          <h3 className="section-label">🏷️ Hashtags</h3>
          <div className="hashtags">
            {content.hashtags && content.hashtags.map((tag, index) => (
              <span key={index} className="hashtag">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {content.imagePrompt && (
          <div className="content-section image-prompt-section">
            <h3 className="section-label">🎨 Image Search Query</h3>
            <p className="image-prompt">{content.imagePrompt}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContentDisplay

