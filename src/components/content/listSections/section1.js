const Section1 = ({ data, start, limit }) => {

    const renderList = () => {
        let divs = []

        for (var i = start; i < limit; i++) {
            const item = data ? data[i] : []

            if (item) {
                divs.push(
                    <div key={i} className="col-xs-12 col-sm-6 img-margin-bottom">
                        <img alt={item.name} className="img-fluid" src={item.image} />
                    </div>
                )
            }
        }

        return divs
    }


    return (
        <div className="row">
            <div className="col-xs-12 col-md-6">

                <div className="row">
                    {renderList()}
                </div>

            </div>
            <div className="col-xs-12 col-md-6 img-margin-bottom">
                <img alt={data ? data[limit].name : ""} className="img-fluid" src={data ? data[limit].image : ""} />
            </div>
        </div >
    )
}
export default Section1