
import { useLocation } from 'react-router-dom';
import ContactMain from './ContactMain';
import Feedback from './Feedback';
const Contact = () => {
    const { pathname } = useLocation();
    return (


        <div>
            {
                pathname === "/contact/contact"
                    ? <ContactMain></ContactMain>
                    : <Feedback></Feedback>
            }

        </div>

    );
};

export default Contact;