import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg className={classes.svgHover} version="1.0" xmlns="http://www.w3.org/2000/svg"  width="48.000000pt" height="48.000000pt"   preserveAspectRatio="xMidYMid meet">  
      <g transform="translate(0.000000,48.000000) scale(0.050000,-0.050000)"  stroke="none"> <path d="M396 867 c-61 -61 -79 -70 -103 -49 -46 38 -214 20 -241 -26 -17 -28 -16 -39 3 -46 43 -16 31 -168 -18 -220 l-44 -46 44 -46 c48 -52 63 -266 20 -309 -51 -51 -2 -85 123 -85 131 0 168 30 118 95 -14 19 5 6 44 -30 118 -110 410 -86 317 26 -22 27 -3 55 132 190 l158 159 -132 135 c-72 74 -137 151 -144 170 -6 20 -32 43 -57 53 -26 10 -63 36 -84 60 -50 55 -50 55 -136 -31z m-116 -76 c0 -16 -9 -34 -20 -41 -26 -16 -26 -164 0 -180 12 -7 60 31 108 84 57 62 80 101 65 110 -46 29 21 58 118 52 78 -5 163 -56 93 -56 -20 0 -309 -288 -320 -319 -3 -9 67 -87 155 -173 191 -184 198 -208 62 -208 -94 0 -149 26 -96 46 25 9 -156 214 -189 214 -9 0 -16 -45 -16 -100 0 -55 9 -100 20 -100 11 0 20 -13 20 -30 0 -23 -24 -30 -99 -30 -95 0 -143 24 -101 50 30 19 27 644 -4 655 -55 18 14 55 105 55 73 0 99 -8 99 -29z"/> </g> 
      </svg>
    );
};
