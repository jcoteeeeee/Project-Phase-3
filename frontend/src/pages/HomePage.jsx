import { useEffect } from 'react'
import Header from './Header'
import AptBtn from './AptBtn'
// import PhotoDisplay from './PhotoDisplay'
import { Link } from "react-router-dom";
import StudioHomepage from './StudioHomepage';
import toast, { Toaster } from 'react-hot-toast';
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

const notify = () => toast('All Full');

    return(
        <div>
            <Header/>
            <Box
            style={{
                backgroundColor: '#4287f5',
                borderRadius: 4,
                color: '#eee',
                minHeight: 200,
                padding: 12,
                width: 300,
                }}>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">Studio Name</label>
                            <input type="text" id="name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Password</label>
                         <input type="email" id="email" />
                    </div>
                    <button type="submit" className="submit-btn">
                    <Link style= {{fontColor: '#fff'}} to="studiohomepage">Submit</Link>
                    </button>
                 </form>
                <div>
                    <button onClick={notify}>Create New Account</button>
                    <Toaster />
                </div>
                
            </Box>
        </div>
    )
}

export default HomePage
