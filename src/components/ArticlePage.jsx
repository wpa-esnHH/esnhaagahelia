import '../css/ArticlePage.css';
export default function ArticlePage(props) {
    return (
        <>
            <div className="article-main">
                <div className='image-container' style={{ backgroundImage: `url(${props.imagePath})` }}></div>
                <h1 className='article-h'>
                    {props.title}
                </h1>
                <div className='article-p'>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}