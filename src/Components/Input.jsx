

function Input(p) {
    return (
        <div className={`${p.type === "checkbox" ? 'flex items-center' : ''} mb-5`}>
            <input className={`${p.type !== "checkbox" ? 'w-full leading-normal px-4 pt-6 pb-2 bg-[hsl(30,5%,6%)] bg-opacity-50  font-nsans-light' : 'h-5 w-8'}  border rounded `}
             type={p.type}
             placeholder={p.placeholder}
             value={p.type !== 'checkbox' ? p.value: undefined}
             onChange={p.onChange}
             checked={p.type === 'checkbox' ? p.remember : undefined}
             onClick={p.type === 'checkbox' ? p.setRemember: undefined}
              />
            {p.type === 'checkbox' && (
                <span className="ml-2 font-nsans-light">Remember me</span>
            )}
            {p.type !== 'checkbox' && (
                <p></p>
            )}
        </div>
    )
}

export default Input