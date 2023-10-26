import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import DashboardContent from './DashboardContent';
import ProductContent from './ProductContent';
import CustomersContent from './CustomersContent';
import IncomeContent from './IncomeContent';
import PromoteContent from './PromoteContent';
import HelpContent from './HelpContent';

function App() {
  const [dashboardVisible, setDashboardVisible] = useState(true);
  const [productVisible, setProductVisible] = useState(false);
  const [customersVisible, setCustomersVisible] = useState(false);
  const [incomeVisible, setIncomeVisible] = useState(false);
  const [promoteVisible, setPromoteVisible] = useState(false);
  const [helpVisible, setHelpVisible] = useState(false);

  const handleLinkClick = (linkName) => {
    setDashboardVisible(linkName === 'Dashboard');
    setProductVisible(linkName === 'Product');
    setCustomersVisible(linkName === 'Customers');
    setIncomeVisible(linkName === 'Income');
    setPromoteVisible(linkName === 'Promote');
    setHelpVisible(linkName === 'Help');
  };

  return (
    <div className="App">
      <Navbar handleLinkClick={handleLinkClick} />
      <div className="content">
        {dashboardVisible && <DashboardContent />}
        {productVisible && <ProductContent />}
        {customersVisible && <CustomersContent />}
        {incomeVisible && <IncomeContent />}
        {promoteVisible && <PromoteContent />}
        {helpVisible && <HelpContent />}
      </div>
    </div>
  );
}

export default App;
