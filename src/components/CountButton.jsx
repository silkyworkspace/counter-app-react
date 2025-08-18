import { Plus, Minus, RotateCcw } from 'lucide-react';

export default function CountButton({onClick, label, icon}) {
    return (
        <button onClick={onClick} className='app_btn'>
            <span className='btn_name'>{label}</span>
            <span className='inline-block'>
                {/* <Plus className='w-4 h-4' /> */}
                {icon}
            </span>
        </button>
    );
}