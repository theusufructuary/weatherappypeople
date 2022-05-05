export default function Card({ date, tempMax, tempMin, desc }) {
  // function toDateTime(date)
  // {
  //     const t = new Date(1970, 0, 1);
  //     t.setSeconds(date);
  //     return t;
  // }

  const newDate = new Date(date * 1000);
  const realDate = newDate.toLocaleDateString();
  console.log(date, "is the date");

  return (
    <div>
      <h3>{realDate}</h3>
      <p>Maximum temperature of {tempMax.toFixed(0)} degrees kelvin</p>
      <p> Minimum temperatire of {tempMin.toFixed(0)} degrees kelvin</p>
      <p>The forecast is {desc}</p>
    </div>
  );
}
