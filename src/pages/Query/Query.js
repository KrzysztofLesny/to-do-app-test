import { useQuery } from "@tanstack/react-query"
import { 
    StyledApiResultsContainer, 
    StyledApiResultsHeader, 
    StyledApiResultsTable, 
    StyledApiResultsTableHeader, 
    StyledApiResultsTableRow 
} from "../../components/StyledApiResults";
import { StyledLoader } from "../../components/StyledLoader";

export const Query = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['people'],
        queryFn: () =>
          fetch('https://swapi.dev/api/people/').then(
            (res) => res.json(),
          ),
      })

    return (
        <StyledApiResultsContainer>
            <StyledApiResultsHeader>query</StyledApiResultsHeader>
            {isLoading && <StyledLoader>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </StyledLoader>}
            {error && <p>${error.message}</p>}
            {data && <StyledApiResultsTable>
                <StyledApiResultsTableHeader>
                    <p>Num.</p>
                    <p>Name</p>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Hair Color</p>
                </StyledApiResultsTableHeader>
                {data.results.map((person, id) => (
                    <StyledApiResultsTableRow key={id}>
                        <p>{id+1}</p>
                        <p>{person.name}</p>
                        <p>{person.height}</p>
                        <p>{person.mass}</p>
                        <p>{person.hair_color}</p>
                    </StyledApiResultsTableRow>  
                ))}
            </StyledApiResultsTable>}
        </StyledApiResultsContainer>
    )
}