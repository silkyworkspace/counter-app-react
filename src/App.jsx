import { useState } from 'react'
import { Plus, Minus, RotateCcw } from 'lucide-react';
import './App.css'
import CountDisplay from './components/CountDisplay'

function App() {
  const [count, setCount] = useState(0);

  // カウントアップ関数
  const handleIncrement = () => {
    //連続クリック時、まだ更新されていない古い値を使ってしまうので、
    // 関数型更新が安全(Reactが「必ず最新の値」をprevCountに渡してくれる)
    // setCount(count + 1); 
    setCount(prevCount => prevCount + 1);
  };
  // カウントダウン関数
  const handleDecrement = () => {
    // setCount(count - 1);
    setCount(prevCount => prevCount - 1);
  };

  // リセット関数
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen text-gray-300 bg-fancy'>
        <div className='max-w-xs sm:max-w-lg'>
          <h1 className='mb-6 text-xl font-medium md:text-2xl font-inter'>useState カウント</h1>

          {/* カウントエリア */}
          <CountDisplay count={count}/>

          {/* ボタンエリア */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            <button onClick={handleIncrement} className='app_btn'>
              <span className='btn_name'>Count Up</span>
              <span className='inline-block'>
                <Plus className='w-4 h-4' />
              </span>
            </button>
            <button onClick={handleDecrement} className='app_btn'>
              <span className='btn_name'>Count Down</span>
              <span className='inline-block w-4'>
                <Minus className='w-4 h-4' />
              </span>
            </button>
            <button onClick={handleReset} className='app_btn'>
              <span className='btn_name'>Reset</span>
              <span className='inline-block w-4'>
                <RotateCcw className='w-4 h-4' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
