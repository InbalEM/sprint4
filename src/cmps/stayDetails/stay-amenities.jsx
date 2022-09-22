import Wifi from '../../assets/img/wifi.png'
import Monitor from '../../assets/img/monitor.png'
import Kitchen from '../../assets/img/kitchen-tools.png'
import HairDryer from '../../assets/img/hair-dryer.png'
import Hanger from '../../assets/img/clothes-hanger.png'
import AirConditioner from '../../assets/img/air-conditioner.png'

export const Amenities = ({stay}) => {

    const amenities = [Wifi,Monitor, Kitchen, HairDryer, Hanger, AirConditioner]

    const getAmenities = (minSize = 0, size = 6) => {
        return  stay.amenities.map(amenity =>  <div className="amenity">
        <div>{amenity}</div>
        <div className={`${amenity}-icon`}><img src={ getImg(amenity)} alt="" /></div>
    </div>).slice(minSize, size)
    
    }

    const getImg = (amenity) => {
        console.log('amenity:', typeof amenity)
        console.log('amenities:', amenities)
        if (!amenities.includes(window[amenity])) return Wifi

        
        return amenities[amenities.indexOf(amenity)]
    }
    
    return  <div className="amenities-section" >
    <div className="amenities-header">
        <h2>What this place offers</h2>
    </div>
    <div className="amenities">
       {getAmenities()}
    </div>
</div>
}