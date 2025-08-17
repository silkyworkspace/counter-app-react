export default function CountDisplay({count}) {

    return (
        <div>
            <p className='mb-4 font-light font-inter'>現在のカウント</p>
            <p className='p-2 mb-10 text-3xl font-semibold tracking-wider border rounded md:w-48 md:mx-auto bg-white/10 font-fira'>{count}</p>
        </div>
    );
}