// import pic from '../../public/img/images.jpg'
import './home.css'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()
    return <div className='container-fluid homeBox'>
        <div className='row d-flex align-items-center'>
        <div className='col-lg-6 text-center'>
            <h1>Hi, My name is Arvind Kumar</h1>
            <h1>and I am a passionate</h1>
            <h1>MERN Stack Developer.</h1><br />
            <h3>Skills:-</h3>
            <p>HTML, CSS, Tailwind css, Bootstrap, Material ui,<br /> Java Script, Api's, React js, Redux Toolkit,<br /> Node js, Express js, Mongodb,<br />DSA, Core JAVA, Git & GitHub</p>
            <br/>
            <button className='btn' onClick={()=>window.open('https://www.linkedin.com/in/arvindkumar2331839/')}>Visit LikedIn</button> &nbsp; &nbsp; 
            <button className='btn' onClick={()=>window.open('https://github.com/Arvind2331839')}>Visit Github</button>
        </div>
        <div className='col-lg-6 text-center'>
            <img src='img/web.png' height={500} style={{borderRadius:'160px', marginTop:60, border:'2px solid white'}}/>
            {/* <img src={pic} alt='404'/> */}
            {/* <img src="../.././public/img/images.jpg" alt="404" height={100} width={100}/> */}
        </div>
        </div>
    </div>

}