import useFirestore from "../hooks/useFirestore";

const ImageGallery = () => {
  const { docs: images, isLoading } = useFirestore('images');
  console.log(images); 

  if (isLoading) {
    console.log('loading.....')
    // alert('loading.....')
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
      {images.map((image) => (
        <div key={image.url} className="card card-compact bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <img src={image.url} alt="gallery" className="rounded-lg w-full h-64 object-cover" />
            <figure>
              <p className="text-center mt-2">Uploaded by: {image.userEmail}</p> 
              <span className="block mt-2">Created on: {new Date(image.createdAt).toDateString()}</span>
              {/* <p>image url: {image.url}</p> */}
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

