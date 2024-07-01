

const ImageGallery = () => {
  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src=".jpg"
        alt="pic" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Uploaded by</h2>
      <span>created on</span>
    </div>
  </div>
  </div>
  )
}

export default ImageGallery