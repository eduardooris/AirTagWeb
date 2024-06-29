import { Button as ButtonStrap } from "react-bootstrap"

export default function Button({ children, onClick, disabled }) {
    return (
        <ButtonStrap onClick={onClick} disabled={disabled}>{children}</ButtonStrap>
    )
}