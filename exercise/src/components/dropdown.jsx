import './Dropdown.css'
const Dropdown = () => {
    return(<>
        <label>Choose a browser from lists:
        <input list='browser' name= 'mybrowser'/></label>
        <datalist id="browser">
            <option value= "Chrome"/>
            <option value= "Chrome"/>
            <option value= "Chrome"/>
            <option value= "Chrome"/>
        </datalist>
        </>
    )
}
export default Dropdown