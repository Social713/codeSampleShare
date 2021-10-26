import Layout from "../components/layout/Layout";
import { Form, Card, Container, Image, Button, Label } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import useAuth from "../components/auth/AuthHook";
import firebase from "firebase/app";
import "firebase/firestore";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { testAction } from "../redux/actions/testAction";
import Cookies from 'js-cookie'

function test() {
  const initialValues = {
    fname: "",
    lname: "",
    title: "Buddy",
    languages: [],
    description: "",
    hourlyRate: "",
    trialRate: "",
    createdAt: new Date(),
  };

  const { user } = useAuth();
  const [values, setValues] = useState(initialValues);
  const [data, setData] = useState([]);
  // Use the useEffect to scan the firestore db and populate the state of values
  // then past the values into the form to prevent the data in the db from being
  // overwritten
  const fbUserData = firebase.firestore().collection("test").doc(user?.uid);

  let otherUserID = Cookies.get('otherUserID');

  console.log(Cookies.get('otherUserID'), otherUserID)

  useEffect(() => {
    fbUserData.onSnapshot((doc) => {
      setValues(doc.data());
    });
  }, []);


  const sendData = async (e) => {
    try {
      await fbUserData.set(values).then(
        toast.success("Profile successfully update!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    sendData();
    
    firebase
      .storage()
      .ref(`profileImage/${user?.uid}`)
      .listAll()
      .then((snap) => {
        snap.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((imgUrl) => {
            fbUserData.update({
              photoURL: imgUrl,
            });
          });
        });
      });

      firebase
      .storage()
      .ref(`backgroundImage/${user?.uid}`)
      .listAll()
      .then((snap) => {
        snap.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((imgUrl) => {
            fbUserData.update({
              backgroundPhotoURL: imgUrl,
            });
          });
        });
      });
  };

  // FIGURE OUT
  // const validationSchema = Yup.object({
  //   fname: Yup.string().required('First name required'),
  //   lname: Yup.string().required('Last name required'),
  //   title: Yup.string().required('Please select a title'),
  //   languages: Yup.string().required('Please select at least one language'),
  //   description: Yup.string().required('You must provide a description'),
  // });

  // Needs to be it's own component
  const uploadProfilePic = (e) => {
    const file = e.target.files[0];
    const images = firebase
      .storage()
      .ref(`profileImage/${user?.uid}`)
      .child(user?.uid);
    images.put(file);
  };
  const uploadBackgroundPic = (e) => {
    const file = e.target.files[0];
    const images = firebase
      .storage()
      .ref(`backgroundImage/${user?.uid}`)
      .child(user?.uid);
    images.put(file);
  };

  // trying to grab the location of the image and link it to the db
  // useEffect(()=>{
  //   firebase.storage().ref(`profileImage/${user?.uid}`).listAll().then(snap => {
  //     snap.items.forEach(itemRef => {
  //       itemRef.getDownloadURL().then(imgUrl => {
  //         fbUserData.update({
  //           photoURL: imgUrl,
  //         })
  //         console.log(user?.uid)
  //         console.log(imgUrl)
  //       });
  //     })
  //   })
  // }, [])


  return (
    <>
      <Layout>
        <Container fluid className="my-5">
          <Card rounded centered>
            <Image circular src={data.photoURL ? data.photoURL : "/noProfilePic.png"} />
            <Card.Header className="text-2xl">
              {values.fname} {values.lname}
            </Card.Header>
            <Card.Header className="text-lg">Buddy</Card.Header>
            <Card.Header className="">{values.languages}</Card.Header>
            <Card.Description className="">
              {values.description}
            </Card.Description>
          </Card>
        </Container>

        <Formik>
          <Form onSubmit={handleSubmit} className="mr-5">
            <Form.Field>
              <Label>First Name</Label>
              <input
                placeholder="First Name"
                name="fname"
                onChange={(e) => handleInputChange(e)}
                value={values.fname}
              />
            </Form.Field>
            <Form.Field>
              <Label>Last Name</Label>
              <input
                placeholder="Last Name"
                name="lname"
                onChange={(e) => handleInputChange(e)}
                value={values.lname}
              />
            </Form.Field>
            <Form.Field>
              <Label color="white">Languages</Label>
              <input
                placeholder="Languages"
                name="languages"
                onChange={(e) => handleInputChange(e)}
                value={values.languages}
              />
            </Form.Field>
            <Form.Field>
              <Label>Description</Label>
              <input
                placeholder="Description"
                name="description"
                onChange={(e) => handleInputChange(e)}
                value={values.description}
              />
            </Form.Field>
            <Form.Field>
              <Label>Upload Profile Picture</Label>
              <input type="file" accept="image/*" onChange={uploadProfilePic} />
            </Form.Field>
            <Form.Field>
              <Label>Upload Background Picture</Label>
              <input type="file" accept="image/*" onChange={uploadBackgroundPic} />
            </Form.Field>
            <Button type="submit" floated="right" positive>
              Submit
            </Button>
          </Form>
        </Formik>
      </Layout>
    </>
  );
}
{
  /* <Form.Field>
              <label>Title</label>
              <input
                placeholder="Title"
                name='title'
                onChange={(e) => handleInputChange(e)}
                value={values.title}
              />
            </Form.Field> */
}
{
  /* <Form.Field>
              <label>Hourly Rate</label>
              <input
                placeholder="Hourly Rate"
                name='hourlyRate'
                onChange={(e) => handleInputChange(e)}
                value={values.hourlyRate}
              />
            </Form.Field>
            <Form.Field>
              <label>Trial Rate</label>
              <input
                placeholder="Trial Rate"
                name='trialRate'
                onChange={(e) => handleInputChange(e)}
                value={values.trialRate}
              />
            </Form.Field> */
}

export default test;
