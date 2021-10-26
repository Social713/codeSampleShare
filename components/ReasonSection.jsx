import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Grid } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 200,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  media: {
    height: 140,
    paddingTop: "56.25%", // 16:9
  },
}));

const ReasonSection = ({ reasonsData }) => {
  const classes = useStyles();

  return (
    <div className="darkColor pb-20">
      <p className="text-4xl pt-20 pt-36 pb-10 text-center text-white">
        LEVEL UP YOUR CODING ABILITIES
      </p>
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="p-20 w-full flex flex-wrap justify-center items-center gap-12 ">
          {reasonsData.map((card, index) => {
            return (
              <Box mb={15} ml={5} style={{ display: "inline-block" }}>
                <Grid container spacing={4}>
                  <Card className={classes.root} key={index}>
                    {/* <img src={card.image} /> */}
                    <CardContent className="grayColor text-white">
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <p className="text-white">{card.description}</p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Box>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReasonSection;
