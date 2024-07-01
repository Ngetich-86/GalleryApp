
const UploadForm = () => {
  return (
    <div className="text-center mt-10">
      <form className="flex items-center justify-center h-96">
    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
    <button className="btn gap-3">Upload <span>🪄</span></button>
    </form>
    </div>
    
  )
}

export default UploadForm