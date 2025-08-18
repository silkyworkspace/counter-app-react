export default function CountButton({onClick, label, icon}) {
    return (
        <button onClick={onClick} className='app_btn'>
            <span className='btn_name'>{label}</span>
            <span className='inline-block'>
                {icon}
            </span>
        </button>
    );
}