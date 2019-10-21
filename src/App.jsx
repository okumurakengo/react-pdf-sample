import React,{ useState } from 'react';
import './App.css';
import User from './components/User';

function App() {

  const [data] = useState([
    { firstName: "西尾", lastName: "政治" },
    { firstName: "河村", lastName: "信広" },
    { firstName: "小川", lastName: "宜昭" },
    { firstName: "田口", lastName: "佳久" },
    { firstName: "千葉", lastName: "世弥" },
  ]);

  return (
    <div className="App">
      <div className='pdf'>
        {data.map(user => <User user={user} key={user.lastName}/>)}
      </div>
    </div>
  );
}

export default App;
