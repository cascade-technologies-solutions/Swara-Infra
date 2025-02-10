

import React, { useState, useEffect } from 'react';
import "../styles/Projects.css";
import { getImagesByStatus, uploadImage } from '../services/api'; // Import API functions

const Projects = () => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('Completed'); // Default status is 'Completed'
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch images when component mounts or status changes
  useEffect(() => {
    const fetchImages = async () => {
      const data = await getImagesByStatus(status);
      setImages(data);
    };

    fetchImages();
  }, [status]);

  const handleImageUpload = async (event) => {
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('status', 'Completed');
    formData.append('location', 'New York');
    formData.append('square_feet', '1500');

    const data = await uploadImage(formData);
    console.log(data); // Handle response accordingly
  };

  return (
    <div className="projects-container">
      <h2> VIEW CONSTRUCTION</h2>
      <h3> Delivering high quality construction services...</h3>
      <div className="tabs">
        <button
          className={`tab-button ${status === 'Completed' ? 'active-tab' : ''}`}
          onClick={() => setStatus('Completed')}
        >
          Completed
        </button>
        <button
          className={`tab-button ${status === 'Ongoing' ? 'active-tab' : ''}`}
          onClick={() => setStatus('Ongoing')}
        >
          Ongoing
        </button>
      </div>

      <div className="projects-grid">
        {images && images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="project-card">
              <img
                // src={`http://localhost:5001${image.url}`}
                src={`https://swara-infra-backend.onrender.com${image.url}`}

                alt={image.location}
                className="project-image"
              />
              <div className="project-details">
                <p>{image.location}</p>
                <p>{image.square_feet} sq.ft</p>
              </div>
            </div>
          ))
        ) : (
          <div>No images found</div>
        )}
      </div>
    </div>
  );
};

export default Projects;


