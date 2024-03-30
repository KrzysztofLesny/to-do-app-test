import { useEffect, useState } from "react"
import { StyledLoader } from "../../components/StyledLoader";
import { 
    StyledApiResultsContainer, 
    StyledApiResultsHeader, 
    StyledApiResultsTable, 
    StyledApiResultsTableHeader, 
    StyledApiResultsTableRow 
} from "../../components/StyledApiResults";

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
        <StyledApiResultsContainer>
            <StyledApiResultsHeader>effect</StyledApiResultsHeader>
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
            {people && 
            <StyledApiResultsTable>
                <StyledApiResultsTableHeader>
                    <p>Num.</p>
                    <p>Name</p>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Hair Color</p>
                </StyledApiResultsTableHeader>
                {people.map((person, id) => (
                    <StyledApiResultsTableRow key={id}>
                        <p>{id+1}</p>
                        <p>{person.name}</p>
                        <p>{person.height}</p>
                        <p>{person.mass}</p>
                        <p>{person.hair_color}</p>
                    </StyledApiResultsTableRow>  
                ))}
            </StyledApiResultsTable>
            }
        </StyledApiResultsContainer>
    )
}