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
function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

    return(
        <div>
            <Header/>
            <AptBtn/> 
            {/* <PhotoDisplay photos={photos}/> */}
            {/* <AptCalendar/> */}
            <Box
            style={{
                backgroundColor: '#4287f5',
                borderRadius: 4,
                color: '#eee',
                minHeight: 200,
                padding: 12,
                width: 300,
                }}>
                <Link style= {{fontColor: '#fff'}} to="artisthomepage">I'm an artist!</Link>
            </Box>
        </div>
    )
}

export default HomePage
