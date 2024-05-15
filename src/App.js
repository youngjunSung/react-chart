import "tailwindcss/tailwind.css";
import "./App.css";
import { BarChart, Bar, XAxis, YAxis, Cell, Legend, ResponsiveContainer } from 'recharts';

function App() {
  const data = [
    {
      name: '1월',
      uv: 4000,
    },
    {
      name: '2월',
      uv: 3000,
    },
    {
      name: '3월',
      uv: 2000,
    },
    {
      name: '4월',
      uv: 2780,
    },
    {
      name: '5월',
      uv: 1890,
    },
    {
      name: '6월',
      uv: 2390,
    },
  ];
  const data2 = [
    {
      value: '파일 이름1',
      count: 30,
      color: '#3b82f6',
    },
    {
      value: '파일 이름2',
      count: 25,
      color: '#e84646',
    },
    {
      value: '파일 이름3',
      count: 10,
      color: '#ff9500',
    },
    {
      value: '파일 이름4',
      count: 100,
      color: '#50d655',
    },
  ];

  const renderLegend = (props) => {
    const { payload } = props;
  
    return (
      <ul className="grid grid-cols-[repeat(2,_minmax(50px,_1fr))]">
        {
          payload.map((entry, index) => (
            <li key={`item-${index}`} className={`flex items-center`} style={{color : entry.color}}>
              <span className="shrink-0 w-[8px] h-[8px] rounded-full" style={{backgroundColor : entry.color}}></span><p className="text-[12px] whitespace-nowrap text-ellipsis overflow-hidden">{entry.value}</p>
            </li>
          ))
        }
      </ul>
    );
  }

  return (
    <div className="App">
      <p>차트 테스트123</p>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="#B0BBD5"  />
            <Bar dataKey="uv" barSize={16} fill="#3b82f6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" width={150} height={40} data={data2}>
          <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconSize={7}
          payload={[...data2]}
          // wrapperStyle={{display: 'flex'}}
        />
            <YAxis dataKey="count" type="category" tickFormatter={(tick) => `${tick}%`} tickLine={false} axisLine={false} stroke="#B0BBD5"  />
            {/* <XAxis type="number" tickFormatter={(tick) => `${tick}%`}/> */}
            <XAxis dataKey="avg" type="number" domain={[0, 100]} hide />
            <Bar dataKey="count" barSize={10} fill="#3b82f6" radius={10}>
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={data2[index]?.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" width={150} height={40} data={data2}>
          <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconSize={7}
          payload={[...data2]}
          content={renderLegend}
          // wrapperStyle={{display: 'flex'}}
        />
            <YAxis dataKey="count" tickMargin={6} tickSize={10} orientation="right" type="category" tickFormatter={(tick) => `${tick}%`} tickLine={false} axisLine={false} stroke="#B0BBD5"  />
            {/* <XAxis type="number" tickFormatter={(tick) => `${tick}%`}/> */}
            <XAxis dataKey="avg" type="number" domain={[0, 100]} hide />
            <Bar dataKey="count" barSize={8} fill="#3b82f6" radius={10}>
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={data2[index]?.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
