import React, { useState }        from "react";
import Card         from 'react-bootstrap/Card';
import Form         from 'react-bootstrap/Form';
import { Alert, Button }   from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const Login = () => {
    const [ email , setEmail ]          = useState("");
    const [ password , setPassword ]    = useState("");
    const [ error , setError ]          = useState("")
    const { signIn }                    = useUserAuth();
    const navigate                      = useNavigate();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("")
        try {
            await signIn(email , password );
            navigate("/selectuser")
            console.log("successful login");
            
        } catch (err : any) {
            setError(err.message)
        }
    }
    
return (
    <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 shadow-md">
        <Card  style={ window.innerWidth<560 ? { width: "20rem"} : {width: "25rem"}}>
            <Card.Body>
                <Card.Title>
                    <div className="text-lg font-semibold flex justify-content-center mb-6">Login</div>
                </Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="px-4" controlId="exampleForm.ControlInput1">  
                        <Form.Label className="text-sm">Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="name@example.com" 
                            onChange={(e) => setEmail(e.target.value)}/>
                     </Form.Group>
                     <Form.Group className="mb-3 px-4 mt-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-sm">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="password" 
                            onChange={(e) => setPassword(e.target.value)}/>
                     </Form.Group>
                     <div className="grid gap-6"><Button variant="primary" type="submit">Login</Button></div>
                     <span className="flex mt-1 justify-center align-items-center">Don't have an account?
                        <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="align-items-center ml-1" to="/register">SignUp</Link>
                    </span>
                </Form>
            </Card.Body> 
        </Card>     
    </div>
)
}

export default Login;