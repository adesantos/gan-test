import { useEffect, useState } from 'react'
import Tabs from './components/ui/tabs'
import List from './components/content/list'
import Search from './components/ui/search'

import './css/app.css'
import Json from './Json.json'

function App() {
  const [tab, setTab] = useState('ALL')
  const [data, setData] = useState(Json)
  const [listAll, setListAll] = useState()
  const [listFav, setListFav] = useState()
  const [newList, setListNew] = useState()

  useEffect(() => {
    let temp_fav = []
    let temp_new = []

    if (Json) {
      for (var i = 0; i < Json.length; i++) {
        if (Json[i].favorite) {
          temp_fav.push(Json[i])
        }
        if (Json[i].new) {
          temp_new.push(Json[i])
        }
      }
    }

    setListAll(Json)
    setListFav(temp_fav)
    setListNew(temp_new)
  }, [])

  const onChangeTab = (tab) => {
    switch (tab) {
      case 'ALL':
        return <List data={listAll} limit={listAll ? listAll.length : 0} error="No Games to show" />
      case 'NEW':
        return <List data={newList} limit={newList ? newList.length : 0} error="No new games to show" />
      case 'TOP':
        return <List data={listFav} limit={listFav ? listFav.length : 0} error="No favorite games to show" />
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div id="app-bar">
        <h2>SLOTS</h2>
        <div className="tool-bar">
          <Tabs tabs={['ALL', 'NEW', 'TOP']} icons={['fa fa-th', 'fa fa-bookmark', 'fa fa-star']} tab={tab} setTab={setTab} />
          <Search tab={tab} data={data} setData={tab === 'ALL' ? setListAll : (tab === 'NEW' ? setListNew : setListFav)} />
        </div>
      </div>
      {onChangeTab(tab)}
    </div>
  );
}

export default App;