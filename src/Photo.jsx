import women from '../assets/women.jpg';
import { useState, useRef } from 'react';
import './photo.css';

const Photo = () => {
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(); // Ref for the file input element

    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const previewUrl = URL.createObjectURL(file); // Generate preview URL
            setPreview(previewUrl);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger file input click programmatically
        }
    };

    return (
        <section className='wrapper'>
            <h1>
                <span>I AM LENDING A VOICE TO SUPPORT</span>
                <br /> ENDING OF VIOLENCE AGAINST WOMEN AND GIRLS.
            </h1>
            <ul>
                <li className='header'>
                    <h2>
                        16 DAYS OF ACTIVISM
                        <span className='span'>
                            <br />
                            AGAINST GENDER BASED VIOLENCE (WOMEN AND
                            GIRLS)
                        </span>
                    </h2>
                </li>
                <li className='image'>
                    {/* Hidden file input */}
                    <input
                        ref={fileInputRef}
                        type='file'
                        accept='image/*'
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />

                    {preview && (
                        <img
                            src={preview}
                            alt='Preview'
                            className='img-preview'
                            // style={{
                            //     maxWidth: '100%',
                            // }}
                        />
                    )}
                    <input
                        type='text'
                        placeholder='Enter Name'
                        className='Name'
                    />
                </li>
            </ul>
            <div className='btn-div'>
                <button
                    className='upload-btn'
                    onClick={handleButtonClick}
                >
                    Upload Image
                </button>
            </div>
            <div className='logo-div'>
                <img src={women} alt='logo' className='logo' />
            </div>
            <section className='footer'>
                <h3>THE FEDERAL MINISTRY OF WOMEN AFFAIRS</h3>
            </section>
        </section>
    );
};

export default Photo;
