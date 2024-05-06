import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { 
    $id: '',
    email: 'sjqueen@asu.edu',
    userId: '1',
    dwollaCustomerUrl: '',
    dwollaCustomerId: '',
    firstName: 'Samuel',
    lastName: 'Queen',
    address1: '2828 E Roeser RD',
    city: 'Phoenix',
    state: 'AZ',
    postalCode: '85040',
    dateOfBirth: '12/15/1997',
    ssn: 'gotcha',
  };

  

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image alt="menu icon" width={30} height={30} src="/icons/logo.svg" />
          
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
          
          {children}
        </div>
    </main>
  );
}
