type AuthLayoutProp = {  
    children: React.ReactNode;
  };
  
  export default function AuthLayout({ children }: AuthLayoutProp) {  
    return (  
      <div className=""> 
        {children}  
      </div>
    );
  }
  