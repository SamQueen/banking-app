import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: "Samuel",
    lastName: "Queen",
    email: "sjqueen@asu.edu"
  };

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficientyly."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3291.23}
          />
        </header>

        RECENT TRANSACTION
      </div>

        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[
            {currentBalance: 123.50}, 
            {currentBalacne: 1250.34}
          ]}
        />
    </section>
  )
}

export default Home