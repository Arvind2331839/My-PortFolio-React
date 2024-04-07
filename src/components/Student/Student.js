import './Student.css'

export default function Student(){
    return <div className="container-fluid cardBox">
    <div className="row mt-5 text-center">
    <div className="col-12">
    <h1>Student Data Management</h1>
    </div>
    </div>
    <div className='container mt-5 cardInnerBox'>
    <div className='row text-center'>
        <div className='col-12'>
            <h4>Summary</h4>
            <p className='mt-1'> A website wher you can add student data edit and remove </p>

            <h4 className='mt-5'>Technology Used</h4>
            <p className='mt-1'>HTML5, CSS3, Tailwind css, React JS,Node js, Express js, mongoDB</p>

            <h4 className='mt-5'>GitHub Link</h4>
            <p className='mt-1'><a href='https://github.com/Arvind2331839/' target='_blank' rel='noopener noreferrer'>https://github.com/Arvind2331839/</a></p>

            <h4 className='mt-5'>Vercel Hosting (Recomended to check on Mobile phone/laptop because it is  responsive)</h4>
            <p className='mt-1'><a href='https://student-management-client.vercel.app/' target='_blank' rel='noopener noreferrer'>https://student-management-client.vercel.app/</a></p>
        </div>
    </div>
    </div>

</div>
}