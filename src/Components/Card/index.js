

export default function Card({ date, tempMax, tempMin, desc }) {

    // function toDateTime(date)  
    // {
    //     const t = new Date(1970, 0, 1);
    //     t.setSeconds(date);
    //     return t;
    // }

  return (
    <div>
        <h3>{date}</h3>
        <p>{tempMax}</p>
        <p>{tempMin}</p>
        <p>{desc}</p>
    </div>
  );
}