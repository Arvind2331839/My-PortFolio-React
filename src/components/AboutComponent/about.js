import { Link } from 'react-router-dom'
import './about.css'

export default function About() {
    return <div className="container-fluid aboutBox">
        <div className="row text-center sectionOne">
            <div className='col-lg-12'>
                <h1 className='text-center mt-5'>Education Details</h1>
                <img src='img/about.png' className='img' />
            </div>
        </div>
        <br/><br/><br/>
        <div className="row milestone">
            <div className='col-lg-12'>
            <b>My Milestone's</b>
            </div>
        </div>
        <div className='row sectionTwo'>
        <hr/>
        <div className='col-lg-12 infoLine'>
        {/* <h1 className='text-left mt-4'>Education Details</h1> */}
        <div><br/><br/><br/><br/><br/><p>10th Std, SKIC Mangari, Ayodhya, Uttar Pradesh, 78% year-(2012-2014)</p></div>
        <div><br/><br/><br/><br/><br/><p>12th Std, GIC Sultanpur, Uttar Pradesh,percentage-56%, Year-(2014-2016)</p></div>
        <div><br/><br/><br/><br/><br/><p>B.Tech.(ECE)- Dr. A. P. J. Abdul Kalam Technical University Lucknow, Uttar Pradesh, percentage-65% Year-(2016-2020) </p></div>
        <div><br/><br/><br/><br/><br/><p>Completed Web Development (Front-end) by self learning (Skills: HTML5, CSS3, Bootstrap4, Java Script, ES6, React, Redux) (2022-2023)</p></div>
        <div><br/><br/><br/><br/><br/><p>Completed Full Stack WebDevolopment (MERN) Internship, Technorizen Software Solution, indore (2023-24)</p></div>
        </div>
        </div>
        {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
        <div className='container-fluid tableBox'>
        <div className="row milestone">
            <div className='col-lg-12'>
            {/* <b>Professional Trainig</b> */}
            </div>
        </div>
        <div className='row sectionThree mt-3 text-center' style={{marginLeft:'250px', width:'60vw'}}>
        <div className='col-lg-12'>
        {/* <table className='table table-responsive table-dark table-hover'>
            <thead> 
                <th>S. no.</th>
                <th>Oraganization</th>
                <th>Designation</th>
                <th>Course</th>
                <th>Certificate</th>
            </thead>
            <tbody>
                <tr className='tabletr'>
                    <td>1</td>
                    <td>Universal Infomatics, Indore</td>
                    <td>Trainee</td>
                    <td>MERN Stack Development</td>
                    <td><Link style={{textDecoration:'none'}} to='/universalCertificate' className='tableLink'>Click Me</Link></td>
                </tr>
                <tr className='tabletr'>
                    <td>2</td>
                    <td>CodeBetter, Indore</td>
                    <td>Trainee</td>
                    <td>Front-end Development</td>
                    <td><Link style={{textDecoration:'none'}} to='/codeBetterCertificate' className='tableLink'>Click Me</Link></td>
                </tr>
            </tbody>
        </table> */}
        </div>
        </div>
        </div>
    </div>
}