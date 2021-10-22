import styled from 'styled-components';

const Button = styled.button`
    background: none;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
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

export default function ExerciseOne(){
    return(
        <>
            <Button>Normal</Button>
            <OutlineButton onClick={() => alert("Clicked")}>Normal</OutlineButton>
            <FillButton>Normal</FillButton>
        </>
    )
}