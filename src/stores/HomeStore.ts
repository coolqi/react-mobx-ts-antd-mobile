import { observable, action } from 'mobx'
import { Toast } from 'antd-mobile'

export interface BannerItem {
  img: string
  link: string
}

export default class HomeStore {
  
  @observable 
  bannerList: BannerItem[] = []

  @action
  async fetchHomeData () {
    try {
      this.bannerList = [
        {
          img: 'https://cmspic-10004025.image.myqcloud.com/a27637b0-7ad5-11e9-8295-19f6bb212809_size_468x75',
          link: '//insurance.cekid.com'
        }
      ].map((item: any) => ({
        img: item.item,
        link: item.link
      }))
    } catch (error) {
      Toast.info(error)
    }
  }
}