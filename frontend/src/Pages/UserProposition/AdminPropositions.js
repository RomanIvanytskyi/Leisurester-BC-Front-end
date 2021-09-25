import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { getProposition, deleteProposition } from "../../api/api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

const AdmProposition = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [toDelete, setToDelete] = useState(null);

  const handleOpen = (id) => {
    setOpen(true);
    setToDelete(id);
  };

  const handleClose = () => {
    setOpen(false);
    setToDelete(null);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      marginBottom: 15,
      align: "center",
    },
    media: {
      height: 140,
    },
    fone: {
      backgroundImage: "url(https://source.unsplash.com/random/)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
      maxWidth: "auto",
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    getProposition().then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteItem = (id) => {
    deleteProposition(id).then(() => {
      getProposition().then((res) => {
        setData(res.data);
      });
    });
  };

  return (
    <div className={classes.fone}>
      <Row
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        sm={{ span: 12 }}
      >
        {data.map((post) => {
          return (
            <Col sm="6">
              <Container fixed className={classes.container}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={post.file}
                      alt="Card image cap"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {post.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <button
                      type="button"
                      onClick={() => {
                        handleOpen(post._id);
                      }}
                    >
                      Delete
                    </button>
                    <ThisModal
                      open={open}
                      handleClose={handleClose}
                      delete={deleteItem}
                      id={toDelete}
                    />
                  </CardActions>
                </Card>
              </Container>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    background: "red",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ThisModal = (props) => {
  const classes = useStyles();

  const body = (
    <div
      className={classes.paper}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <h5 id="simple-modal-title">Do you want deleate this proposition?</h5>
      <Button
        size="small"
        color="primary"
        type="submit"
        onClick={() => {
          props.delete(props.id);
          props.handleClose();
        }}
      >
        Delete
      </Button>
    </div>
  );

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default AdmProposition;
