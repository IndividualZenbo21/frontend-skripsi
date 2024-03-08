import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {

    const {label, name, type, placeholder, value, onChange } = props || {}
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    );
}

export default InputForm
