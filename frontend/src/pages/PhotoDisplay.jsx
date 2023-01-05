const PhotoDisplay = ( {photos} ) => {
    return(
        <div>
            {
                photos.map((photo) => {
                    return(
                        <img src={photo.source}/>
                    )
                })
            }
        </div>
    )
}

export default PhotoDisplay