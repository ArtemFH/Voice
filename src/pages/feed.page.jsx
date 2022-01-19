import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import {Container, Button, Alert} from "@mui/material";

function Index() {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <Container style={{paddingTop: '2rem', height: "200px"}}>
            <CSSTransition
                in={showButton}
                timeout={300}
                classNames={'feed'}
                unmountOnExit
                onExited={() => setShowMessage(true)}
                onEnter={() => setShowMessage(false)}
            >
                <Button onClick={() => setShowButton(false)}>
                    Show Message
                </Button>
            </CSSTransition>
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames={'feed'}
                unmountOnExit
                onExited={() => setShowButton(true)}
                onEnter={() => setShowButton(false)}
            >
                <Alert onClick={() => setShowMessage(false)}>
                    <h1>
                        Animated alert message
                    </h1>
                </Alert>
            </CSSTransition>
        </Container>
    )
}

export default Index;