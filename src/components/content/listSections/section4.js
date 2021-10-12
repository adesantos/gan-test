const Section4 = ({ data, start, limit }) => {

    const renderList = () => {
        let divs = []

        for (var i = start+1; i < start+3; i++) {

            const item = data ? data[i] : []

            if (item) {
                divs.push(
                    <div key={i} className="col-xs-12 col-sm-6 col-md-12 img-margin-bottom">
                        <img alt={item.name} className="img-fluid" src={item.image} />
                    </div>
                )
            }
        }

        return divs
    }

    return (
        <div className="row">

            <div className="col-xs-12 col-md-8 img-margin-bottom">
                <img alt={data[start].name} className="img-fluid img-center" src={data[start].image} />
            </div>
            <div className="col-xs-12 col-md-4">

                <div className="row">
                    {renderList()}
                </div>

            </div>

        </div>
    )
}
export default Section4