import { useQuery } from "@tanstack/react-query";
import {
  StyledApiResultsContainer,
  StyledApiResultsHeader,
  StyledApiResultsTable,
  StyledApiResultsTableHeader,
  StyledApiResultsTableRow,
} from "../../components/StyledApiResults";
import { Loader } from "../../components/Loader";
import { peopleQuery } from "../../api/queries";
import { Button } from "../../components/StyledButtons/Button";

export const Query = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["people"],
    queryFn: peopleQuery,
  });

  return (
    <StyledApiResultsContainer>
      <StyledApiResultsHeader>query</StyledApiResultsHeader>
      <Button variant="standard">asdsad</Button>
      {isLoading && <Loader />}
      {error && <p>${error.message}</p>}
      {data && (
        <StyledApiResultsTable>
          <StyledApiResultsTableHeader>
            <p>Num.</p>
            <p>Name</p>
            <p>Height</p>
            <p>Weight</p>
            <p>Hair Color</p>
          </StyledApiResultsTableHeader>
          {data.results.map((person, id) => (
            <StyledApiResultsTableRow key={id}>
              <p>{id + 1}</p>
              <p>{person.name}</p>
              <p>{person.height}</p>
              <p>{person.mass}</p>
              <p>{person.hair_color}</p>
            </StyledApiResultsTableRow>
          ))}
        </StyledApiResultsTable>
      )}
    </StyledApiResultsContainer>
  );
};
