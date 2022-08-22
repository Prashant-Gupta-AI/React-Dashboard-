import React from 'react';
import '../styles/detaillist.css'
import image from '../images/user.webp'

function DetailList() {
    return (
        <>
            <div className="details">
                {/* Order Details list */}
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
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status pending'>pending</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status return'>return</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status inprogress'>inprogress</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Car</td>
                                <td>$12000</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*  New Custumers */}
                <div className="recentCustumers">
                    <div className="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>
                    <table>
                        <tbody>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        <tr>
                            <td width="60px"><div className="imgBx"><img src={image} alt="user" /></div></td>
                            <td><h4>User_Name<br/><span>location</span></h4></td>
                        </tr>
                        
                      
                     
        
                        
        
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default DetailList;