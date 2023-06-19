import { useEffect, useState } from "react"
import { StyledLoader } from "../../components/StyledLoader";

export const Effect = () => {
    const [people, setPeople] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
            fetch('https://swapi.dev/api/people/')
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('Could not fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data.results);
                    setPeople(data.results);
                    setIsPending(false);
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }, []);

    return (
        <>
            EFFECT
            {isPending &&
            <StyledLoader>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </StyledLoader>
            }
            {people && people.map((person, id) => (
                <p key={id}>{id+1} {person.name}</p>
            ))}
        </>
    )
}