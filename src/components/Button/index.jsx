const Button = ({ typeName, content, className }) => (
    <button 
    type={ typeName } 
    className={className}>
        { content }
    </button>
)

export default Button