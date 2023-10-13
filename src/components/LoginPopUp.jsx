import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


import Login from "./Login"
import Register from "./Register"


const LoginPopUp = () => {

    

  return (  
          
        <Tabs defaultValue="login" className="w-full h-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
                <Login />
            </TabsContent>

            <TabsContent value="register">
                <Register />
            </TabsContent>
        </Tabs>    
  )
}

export default LoginPopUp