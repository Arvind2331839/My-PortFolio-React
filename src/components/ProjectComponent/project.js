import { Link } from 'react-router-dom';
import './project.css';

export default function Project() {
    let projectData = [
        {img : 'img/shopping.png', name : 'Shopping Cart Demo Website', msg : 'Click For More Details', path : '/shoppingCart'},
        {img : 'img/blog.jpeg', name : 'Blog App', msg : 'Click For More Details', path : '/blogApp'},
        {img : 'img/ArogyaSetu.png', name : 'ArogyaSetu Website', msg : 'Click For More Details', path : '/arogyaSetu'},
        {img : 'img/food-order.avif', name : 'Food ordering Website', msg : 'Click For More Details', path : '/food-order'},
        {img : 'img/youtube.avif', name : 'YouTubeClone', msg : 'Click For More Details', path : '/YouTubeClone'},
        {img : 'img/techHelp.jpg', name : 'TechHelp', msg : 'Click For More Details', path : '/techHelp'},
        {img : 'img/weather.avif', name : 'Weather', msg : 'Click For More Details', path : '/weather'},
        {img : 'img/student.png', name : 'Student', msg : 'Click For More Details', path : '/student'},
        {img : 'img/portfolio.png', name : 'Portfolio', msg : 'Click For More Details', path : '/portfolio'}
    ];

    return (
        <div className="container-fluid projectBox">
            <div className='row'>
                <div className='col-12 text-center mt-5'>
                    <h1>Project's List</h1>
                </div>
                <div className='container projectIcon'>
                    <div className='row text-center a'>
                        {projectData.map(obj => (
                            <div className='col-3 imgBox' key={obj.path}>
                                <Link to={obj.path} style={{textDecoration:'none'}}>
                                    <img src={obj.img} height={170} style={{borderRadius:'92px'}} alt={obj.name}/>
                                    <h4 className='mt-3'>{obj.name}</h4>
                                    <p>{obj.msg}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
