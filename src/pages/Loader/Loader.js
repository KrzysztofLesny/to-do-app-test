import { useLoaderData } from "react-router-dom"
import { 
    StyledApiResultsContainer, 
    StyledApiResultsHeader, 
    StyledApiResultsTable, 
    StyledApiResultsTableHeader, 
    StyledApiResultsTableRow 
} from "../../components/StyledApiResults";

export const Loader = () => {
    const people = useLoaderData();

    return (
        <StyledApiResultsContainer>
            <StyledApiResultsHeader>Loader</StyledApiResultsHeader>
            {people && 
            <StyledApiResultsTable>
                <StyledApiResultsTableHeader>
                    <p>Num.</p>
                    <p>Name</p>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Hair Color</p>
                </StyledApiResultsTableHeader>
                {people.results.map((person, id) => (
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

//LOADER
export const swapiLoader = async () => {
    const res = await fetch('https://swapi.dev/api/people/')

    if(!res.ok) {
        throw Error(`Couldn't access data from API`);
    }
    
    return res.json();
}