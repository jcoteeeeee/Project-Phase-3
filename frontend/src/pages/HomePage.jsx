import { useEffect } from 'react'
import Header from './Header'
import AptBtn from './AptBtn'
// import PhotoDisplay from './PhotoDisplay'
import AptCalendar from './AptCalendar'
import { Link } from "react-router-dom";
import ArtistHomepage from './ArtistHomepage'
// import './src/App.css'



const HomePage = ( {photos, setPhotos} ) => {
    // useEffect(() => {
    //     const request = async () => {
    //         let req = await fetch("http://localhost:3000/photos")
    //         let res = await req.json()
    //         setPhotos(res)
    //     }
    //     request()
    // }, [])
// const navigate = useNavigate()

// const goToArtistHomePage = () => {

    // navigate('/artisthomepage')
// }

    return(
        <div>
            <Header/>
            <Link to="artisthomepage">Artist Home Page</Link>
            {/* <button className='goToArtistHomePageBtn' onClick={() => { goToArtistHomePage('/artisthomepage') }}> I'm an artist </button> */}
            <AptBtn/> 
            {/* <PhotoDisplay photos={photos}/> */}
            <AptCalendar/>
        </div>
    )
}

export default HomePage
