import Form from 'react-bootstrap/Form';

function Input({ label, value, onChange, name, id, placeholder, type, helpText, description }) {
    return (
        <>
            <Form.Label htmlFor="inputPassword5">{placeholder}</Form.Label>
            <Form.Control
                type={type}
                id={id}
                value={value}
                name={name}
                aria-describedby="passwordHelpBlock"
                onChange={onChange}
            />
            <Form.Text muted>
                {description}
            </Form.Text>
        </>
    );
}

export default Input;