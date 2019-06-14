import * as React from 'react'
import { observer, inject } from 'mobx-react'
import HomeStore from '@src/stores/HomeStore'

interface HomeProps {
  home: HomeStore
}

@inject('home')
@observer
class Home extends React.Component<HomeProps> {
  componentDidMount() {
    this.props.home.fetchHomeData()
  }

  render () {
    return (
      <div>
        hahahah
      </div>
    )
  }
}

export default Home