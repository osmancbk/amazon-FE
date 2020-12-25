import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';

export const styles = makeStyles((theme) => ({ //???
    wrapper: {
        textAlign: 'center',
        // marginTop: -10,
  

    },
    grid: {
        // marginTop: -200,
         marginTop: 250,
         marginBottom: 20,
    }
}));


export const Box = styled.div`
      font-variant: small-caps;
      font-weight: bold;
      position: relative;
      background-color: #F5F6F6;
      padding: 10px;
      color: #0F1111;
      margin-bottom: 7px;
      /* display:block; */
      /* box-sizing: border-box; */

`;