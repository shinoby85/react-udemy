'use client'
import classes from "./image-picker.module.css";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name, resetImage}) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();
  useEffect(() => {
    setPickedImage(null);
  }, [resetImage]);

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    }
    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill/>}
        </div>
        <input
          className={classes.input}
          type="file"
          accept="image/jpg,image/jpeg,image/png"
          id={name}
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button type="button" className={classes.button} onClick={handlePickClick}>Pick an Image</button>
      </div>
    </div>
  )
}