import './Weather.css'

export default function Weather(){
    return <div className="container-fluid cardBox">
    <div className="row mt-5 text-center">
    <div className="col-12">
    <h1>Weather Project Details</h1>
    </div>
    </div>
    <div className='container mt-5 cardInnerBox'>
    <div className='row text-center'>
        <div className='col-12'>
            <h4>Summary</h4>
            <p className='mt-1'>In this project user can check weather of any palace/city</p>

            <h4 className='mt-5'>Technology Used</h4>
            <p className='mt-1'>HTML5, CSS3, Bootstrap4, React JS, Api, Axios</p>

            <h4 className='mt-5'>GitHub Link</h4>
            <p className='mt-1'><a href='https://github.com/Arvind2331839/' target='_blank' rel='noopener noreferrer'>https://github.com/Arvind2331839/</a></p>

            <h4 className='mt-5'>netlify Hosting (Recomended to check on phone/laptop because it is  responsive)</h4>
            <p className='mt-1'><a href='https://weather-app-react-arvind.netlify.app/' target='_blank' rel='noopener noreferrer'>https://weather-app-react-arvind.netlify.app/ </a></p>
        </div>
    </div>
    </div>

</div>
}