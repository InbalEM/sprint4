import { DetailsHeader } from './details-header'
import { MainHeader } from './main-header'

export function AppHeader({layoutClass, isOpen}) {


    console.log(isOpen);
    return <header className={`${layoutClass ? 'main-container-details details-header flex full' : 'main-container app-header flex full'} `}>
        
        {/* {isOpen ?   <DetailsHeader/> : <MainHeader/>} */}
        <MainHeader/>

        
    </header>

}