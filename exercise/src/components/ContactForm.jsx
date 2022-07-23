import './ContactForm.css'
import Dropdown from './Dropdown'

const ContactForm = () => {
    const clickHandler = () => {
        console.log('CLICKED!')
    }
    return(
        <form>
            <div>
            <h2>Let's get started!</h2>
                <label htmlFor='name'>Name</label>
                <input id='name' type="text"/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email'/>
            </div>
            <label htmlFor='message'>Message</label>
            <input id='name' type='text'/>
            <Dropdown/>
            <button onClick={clickHandler}>Submit</button>
        </form>
    )
}
export default ContactForm