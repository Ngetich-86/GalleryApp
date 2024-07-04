import useFirestore from "../hooks/useFirestore";

const ImageGallery = () => {
  const { docs: images, isLoading,imageUrl } = useFirestore('images');
  console.log(images); // Changed from docs to images to match destructured variable

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
      {images.map((image) => (
        <div key={image.id} className="card card-compact bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <img src={image.url} alt="gallery" className="rounded-lg" />
            <figure>
              <p className="text-center mt-2">Uploaded by: {image.userEmail}</p>
              <p>Created on: {new Date(image.createdAt).toDateString()}</p>
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
