import styled from "styled-components"

function HistoryScreen() {
    return (
        <Screen>
            <ScreenTitle>Histórico</ScreenTitle>

            <Content>Em breve você poderá ver o histórico dos seus hábitos aqui!</Content>
        </Screen>
    )
}

export default HistoryScreen;

const Content = styled.p`
    font-size: 18px;
    color: #666666;
`

const Screen = styled.div`
    width: 100%;
    height: 100vh;

    padding: 0 17px;
    padding-top: 100px;

    box-sizing: border-box;
    background-color: #E5E5E5;
`

const ScreenTitle = styled.p`
    color: #126BA5;
    font-size: 22px;
    margin-bottom: 30px;
`