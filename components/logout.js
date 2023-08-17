import { router } from "next/router";
import axios from "axios";

function Logout() {
    const logoutProfile = async () => {
        try {
            await axios.post('/api/auth/logout');
        } catch (error) {
            console.log(error);
        }
        router.push('/login');
    } 

    return (
        <button onClick={() => logoutProfile()}>
            Logout
        </button>
    )
}

export default Logout;