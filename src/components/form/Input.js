import styles from './Input.module.css'

function Input ({type, text, name, placeholder, handle0nChance, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            onChance={handle0nChance}
            value={value}
            />
        </div>
    )
}

export default Input