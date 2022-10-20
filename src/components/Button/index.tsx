interface iButton {
    typeName: 'submit' | 'reset' | 'button' | undefined,
    content: string,
    className: string
}

const Button = ({ typeName, content, className }: iButton) => (
    <button 
    type={ typeName } 
    className={className}>
        { content }
    </button>
)

export default Button