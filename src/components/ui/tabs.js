const Tabs = ({ tabs, icons, tab, setTab }) => {

    return (
        <div id="tabs-container-wrapper">
            <ul className="tabs-container">
                {tabs.map((tab_item, i) => {
                    return (
                        <li key={i} className={`tab ${tab_item === tab ? 'action-active' : ''}`} onClick={() => setTab(tab_item)}>
                            <span>
                                <i className={"icon "+icons[i]} aria-hidden="true"></i>
                                <span className="tab-name">{tab_item}</span>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tabs