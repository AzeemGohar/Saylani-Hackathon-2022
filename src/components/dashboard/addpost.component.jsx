import React, { useState } from "react";
import { db } from "../utils/firebase.utils";
import { doc, collection, setDoc } from "firebase/firestore";
export default function Addpost() {
  const [post, setPost] = useState({
    propertyTitle: "",
    location: "",
    propertyType: "",
    areaSize: "",
    finishing: "",
    rooms: "",
    uploadImage: "",
    price: "",
  });

  const {
    propertyTitle,
    location,
    propertyType,
    areaSize,
    finishing,
    rooms,
    uploadImage,
    price,
  } = post;

  const uploadPost = async (e) => {
    const postCollecRef = doc(collection(db, "Posts"));
    try {
      const postCollectionRef = await setDoc(postCollecRef, {
        propertyTitle,
        location,
        propertyType,
        areaSize,
        finishing,
        rooms,
        uploadImage,
        price,
      });
      alert("Posted");
    } catch (e) {}
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPost({ ...post, [e.target.name]: value });
  };
  return (
    <div id="postingForm" className="container border  p-0 mt-2">
      <h1 className="text-center display-4 mb-4 mt-1">
        Enter the required details
      </h1>

      <div className="mx-5 mb-3">
        <label htmlFor="" className="d-block fs-4">
          Property title
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="For sale, rent etc"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="propertyTitle"
          value={post.propertyTitle}
          onChange={handleChange}
        />
      </div>

      <div className="mx-5 mb-3">
        <label htmlFor="" className="d-block fs-4">
          Location
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Full property address"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="location"
          value={post.location}
          onChange={handleChange}
        />
      </div>

      <div className="mx-5 mb-3">
        <label htmlFor="formFileMultiple" className="form-label fs-4">
          Property Type
        </label>
        <input
          className="form-control"
          type="text"
          id="formFileMultiple"
          placeholder="House, Apartment, Flat etc"
          name="propertyType"
          value={post.propertyType}
          onChange={handleChange}
        />
      </div>

      <div className="mx-5 mb-3">
        <label htmlFor="formFileMultiple" className="form-label fs-4">
          Area or Size
        </label>
        <input
          className="form-control"
          type="text"
          id="formFileMultiple"
          placeholder="In square meter"
          name="areaSize"
          value={post.areaSize}
          onChange={handleChange}
        />
      </div>

      <div className="mx-5 mb-3">
        <label htmlFor="formFileMultiple" className="form-label fs-4">
          Finish type
        </label>
        <input
          className="form-control"
          type="text"
          id="formFileMultiple"
          placeholder="Furnished, With or without AC"
          name="finishing"
          value={post.finishing}
          onChange={handleChange}
        />
      </div>

      <div className="mx-5 mb-3">
        <label htmlFor="formFileMultiple" className="form-label fs-4">
          No of rooms
        </label>
        <input
          className="form-control"
          type="number"
          id="formFileMultiple"
          placeholder="Excluding bathroom and kitchen "
          name="rooms"
          value={post.rooms}
          onChange={handleChange}
        />
      </div>

      <div className="mx-5 mb-3">
        <label htmlFor="formFileMultiple" className="form-label fs-4">
          Upload Property Image
        </label>
        <input
          className="form-control"
          type="text"
          id="formFileMultiple"
          placeholder="Paste URL of the image "
          name="uploadImage"
          value={post.uploadImage}
          onChange={handleChange}
        />
      </div>

      <div className="mx-5 mb-3">
        <label htmlFor="formFileMultiple" className="form-label fs-4">
          Price
        </label>
        <input
          className="form-control"
          type="text"
          id="formFileMultiple"
          placeholder="Paste URL of the image "
          name="price"
          value={post.price}
          onChange={handleChange}
        />
      </div>

      <div className="mx-5 mb-3 ">
        <input
          type="button"
          className="btn btn-primary w-100 fs-5"
          value="Sign Up"
          onClick={uploadPost}
        />
      </div>
    </div>
  );
}
