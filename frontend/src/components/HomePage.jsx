import { useEffect } from 'react'
import Header from './Header'
import AptBtn from './AptBtn'
import PhotoDisplay from './PhotoDisplay'

const HomePage = ( {photos, setPhotos} ) => {
    useEffect(() => {
        const request = async () => {
            let req = await fetch("http://localhost:3000/photos")
            let res = await req.json()
            setPhotos(res)
        }
        request()
    }, [])

    return(
        <div>
            <Header/>   
            <AptBtn/> 
            <PhotoDisplay photos={photos}/>
        </div>
    )
}

export default HomePage
