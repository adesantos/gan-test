import '../../css/content.css'
import Section from './listSections/section'
import Section1 from './listSections/section1'
import Section2 from './listSections/section2'
import Section3 from './listSections/section3'
import Section4 from './listSections/section4'

const List = ({ data, error, limit }) => {

    const renderSections = (start, size, end) => {

        for (var i = start; i < end; i++) {

            return (
                <div key={i} className="row custom-row">

                    {size < 5 ? (

                        <div className="col-xs-12 col-md-7">
                            <Section data={data} start={i} limit={end} />
                        </div>

                    ) : (size > 5 && size < 12) &&
                    <>
                        <div className="col-xs-12 col-md-7">
                            <Section1 data={data} start={i} limit={i + 4} />
                        </div>

                        <div className="col-xs-12 col-md-5">
                            <Section2 data={data} start={i + 5} limit={i + 11} />
                        </div>
                    </>}

                    {size >= 12 && size <= 19 ? (

                        <>
                            <div className="col-xs-12 col-md-7">
                                <Section1 data={data} start={i} limit={i + 4} />
                            </div>

                            <div className="col-xs-12 col-md-5">
                                <Section2 data={data} start={i + 5} limit={i + 11} />
                            </div>

                            <div className="col-xs-12">
                                <Section3 data={data} start={i + 11} limit={i + 19} />
                            </div>
                        </>

                    ) : (size > 19) &&
                    <>
                        <div className="col-xs-12 col-md-7">
                            <Section1 data={data} start={i} limit={i + 4} />
                        </div>

                        <div className="col-xs-12 col-md-5">
                            <Section2 data={data} start={i + 5} limit={i + 11} />
                        </div>

                        <div className="col-xs-12 col-md-7">
                            <Section3 data={data} start={i + 11} limit={i + 19} />
                        </div>

                        <div className="col-xs-12 col-md-5">
                            <Section4 data={data} start={i + 19} limit={end} />
                        </div>
                    </>}

                </div>
            )
        }
    }

    const renderList = () => {

        if (limit < 23) {
            return (
                renderSections(0, limit, limit)
            )
        } else {
            let render = []
            let rest = limit - 22
            let newLimit = 0
            while (newLimit < limit) {
                if (newLimit === 0) {
                    newLimit = newLimit + 23
                    render.push(renderSections(0, 22, newLimit))
                } else {
                    let start = newLimit - 1
                    newLimit = newLimit + rest
                    let size = newLimit - start
                    render.push(renderSections(start, size, newLimit))
                }
            }

            return render
        }
    }

    return (
        <>
            {limit ? (
                renderList()
            ) :
                <div>{error}</div>
            }
        </>
    )
}
export default List