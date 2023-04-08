import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FullDevice = () => {
    const navigate = useNavigate()

    const { id } = useParams();

    const [device, setDevice] = React.useState();

    React.useEffect(() => {

        (async function fetchDevice() {
            try {
                const { data } = await axios.get(
                    `https://63ed0caae6ee53bbf5901b77.mockapi.io/devices/${id}`,
                );
                setDevice(data);
            } catch (error) {
                console.log('error: ', error);
                alert('Device not found')
                navigate('/')
            }
        })()

    }, [id, navigate]);

    if (!device) {
        return 'LOADING'
    }

    return (
        <div className="container">
            <img src={device.imageUrl} alt="" />
            <h2>{device.title}</h2>
            <p>rating {device.rating}</p>
            {device.sizes.map(size => size + ' ')}
            <h4>{device.price} grn</h4>
        </div>
    );
};

export default FullDevice;
