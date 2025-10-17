import { useState } from 'react'
import './ImageGallery.css'

function ImageGallery({ images, imagePrompt }) {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images || images.length === 0) {
    return null
  }

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="image-gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">🖼️ Thumbnail Images</h2>
        <p className="gallery-subtitle">
          Click on an image to view it in full size
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.urls.small}
              alt={image.alt_description || 'Unsplash image'}
              className="gallery-image"
            />
            <div className="image-overlay">
              <p className="photographer-name">📷 {image.user.name}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
            <img
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description || 'Unsplash image'}
              className="modal-image"
            />
            <div className="modal-info">
              <p className="modal-photographer">
                Photo by <strong>{selectedImage.user.name}</strong>
              </p>
              <a
                href={selectedImage.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="unsplash-link"
              >
                View on Unsplash
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery

