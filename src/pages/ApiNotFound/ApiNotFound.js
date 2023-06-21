import { useRouteError } from "react-router-dom"

export const ApiNotFound = () => {
    const error = useRouteError();

    return (
        <p>{error ? error.message : 'API NOT FOUND'}</p>
    )
}