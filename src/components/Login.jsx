import { useAuthentication } from "@/hooks/useAuthentication.jsx"
import {db} from '../../firebase/config'

import {
    Card,
    CardContent,    
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useEffect, useState } from "react"

import { Button } from "./ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"

const Login = () => {
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    const [error, setError] = useState('')

    const {login, error: authError, loading} = useAuthentication();

    

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {            
            email,
            password,
        }

        const res = await login(user)

        console.log(res);
    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])


  return (    
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="space-y-1">
                        <Label htmlFor="email">E-mail</Label>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="email@example.com" required/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="**********" autoComplete="on" required/>
                    </div>
                    {!loading && <Button onClick={handleSubmit} className="w-full">Login</Button>}
                    {loading && <Button onClick={handleSubmit} className="w-full" variant="secondary" disabled>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Please wait...
                    </Button>}
                    {error && <p className="flex justify-center text-destructive">{error}</p>}
                </form>
            </CardContent>
        </Card>
            
  )
}

export default Login