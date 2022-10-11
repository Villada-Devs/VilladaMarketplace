import React, { useState } from 'react';

import CloseButton from 'react-bootstrap/CloseButton';
import Form from 'react-bootstrap/Form';

import Image from "../img/Image Input.png";

import "../styles/ImageInput.css"

function ImageInput() {

    const [selectedImages, setSelectedImages] = useState([]);
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    };

    return(

        <>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className='input-label'>Foto</Form.Label>
                <div className='events-form-image-input-container'>

                    <Form.Control 
                        className='events-form-image-input' 
                        type="file" 
                        multiple 
                        accept='image/png , image/jpeg'
                        onChange={onSelectFile}
                    />

                    <img className='image-input-icon' alt='' src={Image} />
                    <p>Arrastra aquí tus imágenes, o <span className='blue-section'>Busca</span></p>
                </div>
            </Form.Group>

            <div className='events-form-preview'>
                {selectedImages &&
                    selectedImages.map((image, index) => {
                        return(
                            <div className='preview-image-container' key={index}>
                                <img className='preview-image' alt='' src={image}></img>
                                <CloseButton className='image-delete-button' onClick={() => 
                                        setSelectedImages(selectedImages.filter((e) => e !== image))
                                    }
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ImageInput;