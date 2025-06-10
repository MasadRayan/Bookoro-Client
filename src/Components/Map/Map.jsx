import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [25,40],
    
  });


const Map = () => {
    const position = [22.380237848381796, 91.8498747186482];

    return (
        <div className="p-6  mx-auto mt-10">
            <h2 className="text-4xl md:text-4xl font-extrabold text-center mb-8">Find Us</h2>
            <div className='h-[400px] lg:h-[500px] w-100% rounded-2xl'>
                <MapContainer center={position} zoom={13} scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%', }}>
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={redIcon}>
                        <Popup>
                            We are here!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;