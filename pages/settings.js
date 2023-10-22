import { useSession } from "next-auth/react";

function Settings() {
    const { data: sessionData, status: sessionStatus } = useSession(); 



    function handleChange() {

    }
    
    return (
        <div className="container">
            <form onSubmit={handleChange}>
                <input
                    name="description"
                    type="description"
                    placeholder="Descripcion"
                />
                <input
                    name="locate"
                    type="locate"
                    placeholder="Ciudad"
                />
                <input
                    name="password1"
                    type="password1"
                    placeholder="Contraseña"
                />
                <input
                    name="password2"
                    type="password2"
                    placeholder="Repetir contraseña"
                />

                <button>Cambiar</button>
            </form>
        </div>
    )
}

export default Settings;