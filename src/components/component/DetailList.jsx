import React from 'react';
import '../styles/detaillist.css'

function DetailList() {
    return (
        <>
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="/#" className='bttn'>View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default DetailList