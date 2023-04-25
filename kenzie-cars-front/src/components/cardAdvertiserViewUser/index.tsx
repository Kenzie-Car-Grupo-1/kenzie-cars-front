import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import { useUser } from "../../context/user.context";
import {
  StyledCardDiv,
  StyledCardInfo,
  TagInitials,
} from "../cardAdvertiser/style";
import { StyledAdvertiserCard } from "./style";

const CardAdvertiserViewUser = () => {
  const { salesman } = useUser();
  console.log("s", salesman)
  return (
    <>
      {salesman.firstname.length != undefined && (
        <StyledAdvertiserCard>
          <StyledCardDiv>
            <TagInitials>{`${salesman.firstname[0]}${salesman.lastname[0]}`}</TagInitials>
          </StyledCardDiv>
          <StyledCardInfo>
            <p>{`${salesman.firstname} ${salesman.lastname}`}</p>
            <span>Anunciante</span>
          </StyledCardInfo>
          <p className="advertiser-bio">{salesman.description}</p>
          <StyledCardDiv></StyledCardDiv>
        </StyledAdvertiserCard>
      )}
    </>
  );
};

export default CardAdvertiserViewUser;
