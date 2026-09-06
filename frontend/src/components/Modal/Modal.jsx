import modal from './Modal.module.css';

export function Modal(props) {
    return (
        <div className={modal.bg}>
            <div className={modal.content}>
                {props.children}
            </div>
        </div>
    )
}