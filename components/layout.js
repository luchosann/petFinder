import SiteNav from './sitenav'
import Header from './header'
import Main from './main'

const Layout = (props) => {
    return (
        <>
            <SiteNav/>
            <Header/>
            <Main/>
            {/* <main>{props.children}</main> */}
            
        </>
    )
    // <>
    //     {/* <Header/> */}
    //     <p>testtt</p>
    //     <main>{children}</main>
    // </>
}

export default Layout