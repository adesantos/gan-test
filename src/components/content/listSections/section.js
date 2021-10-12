const Section = ({ data, start, limit }) => {

    const renderList = () => {
        let divs = []

        for (var i = start; i < limit; i++) {
            const item = data ? data[i] : []

            if (item) {
                divs.push(
                    <div key={i} className="col-xs-12 col-sm-6 col-md-4 img-margin-bottom">
                        <img alt={item.name} className="img-fluid" src={item.image} />
                    </div>
                )
            }
        }

        return divs
    }

    return (
        <div className="row">
            {renderList()}
        </div>
    )
}
export default Section