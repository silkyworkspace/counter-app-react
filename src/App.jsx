import { useState } from 'react'
import { Plus, Minus, RotateCcw } from 'lucide-react';
import './App.css'
import CountDisplay from './components/CountDisplay'
// import CountButton from './components/CountButton';
import ButtonGroup from './components/ButtonGroup';

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
          <CountDisplay count={count} />

          {/* ボタンエリア */}
          <ButtonGroup
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
          />

        </div>
      </div>
    </>
  )
}

export default App
