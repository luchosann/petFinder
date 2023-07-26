import SiteNav from '@/components/sitenav'
import Header from '@/components/header'
import Main from '@/components/main'

function IndexPage() {
  return (
    <div>
      <SiteNav/>
      <Header/>
      <Main image='/src/assets/mainlogo.png'/>
    </div>
  )
}

export default IndexPage