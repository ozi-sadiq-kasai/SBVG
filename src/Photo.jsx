import { useState } from "react"

const Photo = () => {
    const [preview, setPreview] = useState(null);

    const handleImageUpload = (event) => {
      const file = event.target.files[0]; // Get the selected file
      if (file) {
        // Create a preview URL for the image
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
      }
    };
    return (
        <div>
          <h2>Upload an Image</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {preview && (
            <div style={{ marginTop: '20px' }}>
              <h3>Preview:</h3>
              <img
                src={preview}
                alt="Preview"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  border: '1px solid #ccc',
                  padding: '5px',
                }}
              />
            </div>
          )}
        </div>
      );
}

export default Photo