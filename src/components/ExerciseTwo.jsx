import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Animation = styled.div`
  animation: ${slideIn} 1s cubic-bezier(0.4, 0, 0.2, 1) both;
  border-radius: 5px;
  padding: 20px;
  position: fixed;
`;

const Button = styled.button`
    background: none;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 0px ;
    border-radius: 3px;
`;

const FillButton = styled(Button)`
    background: palevioletred;
    color : white;
`;

export default function ExerciseTwo(){
    return(
        <>
            <Animation> 
                <FillButton>Hello World</FillButton>    
            </Animation>
        </>
    )
}