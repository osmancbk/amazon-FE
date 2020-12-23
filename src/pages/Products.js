import React from 'react'
import { useParams } from 'react-router-dom';

// import axios from 'axios';

function Products() {
    const { id } = useParams();

    return (
        <div>
            <p>THIS IS Product Page</p>
            <p>ID: {id}</p>

        </div>
    )
}
export default Products;

/*
useEffect(() => {
    axios.get('/api/product/homepage')      //"https://mern-aws.herokuapp.com",
        .then(res => {
            setProductList(res?.data?.products);
        }).catch(err => {
            console.log('err', err)
        })
}, [])
*/


/*
    const fetchData = async () => {
        try {
            const response = await axios.get('https://mern-aws.herokuapp.com/api/product/homepage')
            console.log('response', response);

        } catch (err) {
            console.log(err)

        }

    }

    useEffect(() => {
        fetchData();

    }, [])
*/