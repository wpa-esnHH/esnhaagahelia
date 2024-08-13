import '../css/Block.css';

export default function Block({ title, description, price, photo, date, linkToEvent }) {
    let formattedDate = "";

    if (date) {
        const dateParts = date.split("-");
        const formattedDateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
        const dd = String(formattedDateObj.getDate()).padStart(2, '0');
        const mm = String(formattedDateObj.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = formattedDateObj.getFullYear();
        formattedDate = `${dd}.${mm}.${yyyy}`;
    }
    return (
        <div className="card">

            <div className="card-img" style={{ backgroundImage: `url(${photo})` }}></div>
            <div className="card-info">
                <p className="text-title">{title}</p>
                <p className="text-body">{description}</p>
            </div>
            <div className="card-footer">
                <span className="text-title">{formattedDate ? formattedDate : price}</span>
                <a href={linkToEvent}>
                    <div className="card-button">
                        See more
                    </div>
                </a>
            </div></div>
    )
}