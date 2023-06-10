import styled from "styled-components";

const WelcomeStyle = styled.div`
header{
    height: 70px;
    padding: 30px 40px !important;

    img{
        max-height: 50px !important;
    }

    input{
        width: 250px;
        border: 0.5px solid  rgba(0, 0, 0, 0.564);
    }
}
.container1{
    height: 546px;
    background-color: #FFEC00;
    display: flex;
    justify-content: center;
    align-items: center;

}

.card{
    max-height: 400px !important;
    img{
        max-height: 200px;
        object-fit: cover;

    }
}

`;

export default WelcomeStyle;