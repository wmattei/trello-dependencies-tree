import { useEffect } from "react"

export function AddDependency() {
    useEffect(() => {
        const t = window.TrelloPowerUp.iframe()
        console.info(t);
    }, [])
    return <h1>Add dependency</h1>
}
