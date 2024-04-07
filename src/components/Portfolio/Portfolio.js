import './Portfolio.css'

export default function Portfolio(){
    return <div className="container-fluid cardBox">
    <div className="row mt-5 text-center">
    <div className="col-12">
    <h1>This is my portfolio</h1>
    </div>
    </div>
    <div className='container mt-5 cardInnerBox'>
    <div className='row text-center'>
        <div className='col-12'>
            <h4>Summary</h4>
            <p className='mt-1'>A website where you can seen my all the degrees and qualifications </p>

            <h4 className='mt-5'>Technology Used</h4>
            <p className='mt-1'>HTML5, CSS3, Tailwind css, React JS,</p>

            <h4 className='mt-5'>GitHub Link</h4>
            <p className='mt-1'><a href='https://github.com/Arvind2331839/' target='_blank' rel='noopener noreferrer'>https://github.com/Arvind2331839/</a></p>

            <h4 className='mt-5'>Vercel Hosting </h4>
            <p className='mt-1'><a href='https://arvind-portfolio-react.vercel.app/' target='_blank' rel='noopener noreferrer'>https://arvind-portfolio-react.vercel.app/
</a></p>
        </div>
    </div>
    </div>

</div>
}