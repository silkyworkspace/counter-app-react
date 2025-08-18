import CountButton from "./CountButton";
import { Plus, Minus, RotateCcw } from 'lucide-react';


export default function ButtonGroup({handleIncrement, handleDecrement, handleReset}) {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            <CountButton onClick={handleIncrement} label="Count Up" icon={<Plus />} />
            <CountButton onClick={handleDecrement} label="Count Down" icon={<Minus />} />
            <CountButton onClick={handleReset} label="Reset" icon={<RotateCcw />} />
        </div>
    );
}