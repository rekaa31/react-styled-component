import styled from 'styled-components';

const Button = styled.button`
    background: none;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: ${props => props.pTopBot} ${props => props.pLeftRight};
    border: 0px ;
    border-radius: 3px;
`;

const OutlineButton = styled(Button)`
    border: 2px solid palevioletred;
`;

const FillButton = styled(Button)`
    background: palevioletred;
    color : white;
`;

export default function ExerciseThree(){
    return(
        <>
            <Button pTopBot="60px" pLeftRight="90px">Normal</Button>
            <OutlineButton pTopBot="90px" pLeftRight="100px">Normal</OutlineButton>
            <FillButton pTopBot="100px" pLeftRight="130px">Normal</FillButton>
        </>
    )
}