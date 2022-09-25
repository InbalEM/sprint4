
import { DetailsHeader } from './details-header'
import { MainHeader } from './main-header'

export function AppHeader({layoutClass, isOpen}) {


    console.log(isOpen);
    return <header className={`${layoutClass ? 'main-layout-details details-header flex full' : 'main-layout app-header flex full'} `}>
        
        {/* {isOpen ?   <DetailsHeader/> : <MainHeader/>} */}
        <MainHeader/>

        

    </header>

}