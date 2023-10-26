// DashboardContent.js
import React from 'react';
import './dashboard.css';
import BarChart from './BarChart';

const DashboardContent = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>Hello Sharukh 👋</h2>
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div>
      <table>
        <tr>
        <td>
        <i className="fas fa-dollar-sign" style={{ fontSize: '50px', marginRight: '30px' }}></i>
        Earning
      </td>
      <td>
        <i className="fas fa-shopping-cart" style={{ fontSize: '50px', marginRight: '30px' }}></i>
        Orders
      </td>
      <td>
        <i className="fas fa-wallet" style={{ fontSize: '50px', marginRight: '30px' }}></i>
        Balance
      </td>
      <td>
        <i className="fas fa-chart-line" style={{ fontSize: '50px', marginRight: '30px' }}></i>
        Total Sales
      </td>
      
        </tr>
      </table>
      </div>
      <div className='bardiv'>
      <div className='bar'><BarChart /></div>
      <div className='pie'>Customers PieChart</div>
      </div>
    </div>
  );
};

export default DashboardContent;
