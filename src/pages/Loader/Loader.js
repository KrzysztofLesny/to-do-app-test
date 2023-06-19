import { useLoaderData } from "react-router-dom"

export const Loader = () => {
    const people = useLoaderData();

    return (
        <>
            LOADER
            {people.results.map((person, id) => (
                <p key={id}>{id+1} {person.name}</p>
            ))}
        </>
    )
}

//LOADER
export const swapiLoader = async () => {
    const res = fetch('https://swapi.dev/api/people/')
    .then(res => {
        return res.json();
    })

    return res;
}