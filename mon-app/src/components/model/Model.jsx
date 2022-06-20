import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Label,
  Modal

} from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from "../../redux/api";


export default function Model(props) {

    const [nom, setNom] = useState("");
    const [email,setEmail] = useState("");
    const {loading,error} =useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleclick = () =>{
        addUser({nom,email}, dispatch)
        props.setIsOpen(false)
    }

  return (
    <Modal

      className=" modal-dialog-centered "
      size=""

      isOpen={props.isOpen}
    
    >
        <Card className="shadow border-0 CardStyle text-center">
          <CardHeader className="bg-transparent pb-1">
            <h3>Select Projects</h3>
          </CardHeader>
          <CardBody className="px-lg-7 py-lg-10">
            <Form role="form">
              <div className="text-center">
              <FormGroup>
                <Label>Nom</Label>
                <Input
                  type="text"
                  onChange={(e)=>setNom(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="text"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </FormGroup>
                <Button
                  className="btn btn-outline-primary  CardButtonStyle"
                  color="transparent"
                  type="button"
                  onClick={handleclick}
                >
                  Ajouter
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
    </Modal>
  );
}