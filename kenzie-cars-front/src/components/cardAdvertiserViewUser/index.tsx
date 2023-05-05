import { useEffect } from "react";
import { useUser } from "../../context/user.context";
import {
  StyledCardDiv,
  StyledCardInfo,
  TagInitials,
} from "../cardAdvertiser/style";
import { StyledAdvertiserCard } from "./style";
import { useCars } from "../../context/cars.context";
import { useParams } from "react-router-dom";
import TagUserInitials from "../tagInitials";

const CardAdvertiserViewUser = () => {
  const { salesman, GetSalesmanById } = useUser();
  const { salesmanId } = useParams();

  useEffect(() => {
    (async () => {
      await GetSalesmanById(salesmanId!);
    })();
  }, []);
  return (
    <>
      {salesman.firstname != undefined && (
        <StyledAdvertiserCard>
          <StyledCardDiv>
            {/* <TagInitials>{`${salesman.firstname[0]}${salesman.lastname[0]}`}</TagInitials> */}
            <TagUserInitials
              firstName={salesman.firstname}
              lastName={salesman.lastname}
              uuid={salesman.id}
            />
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
