const { default: axios } = require("axios")
import { useEffect, useState } from "react";
import Test from "./test";
import LoggedNav from "@/components/loggedNav";

function Dashboard() {
    const [user, setUser] = useState({
        id: '',
        email: '',
        userName: '',
        firstName:'',
        lastName:''
    })
    
    useEffect(() => {
        // getProfile()
    }, []);
    
    const getProfile = async () => { 
        const response = await axios.get('/api/profile');
        setUser(response.data)
    }

    return(
        <>
            <LoggedNav/>
            <div className="container-xxl">
                <div className="row row-cols-2">
                    <div className="col-md-2 container"> 
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                    </div>
                    <div className="col-md-8 container-md">
                        <Test/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;