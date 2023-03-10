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

const notify = () => toast("you can't sit here");

return(
    <div>
        <Header/>
         <div className="hompageBoxes">
            <Box className="Box1"
            style={{
                backgroundColor: '#99b6df',
                borderRadius: 10,
                color: '#eee',
                minHeight: 200,
                padding: 12,
                width: 300,
                }}>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">Studio Name </label> <br/>
                            <input type="text" id="name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Password </label> <br/>
                         <input type="password" id="email" />
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
                <img className="Box2" style={{borderRadius: 10}} src="./photos/andrej-lisakov-Ll1TDo_AQyM-unsplash.jpg"/>
                
            </div>
            
            
        </div>
    )
}

export default HomePage
