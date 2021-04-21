import React from "react";
import { Container, Typography } from "@material-ui/core";
import RomanConverter from "./RomanConverter";

const CalculatorBody = () => {
  return (
    <Container
      maxWidth={"lg"}
      style={{
        backgroundColor: "white",
        marginTop: "8px",
        paddingTop: "125px",
        paddingBottom: "10px",
      }}
    >
      <Typography gutterBottom variant={"h3"}>
        History
      </Typography>
      <Typography gutterBottom paragraph variant={"body1"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat
        accumsan iaculis. Nulla nec euismod nibh. Donec ultrices enim posuere
        mauris varius, non egestas justo cursus. Maecenas dignissim ligula non
        diam ornare, vel ornare enim pretium. Cras tincidunt sem eget diam
        auctor, quis bibendum orci euismod. Mauris tempor placerat massa ut
        pharetra. Curabitur non ex id sapien egestas pharetra. Mauris non dictum
        nibh. Pellentesque non sapien non neque laoreet porta. Praesent ultrices
        gravida ex nec vulputate. Sed in vulputate leo, id volutpat tortor.
        Donec euismod sem libero, ut ullamcorper enim convallis et. Vestibulum
        vestibulum sollicitudin lorem vitae pellentesque. Vivamus porta ligula
        ac est convallis, nec accumsan odio ullamcorper. Praesent ullamcorper
        risus in tortor ullamcorper, et ullamcorper diam imperdiet.
      </Typography>
      <Typography gutterBottom variant={"h3"}>
        Roman Numeral Converter
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        Enter the Roman numeral or number and press the <i>Convert</i> button:
      </Typography>
      <RomanConverter />
    </Container>
  );
};
export default CalculatorBody;
